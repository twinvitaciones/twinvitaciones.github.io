//Galeria
$(document).ready(function () {
	$(".customer-logos").slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 1500,
	  arrows: false,
	  dots: false,
	  pauseOnHover: false,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 520,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});
});

// PreLoader
window.onload=function(){
    $('#preloader').fadeOut();
}

//Musica
function toggleAudio() {
	var audioElement = document.getElementById('player')
	var soundOn = document.getElementById('play')
	var soundOff = document.getElementById('pause')
	if (audioElement.paused) {
	  audioElement.play();
	  $(soundOn).show();
	  $(soundOff).hide();
	} else {
	  audioElement.pause();
	  $(soundOn).hide();
	  $(soundOff).show();
	}
  } 
