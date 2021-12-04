function init() {
var apiProductos='http://localhost/Proyectomodel/public/apiProducto';
new Vue({
    
    http:{
       headers:{
         'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
       }
},


//zona de actuacion de vue
   el:"#apiVenta",


   data:{ 
      mensaje:'hola mundo',
      sku:'',
      ventas:[],
      cantidades:[],
      cant:1,
      auxSubTotal:0,
     

   },

    //SE EJECUTA AUTOMATICAMENTE CUANDO LA PAGIINA SE CREA
     created:function(){
        
    },
   //inicio de los metodos
   methods:{
     
     buscarProducto:function(){
     if(this.sku)
     {
      var producto = {}
      this.$http.get( apiProducto + '/' + this.sku).then(function(j){
         producto = {
           sku:j.data.sku,
           nombre:j.data.nombre,
           precio:j.data.precio,
           cantidad:1,
           total:j.data.precio
         };
         

         this.ventas.push(producto);
         this.cantidades.push(1);
         this.sku='';
      });

      }

     },





   }, //fin de los metodos 

computed:{

totalProducto(){
  return(id)=>{
     var total=0;
    // if(this.cantidades[id]!=null) 
     total=this.ventas[id].precio * this.cantidades[id]; //multiplica el precio por la cantidad 

        //actualiza el total en el array ventas 
        this.ventas[id].total=total;

        //actuliza la cantidad en el array ventas 
        this.ventas[id].cantidad=this.cantidades[id];

     return total.toFixed(1); //apunta exclusivamente a un decimal 
  }
}, //fin total producto

subTotal(){
  var total=0;
  for (var i = this.ventas.length -1;i >=0; i--) {
     total=total+this.ventas[i].total;

  }//fin ciclo for
   this.auxSubTotal=total.toFixed(1); //manda una copia del subTotal al data para usar con otros datos 
  return total.toFixed(1);

}, //fin subtotal

iva(){
   var auxIva=0;
    auxIva=this.auxSubTotal*0.16;
    return auxIva.toFixed(1);
},//fin iva

granTotal(){
  var auxTotal=0;
  auxTotal=this.auxSubTotal*1.16;
  return auxTotal.toFixed(1);

},//fin grantotal

noArticulos(){
   var acum=0; //acum: acumulador 
for (var i = this.ventas.length - 1; i >= 0; i--) {
   acum=acum+this.ventas[i].cantidad;
   return acum;
   
  }
}//fin articulos


} //fin computed


});


 
} window.onload=init;