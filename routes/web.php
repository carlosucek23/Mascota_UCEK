
<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });


Route::apiResource('apiMascota','MascotaController');
Route::apiResource('apiEspecie','EspecieController');
Route::apiResource('apiPropietario','PropietarioController');
Route::apiResource('apiRaza','RazaController');
Route::apiResource('apiProducto','ProductoController');


Route::get('prueba', function(){
    //return base64_encode('HOLA');
    return DB::select("SELECT * FROM usuarios");
});

Route::get('Desencriptar', function(){
    return base64_decode('SE9MQQ==');
});

Route::post('validar','AccesoController@validar');


Route::get('mascotas', function (){
    return view('mascotas');
});

Route::get('propietarios', function (){
    return view('propietarios');
});

Route::get('especie', function () {
    return view('especie');
});

Route::get('ventas', function () {
    return view('ventas');
});

Route::get('/', function (){
    return view('login');
});


Route::get('codificar', function (){
    return base64_encode('jose');
});

