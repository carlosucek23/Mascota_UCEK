
function init() {
var apiEspecie='http://localhost/Proyectomodel/public/apiEspecie';
new Vue({
    
    el:'#apiespecie',
    http: {
        headers: {
            'X-CSRF-TsKEN': document.querySelector('#token').getAttribute('value')
        }
    },
    data:{
        mensaje:'Hola Mundo',
        especies:[],
    },

    //SE EJECUTA AUTOMATICAMENTE CUANDO LA PAGIINA SE CREA
     created:function(){
        this.getEspecies();
    },
    // INICIO DE METHODSs    
     methods:{
        //obtiene el listado de todas las especies
        getEspecies:function(){
            this.$http.get(apiEspecie).then(function(json){
                this.especies=json.data;
            })
        },
        eliminarEspecie:function(id){
            Swal.fire({
                title: '¿Estás seguro de eliminar?',
                text: "No podras deshacer los cambios!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, quiero eliminar!'
              }).then((result) => {
                if (result.isConfirmed) {
                    this.$http.delete(apiEspecie + '/' + id).then(function(json){
                        this.getEspecies();
                    }).catch(function(json){
                        console.log(json);
                    })
                  Swal.fire(
                    'Eliminado!',
                    'Tu mascota fue eliminada.',
                    'success'
                  )
                }
              });
          },

          mostarEspecies(){
            $('#modalEspecies').modal('show');
          }

        },
    //FIN DE METHODS
    computed:{

    }
})
} window.onload = init;