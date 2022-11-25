<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Models\Flujos;
use App\Models\FlujoDetalle;

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
            $files_local = File::allFiles($pathOrigen);
            foreach($files_local as $item){
                $datosArchivo = pathinfo($item);
                $pathDestino = $pathTerminado.$datosArchivo['basename'];
                $pathDestinoError = storage_path('app/respuestaBanco/errorDocumento/').$datosArchivo['basename'];
                Log::info($pathDestino);
                $xmlString = file_get_contents($item);
                $xmlObject = simplexml_load_string($xmlString);

                $json = json_encode($xmlObject);
                $phpArray = json_decode($json, true);
                if(array_key_exists('OrgnlPmtInfAndSts',$phpArray['CstmrPmtStsRpt'])){
                    $num_doc = trim($phpArray['CstmrPmtStsRpt']['OrgnlPmtInfAndSts']['TxInfAndSts']['OrgnlEndToEndId']).'';
                    $existeFlujo = Flujos::where('doc_num',$num_doc)
                    ->where('activo',1)->where('eliminado',0)->first();
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
                        }
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
