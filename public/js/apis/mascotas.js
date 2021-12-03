function init() {
var apiMascota='http://localhost/Proyectomodel/public/apiMascota';

var apiEspecie='http://localhost/Proyectomodel/public/apiEspecie';
new Vue({
	el:"#mascota",
	data:{
		prueba:'Esta es una prueba',
		mascotas:[],
		especies:[],

		nombre:'',
		edad:'',
		peso:'',
		genero:'',
		agregando:true,
		id_especie:'',


	},

	//al crearse la pagina
	created:function(){
		this.obtenerMascotas();
		this.obtenerEspecies();
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
			this.agregando=true;
			this.nombre='';
				this.edad='';
				this.peso='';
				this.genero='';
			$('#modalMascota').modal('show');
		},


		// se construye el json para enviar al controlador
		guadarMascota:function(){
			var mascota={nombre:this.nombre,
				edad:this.edad,
				peso:this.peso,
				genero:this.genero,
				id_especie:this.id_especie,};

			//se envia los datos en json al controlador
			this.$http.post(apiMascota,mascota).then(function(json){
				this.obtenerMascotas();
				this.nombre='';
				this.edad='';
				this.peso='';
				this.genero='';
				this.id_especie='';

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

		editandoMascota:function(id){
			this.agregando=false;
			this.id_mascota=id;
			this.$http.get(apiMascota+'/'+id).then(function(json){
				//console.log(json.data);
				this.nombre=json.data.nombre;
				this.edad=json.data.edad;
				this.peso=json.data.peso;
			});
			$('#modalMascota').modal('show');
		},

		actualizarMascota:function(id){
			var jsonMascota={nombre:this.nombre,
				             edad:this.edad,
				             peso:this.peso,
				             genero:this.genero};

		    //console.log(jsonMascota);

			thi.$http.patch(apiMascota+''+ this.id_mascota,jsonMascota).then(function(json){
				this.obtenerMascotas();
			});
			$('#modalMascota').modal(hide);
		},

		obtenerEspecies:function(){
			this.$http.get(apiEspecie).then(function(json){
				this.especies=json.data;
			})
		}

	}
});
} window.onload = init;