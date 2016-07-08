//Additional Scripts for setup page
//Steven Young

//Prepare information for posting
$(function(){
	$("#startBtn").click(function() {
		//Break it into 3 arrays and post
		var env = [$("#loc").text(),$("#weather").text(),$("#day").text(),$("#time").text(),$("#patients").text(),$("#centers").text()];
		var ems = [$("#ambulance").text(),$("#ambulanceTime").text(),$("#fire").text(),$("#fireTime").text(),$("#aircare").text(),$("#aircareTime").text(),$("#sceneTime").text(),$("#atSceneTime").text(),$("#hospitalTime").text(),$("#turnaroundTime").text()];
		var team = [$("#teams").text(),$("#teamsTime").text(),$("#ORs").text(),$("#ORsTime").text(),$("#ICUs").text(),$("#ICUsTime").text()];
		console.log(env);
		console.log(ems);
		console.log(team);
		window.location.href = "/";
	});	
});

//Make the dropdowns slide
$(function() {
	$(".dropdown").on("show.bs.dropdown", function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();	
	});
	
	$(".dropdown").on("hide.bs.dropdown", function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();	
	});		
});

