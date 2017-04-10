/*
 * Author: Stephanie Hayden
 * 
 * Javascript for hayden.159.github.io
 *
 */


//***********************************************************************************************
// Code.html javascript *************************************************************************
//***********************************************************************************************



//---- Global variables ------------------------------------------------------------------------

var selection = [];   //will contain the selected tabs at any time
var project_children = $("#projects").children(); //project divs
var tags = $("span.skill");  //skills tags at the top of the page




//---- Functions -------------------------------------------------------------------------------

//function that moves a list of projects to the top of the page
function moveToTop(project_list) {
	if (project_list){
		project_list.detach();
		project_list.each( function(index, value) {
			$("#projects").prepend(value);
	
		});
	}
}


// function to sort code projects based on current selected tags
function sortProjects() {
	var projects_to_move;
	var popular_projects;

	// iterate thorugh all tags currently selected. Find all projects that match
	// and add them to 'projects_to_move'. If the project has two or more matching tags,  
	// add it to the'popular_projects' list so it will apear higher on the page.
	for(i=0; i<selection.length; i++){  
		var span_matches = $("#projects").find("span").filter(":contains(" + selection[i] + ")");
		if (projects_to_move){
			if (projects_to_move.filter(span_matches.parent()))
			{
				if (popular_projects){
					popular_projects = popular_projects.add(projects_to_move.filter(span_matches.parent()));
				} else {
					popular_projects = projects_to_move.filter(span_matches.parent());
				}
			}
			projects_to_move = projects_to_move.add(span_matches.parent()); 
		} else {
			projects_to_move = span_matches.parent();
		}
	}

	//put selected projects at the top
	moveToTop(projects_to_move);
	
	//put popular projects at the top (before average selected projects)
	moveToTop(popular_projects);
	
}

//function to shuffle projects when a tag has been unclicked
function shuffleProjects() {
	project_children.detach();
	project_children.sort(function() { return (Math.round(Math.random())-0.5); })

    	for(var i=0; i < project_children.length; i++) {
        	$("#projects").append(project_children[i]);	
	}
}




//---- Event registration -----------------------------------------------------------------------

// click function for tags
function addSelection() {
	if (selection.indexOf($(this).text()) >= 0) { //project already selected
		selection.splice(selection.indexOf($(this).text()), 1);
		$(this).removeClass("active");
		shuffleProjects();
	}	
	else { // project newly selected
		selection.push($(this).text());
		$(this).addClass("active");

	}

	sortProjects();
}



//add click function to the tags at the top of the page
tags.on('click', addSelection);


//***********************************************************************************************

