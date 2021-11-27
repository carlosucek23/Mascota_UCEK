function init() {
var apiMascota='http://localhost/Proyectomodel/public/apiMascota';
new Vue({
	el:"#mascota",
	data:{
		prueba:'Esta es una prueba',
		mascotas:[],

		nombre:'',
		edad:'',
		peso:'',
		genero:'',


	},

	//al crearse la pagina
	created:function(){
		this.obtenerMascotas();
	},

	//inicio de methods
	methods:{
		obtenerMascotas:function(){
			this.$http.get(apiMascota).then(function(json){
				this.mascotas=json.data;
				console.log(json.data);
			}).catch(function(json){
				console.log(json);
			});
		},

		mostarModal:function(){
			$('#modalMascota').modal('show');
		},


		// se construye el json para enviar al controlador
		guadarMascota:function(){
			var mascota={nombre:this.nombre,edad:this.edad,peso:this.edad,genero:this.genero};


			//se envia los datos en json al controlador
			this.$http.post(apiMascota,mascota).then(function(json){
				this.obtenerMascotas();
				this.nombre='';
				this.edad='';
				this.peso='';
				this.genero='';
			}).catch(function(json){
				console.log(json);
			});


			$('#modalMascota').modal('hide');
			console.log(mascota);
		},

		eliminarMascota:function(id) {
			var confirm= confirm('Esta seguro de elimminar la mascota')

			if (confirm){
				this.$http.delete(apiMascota+'/'+ id).then(function(json){
					this.obtenerMascotas();
				}).catch(function(json){

				});
			}
		},

	}
});
} window.onload = init;