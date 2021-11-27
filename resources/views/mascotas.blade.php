@extends('layouts.master')
@section('titulo','CRUD MAIN')
@section('contenido')
 
<!--Inicia Vue-->
 <div id="mascota">
    <div class="row">
        <div class="col-md-12">
            <div class="card-warning">
                <div class="card-header">
                    <h3>CRUD MASCOTAS <button class="btn btn-primary" @click="mostrarModal()"><i class="fas fa-plus"></i></button></h3>
                </div>

                <div class="card-body">
                     <!--INICION DE LA TABLA-->
            <table class="table-bordered table-striped">
                <thead>
                    <th hidden>CLAVE</th>
                    <th>NOMBRE</th>
                    <th>GENERO</th>
                    <th>PESO</th>
                    <th>PROPIETARIO</th>
                    <th>ESPECIE</th>
                    <th>RAZA</th>
                    <th>ACCIONES</th>
                </thead>

                <tbody>
                    <tr v-for="mascota in mascotas">
                        <td hidden>@{{mascota.id_mascota}}</td>
                        <td>@{{mascota.nombre}}</td>
                        <td>@{{mascota.genero}}</td>
                        <td>@{{mascota.peso}}</td>
                        <td>@{{mascota.id_propietario}}</td>
                        <td>@{{mascota.id_especie}}</td>
                        <td>@{{mascota.id_raza}}</td>
                        <td>
                            <button class="btn btn-sm">
                                <i class="far fa-edit"></i>
                            </button>

                            <button class="btn btn-sm" @click="eliminarMascota(mascota.id_mascota)">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!--FIN DE LA TABLA-->
                </div>
        </div>
    </div>
        <!--FIN DEL COL-MD-12-->
    </div>
    <!-- Modal -->
<div class="modal fade" id="modalMascota" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Agregar Mascota</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       
       <input type="text" class="form-control" placeholder="Escriba el nombre de mascota" v-model="nombre"><br>
       <input type="number" class="form-control" placeholder="Escriba la edad" v-model="edad"><br>
       <input type="number" class="form-control" placeholder="Escriba el peso" v-model="peso"><br>
       
       <select class="form-control" v-model="genero">
           <option disabled ="">Elija un genero</option>
           <option value="M">M</option>
           <option value="H">H</option>
       </select>
      

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="guardarMascota">Guardar</button>
      </div>
    </div>
  </div>
</div>
<!-- aqui termina el modal-->
 </div>
 <!--Termina Vue-->
@endsection

@push('scripts')
<script type="text/javascript" src="{{asset('js/apis/mascotas.js')}}"></script>
<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>

@endpush
