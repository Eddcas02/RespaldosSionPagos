<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\Flujos;
use App\Models\RestriccionEmpresa;
use App\Models\UsuarioGrupo;
use App\Models\Politicas;
use Carbon\Carbon;

class ReportesController extends Controller
{
    public function pendientesreporte()
    {
        $pagos = Flujos::leftJoin('FlujoDetalle', function($join){
            $join->on('FlujoDetalle.IdFlujo', '=', 'Flujo.id_flujo')
            ->on('FlujoDetalle.IdEstadoFlujo','=','Flujo.estado');
        })
        ->leftJoin('EstadoFlujo', function($join){
            $join->on('EstadoFlujo.id_estadoflujo', '=', 'FlujoDetalle.IdEstadoFlujo');
        })
        ->selectRaw(
            "Flujo.doc_num,
            DATE_FORMAT(Flujo.doc_date,'%d-%m-%Y')as doc_date,
            Flujo.comments,
            Flujo.tipo,
            EstadoFlujo.descripcion as estado,
            Flujo.dias_credito,
            Flujo.dias_credito - TIMESTAMPDIFF(DAY, Flujo.doc_date, DATE_ADD(NOW(), INTERVAL 1 HOUR)) as dias_vencimiento,
            MAX(FlujoDetalle.NivelAutorizo) as nivel,
            ((TIMESTAMPDIFF(DAY, Flujo.doc_date, DATE_ADD(NOW(), INTERVAL 1 HOUR))*100)/Flujo.dias_credito) as porcentaje"
        )
        ->where('Flujo.estado', '<', 5)
        ->where('FlujoDetalle.FlujoActivo', 1)
        ->orderBy('Flujo.id_flujo', 'ASC')
        ->groupBy('Flujo.id_flujo',
        'Flujo.doc_num',
        'Flujo.doc_date',
        'Flujo.comments',
        'Flujo.tipo',
        'EstadoFlujo.descripcion',
        'Flujo.dias_credito')  
        ->get();

        foreach($pagos as $item){
            if($item['dias_vencimiento'] < 0){
                $item['dias_vencimiento'] = 0;
            }
            if($item['porcentaje'] == null){
                $item['porcentaje'] = 0;
            }else{
                $item['porcentaje'] = (float)$item['porcentaje'];
            }
            if($item['nivel'] > 0){
                $item['estado'] = 'Autorizado nivel '.$item['nivel'];
            }else{
                $item['estado'] = $item['estado'];
            }
        }
        
        $datos = array();
        $datos['flujos'] = $pagos;
        return $datos;        
    }

    public function canceladosreporte()
    {
        $EmpresasRestringidas = RestriccionEmpresa::select(['empresa_codigo'])->where('eliminado',0)
        ->where('activo',1)->get()->toArray();
        $pagos = Flujos::join('FlujoDetalle', function($join){
            $join->on('FlujoDetalle.IdFlujo', '=', 'Flujo.id_flujo');
        })
        ->selectRaw(
            "Flujo.empresa_nombre,
            Flujo.doc_num,
            Flujo.cuenta_orgien,
            Flujo.en_favor_de,
            Flujo.comments,
            Flujo.doc_total,
            Flujo.doc_date,
            DATE_FORMAT(FlujoDetalle.Fecha,'%d-%m-%Y %H:%i:%s') as fecha"
        )
        ->where('FlujoDetalle.IdEstadoFlujo', 8)
        ->where('FlujoDetalle.FlujoActivo', 1)
        ->whereNotIn('Flujo.empresa_codigo', $EmpresasRestringidas)
        ->orderBy('Flujo.id_flujo', 'ASC')  
        ->get();
        
        $datos = array();
        $datos['flujos'] = $pagos;
        return $datos;        
    }

    public function rechazadosreporte()
    {
        $EmpresasRestringidas = RestriccionEmpresa::select(['empresa_codigo'])->where('eliminado',0)
        ->where('activo',1)->get()->toArray();
        $pagos = Flujos::join('FlujoDetalle', function($join){
            $join->on('FlujoDetalle.IdFlujo', '=', 'Flujo.id_flujo');
        })
        ->selectRaw(
            "Flujo.empresa_nombre,
            Flujo.doc_num,
            Flujo.cuenta_orgien,
            Flujo.en_favor_de,
            Flujo.comments,
            Flujo.doc_total,
            Flujo.doc_date,
            DATE_FORMAT(FlujoDetalle.Fecha,'%d-%m-%Y %H:%i:%s') as fecha,
            FlujoDetalle.Comentario"
        )
        ->where('FlujoDetalle.IdEstadoFlujo', 9)
        ->where('FlujoDetalle.FlujoActivo', 1)
        ->whereNotIn('Flujo.empresa_codigo', $EmpresasRestringidas)
        ->orderBy('Flujo.id_flujo', 'ASC')  
        ->get();
        
        $datos = array();
        $datos['flujos'] = $pagos;
        return $datos;        
    }

