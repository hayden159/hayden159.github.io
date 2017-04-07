

var selection = [];

var project_children = document.getElementById("projects").children;
var project_list = Array.prototype.slice.call(project_children);
var projects_to_move = [];

var tags = document.querySelectorAll("span.skill"); //skills tags at the top of the page



// function to sort code projects based on selected tags
function sortProjects() {
	for (i=0; i<project_list.length; i++) { //iterate through projects
		var project = project_list[i];
		console.log("project: " + project.toString());
		var span_tags = project.getElementsByTagName('span'); //get all spans in the project
		for(j=0; j<span_tags.length; j++) {
			var tag = span_tags[j].innerHTML;
			if (selection.indexOf(tag)>=0) { //if span tag matches selected span tag, add it to to_move
				if (!projects_to_move[project]) { //project not in to_move
					projects_to_move.push({id:project, count:0});
				} else { //project already in to_move
					var popular_project = projects_to_move[project]; //find project
					projects_to_move[popular_project].count++;//add one to its number field 
				}
			}
		}
	}
	
	//put projects_to_move at the top
	for (i=0; i<projects_to_move.length; i++){
		project_children.unshift(projects_to_move[i]);
	}
	
}


// click function for selector tags
function addSelection() {
	if (selection.indexOf(this.innerHTML) >= 0) {
		selection.splice(selection.indexOf(this.innerHTML), 1);
		this.classList.remove('active');
		sortProjects();
	}	
	else {
		selection.push(this.innerHTML);
		this.className += ' active';
		sortProjects();
	}
	console.log(selection.toString());
}



//add onclick function
for(var j = 0; j < tags.length; j++) {
    	tags[j].addEventListener("click", addSelection);
}

