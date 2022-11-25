<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuarios;
use App\Models\LogPassword;
use App\Models\LogLogin;
use App\Models\Bitacora;
use Carbon\Carbon;
use Illuminate\Support\Str;


class DatosUsuarioAdmin{
    public $id;
    public $email;
    public $password;
    public $nombre_usuario;
    public $nombre;
    public $apellido;
    //public $perfil;
    public $activo;
    public $eliminado;
}

class UsuariosController extends Controller
{
    public function index()
    {        
        $usuarios = Usuarios::select(
            'usuarios.id_usuario as id',
            'usuarios.correo as email',
            'usuarios.password',
            'usuarios.nombre_usuario',
            'usuarios.nombre',
            'usuarios.apellido',
            'usuarios.cambia_password',
            'usuarios.activo',
            'usuarios.eliminado'
        )
        ->where('usuarios.eliminado', 0)
        ->orderBy('usuarios.id_usuario','ASC')->get();
        $datos = array();
        $datos['users'] = $usuarios;
        return $datos;
    }

    public function login($usuario)
    {        
        $usuarios = Usuarios::selectRaw(
            "usuarios.id_usuario as id,
            usuarios.correo as email,
            usuarios.password,
            usuarios.nombre_usuario,
            usuarios.nombre,
            usuarios.apellido,
            usuarios.cambia_password,
            usuarios.activo,
            usuarios.eliminado,
            (select count(*) from SesionUsuario as su where su.IdUsuario = usuarios.id_usuario) as cantidadIngresos"
        )
        ->where('usuarios.correo', $usuario)
        ->orWhere('usuarios.nombre_usuario', $usuario)
        ->orderBy('usuarios.id_usuario','ASC')->get();
        $datos = array();
        $datos['users'] = $usuarios;
        return $datos;
    }

    public function show($id_grupo, $id_flujo)
    {
        $usuariosGrupo = Usuarios::join('UsuarioGrupoAutorizacion', function($join){
            $join->on('usuarios.id_usuario', '=', 'UsuarioGrupoAutorizacion.id_usuario');
        })->join('Flujo', function($join){
            $join->on('Flujo.id_grupoautorizacion', '=', 'UsuarioGrupoAutorizacion.id_grupoautorizacion');
        })
        ->select(
            'usuarios.id_usuario',
            'usuarios.nombre_usuario',
            'UsuarioGrupoAutorizacion.nivel as nivel'
        )
        ->where('UsuarioGrupoAutorizacion.activo', 1)->where('UsuarioGrupoAutorizacion.eliminado', 0)
        ->where('usuarios.activo', 1)->where('usuarios.eliminado', 0)
        ->where('Flujo.id_grupoautorizacion', $id_grupo)
        ->where('Flujo.id_flujo', $id_flujo)
        ->orderBy('UsuarioGrupoAutorizacion.nivel','ASC')->get()->toArray();

        $usuariosFlujo = Usuarios::join('FlujoDetalle', function($join){
            $join->on('FlujoDetalle.IdUsuario', '=', 'usuarios.id_usuario');
        })->join('UsuarioPerfil', function($join){
                $join->on('FlujoDetalle.IdUsuario', '=', 'UsuarioPerfil.id_usuario');
        })
        ->selectRaw(
            "usuarios.id_usuario,
            usuarios.nombre_usuario,
            0 as nivel,
            'Carga de archivo' as perfil,
            1 as id_perfil"
        )
        ->where('usuarios.activo', 1)->where('usuarios.eliminado', 0)
        ->where('UsuarioPerfil.activo', 1)->where('UsuarioPerfil.eliminado', 0)
        ->where('FlujoDetalle.IdEstadoFlujo', 2)
        ->where('FlujoDetalle.IdFlujo', $id_flujo)
        ->groupBy('usuarios.id_usuario')
        ->groupBy('usuarios.nombre_usuario')->get()->toArray();
        
        $usuarios = array_merge($usuariosGrupo, $usuariosFlujo);

        $datos = array();
        $datos['users'] = $usuarios;
        return $datos;
    }

    public function store(Request $request)
    {
        $respuesta = '';
        $usuario = Usuarios::select('nombre as usuario')->where('correo', '=', $request->correo)
        ->get();
        if ($usuario->count() > 0) {
            $respuesta='Repetido';
        } else {
            $usuarios = new Usuarios;
            $usuarios->correo = $request->correo;
            $usuarios->password = $request->password;
            $usuarios->nombre_usuario = $request->nombre_usuario;
            $usuarios->nombre = $request->nombre;
            $usuarios->apellido = $request->apellido;
            $usuarios->cambia_password = $request->cambia_password;
            $usuarios->api_token = (string) Str::uuid();
            $usuarios->activo = 1;
            $usuarios->eliminado = 0;
            $usuarios->save();
            $respuesta='OK';

            $fechaActual = Carbon::now('America/Guatemala');
            $bitacora = new Bitacora;
            $bitacora->id_usuario = $request->id_usuario;
            $bitacora->fecha_hora = $fechaActual;
            $bitacora->accion = 'crear';
            $bitacora->objeto = 'Usuarios';
            $bitacora->parametros_nuevos = 'ID '.$usuarios->id_usuario;
            $bitacora->save();
    
        }
        return response()->json($respuesta);
    }

    public function update(Request $request, $id, $opcion)
    {
        if ($opcion == '1') {
            $usuarios = Usuarios::find($id);
            $datosAnteriores = json_encode($usuarios,true);
            $usuarios->correo = $request->correo;
            $usuarios->nombre_usuario = $request->nombre_usuario;
            $usuarios->nombre = $request->nombre;
            $usuarios->apellido = $request->apellido;
            $usuarios->cambia_password = $request->cambia_password;
            $usuarios->activo = $request->activo;
            $usuarios->eliminado = 0;
            $usuarios->save();

            $fechaActual = Carbon::now('America/Guatemala');
            $bitacora = new Bitacora;
            $bitacora->id_usuario = $request->id_usuario;
            $bitacora->fecha_hora = $fechaActual;
            $bitacora->accion = 'editar';
            $bitacora->objeto = 'Usuarios';
            $bitacora->parametros_anteriores = $datosAnteriores;
            $bitacora->parametros_nuevos = json_encode($request->getContent(),true);
            $bitacora->save();

            return response()->json("OK"); 
        } else if ($opcion == '2') {
            $usuarios = Usuarios::find($id);
            $usuarios->eliminado = 1;
            $usuarios->save();

            $fechaActual = Carbon::now('America/Guatemala');
            $bitacora = new Bitacora;
            $bitacora->id_usuario = $request->id_usuario;
            $bitacora->fecha_hora = $fechaActual;
            $bitacora->accion = 'eliminar';
            $bitacora->objeto = 'Usuarios';
            $bitacora->parametros_nuevos = 'ID '.$id;
            $bitacora->save();
            
            return response()->json("OK");
        }
    }

    public function delete(Request $request)
    {
        $usuarios->delete();

        return response()->json(null, 204);
    }
}
