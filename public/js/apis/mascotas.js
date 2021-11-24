function init() {
var apiMascota='http://localhost/Proyectomodel/public/apiMascota';
new Vue({
	el:"#mascota",
	data:{
		prueba:'Esta es una prueba',
		mascotas:[],
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
		}

	}
});
} window.onload = init;