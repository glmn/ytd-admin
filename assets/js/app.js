var socket = io(":3000");
var vue = new Vue({
	el: "#root",

	data: {
		workers: [],
	},	

	created: function(){
		socket.on('connect', function(){
			socket.emit('admin:workers-request');

			socket.on('admin:workers-response', function(workers){
				vue.workers = [workers];
			})

		})
	}
})