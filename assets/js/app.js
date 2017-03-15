var socket = io(":3000");
var vue = new Vue({
	el: "#root",

	data: {
		nodes: [],
	},	

	created: function(){
		socket.on('connect', function(){
			socket.emit('nodes-request');

			socket.on('nodes-response', function(data){
				vue.nodes = [data];
			})

		})
	}
})