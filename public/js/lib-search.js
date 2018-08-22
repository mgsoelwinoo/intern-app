internsApp = {};

(function(){

	function fnCreate(){
		uid = $('#internID').val();
		var path = 'interns/' + uid;
		var internName = $("#internName").val();
		var internTeam = $("#internTeam").val();
		var internProject = $("#internProject").val();
		var data = {
			name: internName,
			team: internTeam,
			project: internProject
		}
		fb.data.create(path, data, messageHandler);
	}

	function fnRead(){
		var key = $("#internID").val();
		var path = 'interns/' + key;
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				console.log("Value :" + snapShot.val());
					var result = snapShot.val();
					var newElement = {}
					var name = result.name;
					var project = result.project;
					var team = result.team;
					newElement['key'] = key;
					newElement['name'] = name;
					newElement['team'] = team;
					newElement['project'] = project;
				  interns = [];
					interns.push(newElement);
					console.log(key, name, project, team);
			}
				internsObj = { internsBinding: interns}
				ko.applyBindings(internsObj);
		}
}

	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}
	internsApp.Create = fnCreate;
	internsApp.Read = fnRead;
})()

//internsApp.Read();
