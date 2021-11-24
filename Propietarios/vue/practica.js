new Vue({
   //Especificar la zona de actuacion de Vue
  el:"#miPagina",

  // Esta seccion de VUE sirve para declarar Variables
  // Y constantes.
  data:{
  	mensaje:'HOLA MUNDO CRUEL again',
  	alumno:'',
   nombre:'',
   especie:'',
  	edad:0,
   editando:0, 
   indice:0,
   buscar:'',
   mascotas:[{nombre:'Goldi',especie:'Canina',edad:9},
             {nombre:'Zuma',especie:'Felina',edad:4},
             {nombre:'Toño',especie:'Canina',edad:5}
            ],

   especies:[
               {clave:1,nombre:'Canina'},
               {clave:2,nombre:'Felina'},
               {clave:3,nombre:'Ave'}
            ],

   name:' ',
   frist_name:' ',
   second_name:' ',
   pivote:0,



  },

  // Este objeto permite crear funciones y/o procedimeintos 
  methods:{


   aumentarEdad:function(){
      this.edad=Number(this.edad)+1;
   },

   disminuirEdad:function(){
      this.edad=Number(this.edad)-1;
   },

   agregarMascota:function(){

      if(this.nombre && this.especie && this.edad){
      // Construimos un objeto de tipo mascota para insertar en el array
      var unaMascota={nombre:this.nombre,especie:this.especie,edad:this.edad};

      // Agrego un objeto mascota
      this.mascotas.push(unaMascota);
      this.limpiarHtml();

      //enviamos el foco al primer componente al html/nombre de la mascota, se debe agregar a todas las interfaces
      this.$refs.nombre.focus();

      //aca agregamos el mensaje de exito
      Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Se ha guardado exitosamente',
         showConfirmButton: false,
         timer: 2000
       })
   }
   else{
      Swal.fire({
         position: 'top end',
         icon:'error',
         title: 'Debe capturar todo los datos',
         showConfirmButton: false,
         timer: 2000
      });
   }},

   limpiarHtml:function(){
     this.nombre='';
     this.especie='';
     this.edad=''; 
   },

   eliminarMascota:function(pos){
      var pregunta=confirm('¿Esta seguro que desea eliminar?');
      if(pregunta)
        //console.Log('voy a eliminar: ' + pos);
      this.mascotas.splice(pos,1);
      //else
        //console.Log('se arrepintio: ' + pos);
   },


   editarMascota:function(pos){
      this.nombre=this.mascotas[pos].nombre;
      this.especie=this.mascotas[pos].especie;
      this.edad=this.mascotas[pos].edad;
      this.editando=1;
      this.indice=pos;
   },
   
   cancelar:function(){
      this.limpiarHtml();
      this.editando=0;
   },
   //modifico los valores del array de objetos
   guardarEdicion:function(){
      this.mascotas[this.indice].nombre=this.nombre;
      this.mascotas[this.indice].especie=this.especie;
      this.mascotas[this.indice].edad=this.edad;
   //limpiamos los componentes html e indicamos que terminamos de editar, activando el boton agregar/azul
      this.limpiarHtml();
      this.editando=0;
   },

   editarMascota:function(pos){
      this.nombre=this.mascotas[pos].nombre;
      this.especie=this.mascotas[pos].especie;
      this.edad=this.mascotas[pos].edad;
      this.editando=1;
      this.indice=pos;

   }
   
  },
  // FIN DE METHODS

  //Seccion para calcular valor automaticamente
  computed:{
   numeroMascotas:function(){
      var num=0;
      num=this.mascotas.length;
      return num;
   },
   filtroMascota:function(){
      return this.mascotas.filter((mascota)=>{
         return mascota.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) || 
               mascota.especie.toLowerCase().match(this.buscar.toLowerCase().trim())
      });
   },
   
   fullName:function(){
      var completo=this.name +' '+this.frist_name +' '+ this.second_name;
      return completo;
   },

   tablaMultiplicar:function(){
      var tabla=[];
      var resultado={};

     for (var i = 0; i < Things.length; i++) {
        Things[i]
     }
   }

  }


});