    public function pendientesvalidacionreporte()
    {
        $pagos = DB::select('CALL ReportePendientesValidacion()', array());
        
        $datos = array();
        $datos['flujos'] = $pagos;
        return $datos;        
    }

    public function compensadosreporte()
    {
        $EmpresasRestringidas = RestriccionEmpresa::select(['empresa_codigo'])->where('eliminado',0)
        ->where('activo',1)->get()->toArray();
        $pagos = Flujos::join('FlujoDetalle', function($join){
            $join->on('FlujoDetalle.IdFlujo', '=', 'Flujo.id_flujo');
        })
        ->selectRaw(
            "Flujo.empresa_nombre,
            Flujo.doc_num,
            Flujo.cuenta_orgien,
            Flujo.en_favor_de,
            Flujo.comments,
            Flujo.doc_total,
            Flujo.doc_date,
            DATE_FORMAT(FlujoDetalle.Fecha,'%d-%m-%Y %H:%i:%s') as fecha,
            (select DATE_FORMAT(MAX(fd.Fecha),'%Y-%m-%d') from FlujoDetalle as fd where fd.IdEstadoFlujo = 1
            and fd.IdFlujo = Flujo.id_flujo) as creation_date,
            (select DATE_FORMAT(MAX(fd.Fecha),'%d-%m-%Y %H:%i:%s') from FlujoDetalle as fd where fd.IdEstadoFlujo = 5
            and fd.IdFlujo = Flujo.id_flujo) as aut_date"
        )
        ->where('FlujoDetalle.IdEstadoFlujo', 7)
        ->where('FlujoDetalle.FlujoActivo', 1)
        ->whereNotIn('Flujo.empresa_codigo', $EmpresasRestringidas)
        ->orderBy('Flujo.id_flujo', 'ASC')  
        ->get();
        
        $datos = array();
        $datos['flujos'] = $pagos;
        return $datos;        
    }

    public function novisadoreporte()
    {
        $EmpresasRestringidas = RestriccionEmpresa::select(['empresa_codigo'])->where('eliminado',0)
        ->where('activo',1)->get()->toArray();
        $pagos = Flujos::join('FlujoDetalle', function($join){
            $join->on('FlujoDetalle.IdFlujo', '=', 'Flujo.id_flujo');
        })
        ->selectRaw(
            "Flujo.empresa_nombre,
            Flujo.doc_num,
            Flujo.cuenta_orgien,
            Flujo.en_favor_de,
            Flujo.comments,
            Flujo.doc_total,
            Flujo.doc_date,
            DATE_FORMAT(FlujoDetalle.Fecha,'%d-%m-%Y %H:%i:%s') as fecha,
            (select DATE_FORMAT(MAX(fd.Fecha),'%Y-%m-%d') from FlujoDetalle as fd where fd.IdEstadoFlujo = 1
            and fd.IdFlujo = Flujo.id_flujo) as creation_date,
            (select DATE_FORMAT(MAX(fd.Fecha),'%d-%m-%Y %H:%i:%s') from FlujoDetalle as fd where fd.IdEstadoFlujo = 5
            and fd.IdFlujo = Flujo.id_flujo) as aut_date"
        )
        ->where('FlujoDetalle.IdEstadoFlujo', 14)
        ->where('FlujoDetalle.FlujoActivo', 1)
        ->whereNotIn('Flujo.empresa_codigo', $EmpresasRestringidas)
        ->orderBy('Flujo.id_flujo', 'ASC')  
        ->get();
        
        $datos = array();
        $datos['flujos'] = $pagos;
        return $datos;        
    }

