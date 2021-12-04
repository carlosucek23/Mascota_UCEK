@extends('layouts.master')
@section('titulo','VENTAS')
@section('contenido')
 
<div id="apiVenta">
   <div class="container">
  <div class="row">
    <div class="col-md-4">
      
     <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Escriba el codigo del producto" aria-label="recipient's usarname" 
      aria-describedby="basic-addon2" v-model="sku" v-on:keyup.enter="buscarProducto()">
       
       <div class="input-group-append">
         <button class="btn btn-outline-info" type="button"  @click="buscarProducto()" >Buscar  </button>
       </div>
     </div>


     <div class="card-body">
       
     </div>
    
    </div>
    
  </div>
  
<div class="card">
  <div class="card-body">
  <div class="row">
    <div class="col-md-12">
      <table class="table table-bordered" >
        <thead class="thead-dark">
          <th>SKU</th>
          <th>PRODUCTO</th>
          <th>PRECIO</th>
          <th>CANTIDAD</th>
          <th>TOTAL</th>
        </thead>
          
      <tbody>
        <tr v-for="(venta,index) in ventas">
          <td>@{{venta.sku}}</td>
          <td>@{{venta.nombre}}</td>
          <td>@{{venta.precio}}</td>
          <td><input type="number" v-model.number="cantidades[index]" min="1"></td>
          <td>@{{totalProducto(index)}}</td>
        </tr>
      </tbody>

      </table>
      @{{cantidades}}
      @{{ventas}}
    </div>
  </div> <!--fin de row-->
</div> <!--fin de card body-->  
  </div> <!--fin de card-->


<div class="row">
  <!--espacio vacio -->
  <div class="col-md-8"></div>

<div class="col-md-4">
  <div class="card">
    <div class="card-body">
  <!-- tabla -->
    <table class="table table-bordered">
      <tr>
        <th style="background: #D5DBDB">Subtotal</th> <!--#D5DBDB es el color gris -->
        <td>$@{{subTotal}}</td>
      </tr>

      <tr>
        <th style="background: #D5DBDB ">IVA</th>
        <td>$@{{iva}}</td>
      </tr>

      <tr>
        <th style="background: #D5DBDB">Total</th>
        <td>$@{{granTotal}}</td>
      </tr>

       <tr>
        <th style="background: #D5DBDB">Articulos</th>
        <td>$@{{noArticulos}}</td>
      </tr>
      
    </table>
  </div> <!--fin de card body -->
</div> <!--fin de card-->
</div> <!--fin de col-md-4-->
</div>  <!--fin de row-->



</div>

</div>

@endsection

@push('scripts')
<script type="text/javascript" src="{{asset('js/apis/Ventas.js')}}"></script>
<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>

@endpush
