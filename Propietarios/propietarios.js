new Vue({
    //Especificar la zona de actuacion de Vue
   el:"#miPagina",
 
   // Esta seccion de VUE sirve para declarar Variables
   // Y constantes.
   data:{
       mensaje:'HOLA MUNDO',
    nombre:'',
    primer_apellido:'',
    segundo_apellido:'',
    editando:0, 
    indice:0,
    buscar:'',
    propietarios:[{nombre:'carlos',primer_apellido:'Uc',segundo_apellido:'Ek'},
              {nombre:'pedro',primer_apellido:'Uc',segundo_apellido:'Ek'},
              {nombre:'lizandro',primer_apellido:'Uc',segundo_apellido:'Ek'}
             ],
   },
 
   // Este objeto permite crear funciones y/o procedimeintos 
   methods:{
 
    agregarPropietario:function(){
 
       if(this. nombre && this.primer_apellido && this.segundo_apellido){
       // Construimos un objeto de tipo para insertar en el array
       var unPropietario={nombre:this.nombre,primer_apellido:this.primer_apellido,segundo_apellido:this.segundo_apellido};
 
       // Agrego un objeto 
       this.propietario.push(unPropietario);
       this.limpiarHtml();
 
       //enviamos el foco al primer componente al html/nombre, se debe agregar a todas las interfaces
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
      this.primer_apellido='';
      this.segundo_apellido=''; 
    },
 
    eliminarPropietario:function(pos){
       var pregunta=confirm('¿Esta seguro que desea eliminar?');
       if(pregunta)
         //console.Log('voy a eliminar: ' + pos);
       this.propietarios.splice(pos,1);
       //else
         //console.Log('se arrepintio: ' + pos);
    },
 
 
    editarPropietario:function(pos){
       this.nombre=this.propietario[pos].nombre;
       this.primer_apellido=this.propietario[pos].primer_apellido;
       this.segundo_apellido=this.propietario[pos].segundo_apellido;
       this.editando=1;
       this.indice=pos;
    },
    
    cancelar:function(){
       this.limpiarHtml();
       this.editando=0;
    },
    //modifico los valores del array de objetos
    guardarEdicion:function(){
       this.propietarios[this.indice].nombre=this.nombre;
       this.propietarios[this.indice].primer_apellido=this.primer_apellido;
       this.propietarios[this.indice].segundo_apellido=this.segundo_apellido;
    //limpiamos los componentes html e indicamos que terminamos de editar, activando el boton agregar/azul
       this.limpiarHtml();
       this.editando=0;
    },
 
    editarPropietario:function(pos){
       this.nombre=this.propietarios[pos].nombre;
       this.primer_apellido=this.propietarios[pos].primer_apellido;
       this.segundo_apellido=this.propietarios[pos].segundo_apellido;
       this.editando=1;
       this.indice=pos;
 
    }
    
   },
   // FIN DE METHODS
 
   //Seccion para calcular valor automaticamente
   computed:{
    numeroPropietario:function(){
       var num=0;
       num=this.propietarios.length;
       return num;
    },
    filtroPropietario:function(){
       return this.propietarios.filter((propietario)=>{
          return propietario.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) || 
                propietario.primer_apellido.toLowerCase().match(this.buscar.toLowerCase().trim())
       });
    }         
   }
 
 
 });