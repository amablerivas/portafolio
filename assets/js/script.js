$(function(){
  	
  	$('[data-toggle="tooltip"]').tooltip();

	$("a").click(function(event){
		if(this.hash !== "") {
			event.preventDefault();

			var gato = this.hash;

			$("html, body").animate({
				scrollTop: $(gato).offset().top-150
			}, 1500, function(){
				window.location.hash = gato;
			});
		}
		//Pregunta: Como hacer que el offset funcione bien
	});


	$('[data-toggle="popover"]').popover();
});