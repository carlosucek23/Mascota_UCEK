

@extends('layouts.master')
@section('contenido')

<!--INICIO DE VUE-->
    <div id="apiespecie">
<div class="row">

          <div class="col-md-12">

            <div class="card card-warning card-outline">
              <div class="card-header">
                <h5>CRUD ESPECIES<button class="btn btn-primary" @click="mostrarModal()">Agregar</button></h5> 
              </div>
              <div class="card-body">
                
                <table class="table-bordered table-striped table-hover table-responsive-sm" >

                    <thead>

                    <th>CLAVE</th>
                    <th>ESPECIE</th>
                    <th>OPERACIONES</th>

                    </thead>

                    <tbody>
                        <tr v-for="especie in especies">
                            <td>@{{especie.id_especie}}</td>
                            <td>@{{especie.especie}}</td>
                            <td>
                                <button class="btn btn-danger" @click="eliminarEspecie(especies.id_especie)">ELIMINAR</button>
                            </td>  
                        </tr>
                    </tbody>
                    
                </table>


              </div>
            </div>
          </div>
          <!-- /.col-md-6 -->
        </div>
<!-- Modal para el formulario del registro de los moovimientos -->
<div class="modal fade" id="modalEspecies" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro de Clientes</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-row"> 
            <div class="col">
                <input type="text" class="form-control" placeholder="clave">
            </div>

            <div class="col">
                <input type="text" class="form-control" placeholder="nombre de especie">
            </div>

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="">Guardar</button>
      </div>
    </div>
  </div>
</div>
<!-- aqui termina el modal-->

    </div><!--fin de vue-->
@endsection
@push('scripts')
<script type="text/javascript" src="{{asset('js/apis/especies.js')}}"></script>
<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
@endpush