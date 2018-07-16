console.log($);
console.log('hello');

$("#button").click(function(){
	var login = $("#log").val();
	var mdp = $("#mdp").val();

	$.ajax({
		url: "/auth",
		method: "POST",
		data: {login: login, mdp: mdp}
	}).done(function(res) {
		console.log(res);
		$("#text").html(res);
		if(res == "success"){
			location.href = "myaccount.html";
		}
	}).fail(function() {
		console.log( "error" );
	}).always(function() {
		console.log( "complete" );

	});
	var login = $("#log").val("");
	var mdp = $("#mdp").val("");
});

