<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
    // Definir elementos de mi modelo
    protected $table='mascotas';
    protected $primaryKey='id_mascota';

    // espesificamos las relaciones
    public $with=['especie','raza'];

    // Define si la llave primaria es o no un numero incrementable
     public $incrementing=true;

     // activar o desactivar etiquetas de tiempo

     public $timestamps=true;

     public $fillable=[
        'id_mascota',
        'nombre',
        'genero',
        'peso',
        'id_propietario',
        'id_especie',
        'id_raza'
     ];

     public function especie()
     {
         return $this->belongsTo(Especie::class,'id_especie','id_especie');
     }

     public function raza(){
         return $this->belongsTo(Raza::class,'id_raza','id_raza');
     }


}