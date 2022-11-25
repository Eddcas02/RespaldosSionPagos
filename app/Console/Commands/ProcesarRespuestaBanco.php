<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Models\Flujos;
use App\Models\FlujoDetalle;
use PDF;
use Illuminate\Support\Facades\Mail;
use App\Mail\EnviarRecibo;
use App\Mail\EnviarReciboNotificacion;
use App\Models\Politicas;

class ProcesarRespuestaBanco extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'banco:procesar';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Procesa respuesta de banco';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Log::info('Ejecución de proceso procesamiento de respuesta '.date('Y-m-d h:i:s'));
        try
        {
            $pathOrigen = storage_path('app/respuestaBanco/pendientes');
            $pathTerminado = storage_path('app/respuestaBanco/procesados/');
            $correoDestino = "ecasasola@sion.com.gt";
            $politicas = Politicas::where('identificador','=','_CORREO_RECIBO_PROVEEDOR_SIN_CORREO_')
            ->where('activo',1)->where('eliminado',0)->first();
            if($politicas){
                $correoDestino = $politicas->valor;
            }
            $files_local = File::allFiles($pathOrigen);
            foreach($files_local as $item){
                Log::info($item.' '.date('Y-m-d h:i:s'));
                libxml_use_internal_errors(true);
                $datosArchivo = pathinfo($item);
                $pathDestino = $pathTerminado.$datosArchivo['basename'];
                $pathDestinoError = storage_path('app/respuestaBanco/errorDocumento/').$datosArchivo['basename'];
                $filepath= file_get_contents($item);
                # Se quitan los caracteres especiales
                $filechange1 = str_replace(array("\n", "\r", "\t"), '', $filepath);
                $filechange = str_replace('&', '&amp;', $filechange1);
                $filetrim = trim(str_replace('"', "'", $filechange));
                try
                {
                    # Se carga el xml
                    $resultxml = simplexml_load_string($filetrim);
                }catch(Exception $e){
                    $resultxml = null;
                }
                # Se valida si es un xml sin errores
                if($resultxml){
                    $resultjson = json_encode($resultxml);
                    $json = json_encode($resultxml);
                    $phpArray = json_decode($json, true);
                    if(array_key_exists('OrgnlPmtInfAndSts',$phpArray['CstmrPmtStsRpt'])){
                        $num_doc = trim($phpArray['CstmrPmtStsRpt']['OrgnlPmtInfAndSts']['TxInfAndSts']['OrgnlEndToEndId']).'';
                        $existeFlujo = Flujos::where('doc_num',$num_doc)
                        ->where('activo','=',1)
                        ->where('eliminado','=',0)->first();
                        Log::info($existeFlujo);
                        if($existeFlujo != null){
                            $respuesta = trim($phpArray['CstmrPmtStsRpt']['OrgnlPmtInfAndSts']['TxInfAndSts']['StsId']);
                            $comentario = trim($phpArray['CstmrPmtStsRpt']['OrgnlPmtInfAndSts']['TxInfAndSts']['StsRsnInf']['AddtlInf']);
                            if($respuesta == 'RJCT'){
                                $flujoDetalle = new FlujoDetalle;
                                $flujoDetalle->IdFlujo = $existeFlujo->id_flujo;
                                $flujoDetalle->IdEstadoFlujo = 9;
                                $flujoDetalle->IdUsuario = 11;
                                $flujoDetalle->Fecha = date("Y-m-d H:i",strtotime('-6 hour',strtotime(now())));
                                $flujoDetalle->Comentario = $comentario;
                                $flujoDetalle->NivelAutorizo = 0;
                                $flujoDetalle->save();
                                Flujos::where('id_flujo', $existeFlujo->id_flujo)
                                ->update([
                                    'estado' => 9,
                                    'nivel' => 0
                                ]);
                                File::move($item,$pathDestino);
                            }
                            if($respuesta == 'ACSP'){
                                $flujoDetalle = new FlujoDetalle;
                                $flujoDetalle->IdFlujo = $existeFlujo->id_flujo;
                                $flujoDetalle->IdEstadoFlujo = 15;
                                $flujoDetalle->IdUsuario = 11;
                                $flujoDetalle->Fecha = date("Y-m-d H:i",strtotime('-6 hour',strtotime(now())));
                                $flujoDetalle->Comentario = $comentario;
                                $flujoDetalle->NivelAutorizo = 0;
                                $flujoDetalle->save();
                                Flujos::where('id_flujo', $existeFlujo->id_flujo)
                                ->update([
                                    'estado' => 15,
                                    'nivel' => 0
                                ]);
                                File::move($item,$pathDestino);
                                
                                $nombreArchivoPdf = 'ReciboPago'.$existeFlujo->id_flujo.'.pdf';
    
                                //Consulta a WS por correo de proveedor
                                $client = new \nusoap_client('http://10.20.30.144/GSION_WS/WSGetFromSAP.asmx?wsdl',true);
                                $param = array('sCardCode'=>$existeFlujo->card_code);
                                $resultado = $client->call('Get_PROVEEDOR_XML',$param);
                                if($client->fault)
                                {
                                    $error = $client->getError();;
                                    if($error)
                                    {
                                        echo 'Error:' . $client->faultstring;
                                    }
                                    die();
                                }
                                $lineas = $resultado['Get_PROVEEDOR_XMLResult']['BOM']['BO']['OCRD']['row'];
                                if(count($lineas) == count($lineas, COUNT_RECURSIVE))
                                {
                                    if($lineas['E_Mail'] != ""){
                                        $correoDestino = $lineas['E_Mail'];
                                    }
                                }
                                $moneda = "Q ";
                                if($existeFlujo->doc_curr != 'QTZ'){
                                    $moneda = "$ ";
                                }
    
                                //datos para pdf
                                $dataArchivo = [
                                    'banco_origen' => "Banco de América Central, S.A",
                                    'generado_por' => $existeFlujo->empresa_nombre, 
                                    'banco_destino' => $existeFlujo->bank_code,
                                    'cuenta_destino' => $existeFlujo->dfl_account,
                                    'nombre_destino' => $existeFlujo->en_favor_de, 
                                    'descripcion_pago' => $existeFlujo->comments,
                                    'monto' => $moneda.$existeFlujo->doc_total
                                ];
    
                                //Crear archivo PDF
                                $pdf = PDF::loadView('plantilla-recibo-pdf', compact('dataArchivo'))->setPaper('letter');
                                $pathArchivoPdf = base_path('archivosPdf');
                                $pdf->save($pathArchivoPdf.'/'.$nombreArchivoPdf);
                                $details=['id_flujo' => $existeFlujo->id_flujo];
                                $details+=['archivoPDF' => $pathArchivoPdf.'/'.$nombreArchivoPdf];
                                Mail::to($correoDestino)->send(new EnviarRecibo($details));
    
                                $CorreosNotificacionRecibos = Politicas::where('identificador','=','_CORREO_RECIBO_TRANSFER_')
                                ->where('activo',1)->where('eliminado',0)->get();
    
                                foreach($CorreosNotificacionRecibos as $itemCorreo){
                                   Mail::to($itemCorreo->valor)->send(new EnviarReciboNotificacion($details));
                                }
                            }
                        }
                    }else{
                        File::move($item,$pathDestinoError);
                    }
                }else{
                    File::move($item,$pathDestinoError);
                }
            }
        }catch(Exception $e){
            Log::error($e->getMessage());
        }
        return 0;
    }
}
