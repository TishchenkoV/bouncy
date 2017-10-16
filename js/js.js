'use strict';


$(document).ready(function(){
    $("#scrol").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

var gallery = $('.portfolio__gallery').isotope({
		itemSelector: '.portfolio__gallery-img',
		gutter: 10
		});

		$('.link').on('click', function(e){
			e.preventDefault();
			$('.link').removeClass('active');
			$(this).addClass('active');
			var target = $(this).data('target');
			gallery.isotope({ filter: '.' + target });
			console.log(target);
		});


function initMap() {
        var uluru = {lat: 47.151009, lng: 37.610547};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

$('.slider').slick({
  	dots: true,
  	arrows: false,
	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
  	speed: 3000,
});