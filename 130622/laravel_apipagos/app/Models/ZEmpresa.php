<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ZEMPRESA extends Model
{
    public $timestamps = false;
    protected $connection = 'sqlsrv';
    protected $table = 'EMPRESA';  
}
