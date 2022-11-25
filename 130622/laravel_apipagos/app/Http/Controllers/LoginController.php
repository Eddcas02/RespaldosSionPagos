<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuarios;

class LoginController extends Controller
{
    public function autenticar(Request $request)
    {
        $usuarios = Usuarios::where('password','=',$request->password)
                            ->where(function($q) use($request){
                                $q->where('correo','=',$request->user)
                                ->orWhere('nombre_usuario','=',$request->user);
                            })->first();
        if($usuarios){
            return response()->json($usuarios->api_token, 200);
        }else{
            return response()->json(null, 404);
        }
    }
}