    public function graficoSemaforoIndividual(Request $request){

        
        $EmpresasRestringidas = RestriccionEmpresa::select(['empresa_codigo'])->where('eliminado',0)
        ->where('activo',1)->get()->toArray();

        $usuariogrupo = UsuarioGrupo::join('GrupoAutorizacion', function($join){
            $join->on('UsuarioGrupoAutorizacion.id_grupoautorizacion', '=',
            'GrupoAutorizacion.id_grupoautorizacion');
        })
        ->select('UsuarioGrupoAutorizacion.id_grupoautorizacion', 'UsuarioGrupoAutorizacion.nivel')
        ->where('UsuarioGrupoAutorizacion.id_usuario', $request->id_usuario)
        ->where('UsuarioGrupoAutorizacion.activo', 1)->where('UsuarioGrupoAutorizacion.eliminado', 0)
        ->where('GrupoAutorizacion.activo', 1)->where('GrupoAutorizacion.eliminado', 0)
        ->get();

        $ListaGruposUsuarios = array();
        $flujos = array();
        if($usuariogrupo->count()>0){
            $ListaGruposUsuarios = $usuariogrupo->toArray();
        }
        $i = 0;
        $grupos = array();
        foreach($ListaGruposUsuarios as $item){
            $grupos[$i] = $item['id_grupoautorizacion'];
            $i += 1;
        }
        
        $ListaFlujosGrupo = Flujos::selectRaw(
            "Flujo.id_flujo,
            Flujo.id_grupoautorizacion,
            Flujo.doc_date,
            Flujo.nivel,
            Flujo.dias_credito,
            Flujo.estado
            "
        )
        ->where('Flujo.tipo', $request->tipo)
        ->whereIn('Flujo.id_grupoautorizacion', $grupos)
        ->where('Flujo.estado', '<', 5)
        ->where('Flujo.activo', '=',1)
        ->where('Flujo.eliminado', '=',0)
        ->whereNotIn('Flujo.empresa_codigo', $EmpresasRestringidas)
        ->orderBy('Flujo.id_flujo', 'ASC')  
        ->get();

        $politicaVerde = Politicas::where('identificador','=','_SEMAFORO_VERDE')
        ->where('activo',1)->where('eliminado',0)->first();
        $valorVerde = intval($politicaVerde->valor);

        $politicaAmarillo = Politicas::where('identificador','=','_SEMAFORO_AMARILLO')
        ->where('activo',1)->where('eliminado',0)->first();
        $valorAmarillo = intval($politicaAmarillo->valor);

        $j = 0;
        foreach($ListaGruposUsuarios as $item){
            foreach($ListaFlujosGrupo as $itemFlujo){
                if($item['id_grupoautorizacion'] == $itemFlujo['id_grupoautorizacion'] && 
                $item['nivel'] == $itemFlujo['nivel']){
                    $flujos[$j] = $itemFlujo;
                    $j += 1;
                }elseif($item['id_grupoautorizacion'] == $itemFlujo['id_grupoautorizacion'] && 
                $itemFlujo['estado'] == 3 && $itemFlujo['nivel'] == 0 && $item['nivel'] == 1){
                    $flujos[$j] = $itemFlujo;
                    $j += 1;
                }
            }
        }  

        $totalRojo = 0;
        $totalAmarillo = 0;
        $totalVerde = 0;

        foreach($flujos as $item){
            $diasCredito = intval($item['dias_credito']);
            $fechaDocumentoTmp = strtotime($item['doc_date']);
            $fechaDocumentoTmp2 = date('Y-m-d',$fechaDocumentoTmp);
            $fechaDocumento = date_create($fechaDocumentoTmp2);
            $fechaActualTmp = Carbon::now('America/Guatemala');
            $fechaActualTmp2 = strtotime($fechaActualTmp);
            $fechaActualTmp3 = date('Y-m-d',$fechaActualTmp2);
            $fechaActual = date_create($fechaActualTmp3);
            $diferencia = (array) date_diff($fechaDocumento,$fechaActual);
            $diasDesdeCreacion = $diferencia['days'];
            $porcentaje = 100;
            if($diasCredito > 0){
                $porcentaje = intval(($diasDesdeCreacion * 100) / $diasCredito);
            }
            if($porcentaje <= $valorVerde){
                $totalVerde++;
            }
            if($porcentaje > $valorVerde && $porcentaje <= $valorAmarillo){
                $totalAmarillo++;
            }
            if($porcentaje > $valorAmarillo){
                $totalRojo++;
            }
        }
        $datos = array();
        $datos[] = array(
            "nombreSemaforo" => "ROJO",
            "cantidad" => $totalRojo
        );
        $datos[] = array(
            "nombreSemaforo" => "AMARILLO",
            "cantidad" => $totalAmarillo
        );
        $datos[] = array(
            "nombreSemaforo" => "VERDE",
            "cantidad" => $totalVerde
        );
		$datosFinal = array();
        $datosFinal['flujos'] = $datos;
        return $datosFinal;
    }
}