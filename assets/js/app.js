var socket = io(":3000");
var vue = new Vue({
	el: "#root",

	data: {
		nodes: [],
	},	

	created: function(){
		socket.on('connect', function(io){
			console.log('Connected');
		})
	}
})