

var selection = []; 

var project_children = $("#projects").children();
var project_list = jQuery.makeArray(project_children); 

var tags = $("span.skill"); //skills tags at the top of the page




// function to sort code projects based on selected tags
function sortProjects() {
	var projects_to_move;
	for(i=0; i<selection.length; i++){
		var span_matches = $("#projects").find("span").filter(":contains(" + selection[i] + ")");
		if (i==0){
			projects_to_move = span_matches.parent();
		} else {
			projects_to_move = projects_to_move.add(span_matches.parent());
		}
		console.log(projects_to_move);
	}

	//put projects at the top
	var moved;
	projects_to_move.detach();
	projects_to_move.each( function(index, value) {
		$("#projects").prepend(value);
	
	});
	
}

// click function for selector tags
function addSelection() {
	if (selection.indexOf($(this).text()) >= 0) { //project already selected
		selection.splice(selection.indexOf($(this).text()), 1);
		$(this).removeClass("active");
	}	
	else { //project newly selected
		selection.push($(this).text());
		$(this).addClass("active");

	}
	console.log(selection.toString());
	sortProjects();
}



//add onclick function
tags.on('click', addSelection);



