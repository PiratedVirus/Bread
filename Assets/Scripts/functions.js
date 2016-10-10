
$(function(){
	$('.awesome-form .input-group input').focusout(function(){
		var text_val= $(this).val();

		if(text_val=== ""){
			$(this).removeClass('has-val');
		}else{
			$(this).addClass('has-val');
		}
	});
});

// Charts for deaprtments
$(function(){
	$('.awesome-form .input-area textarea').focusout(function(){
		var text_val= $(this).val();

		if(text_val=== ""){
			$(this).removeClass('has-val');
		}else{
			$(this).addClass('has-val');
		}
	});
});

var ctx = document.getElementById("cs-chart-right");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            data: [57, 43],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                '#fff',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
    	cutoutPercentage:70,
        animation: {
        	animationScale: true
        }
    }
});

var ctx = document.getElementById("cs-chart-left");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            data: [85, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                '#fff',
            ],
            borderColor: [
            	'rgba(255, 99, 132, 1)',
            	'rgba(255, 99, 132, 1)',
            	// '#fff'
            ],
            borderWidth: 1
        }]
    },
    options: {
    	cutoutPercentage:70,
        animation: {
        	animationScale: true
        }
    }
});



//Slider
$(document).ready(function(){
  $('.your-class').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoPlay: true,
    autoplaySpeed: 2000,
    dots: true
  });
});

// $('.center').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });



$(function(){
    smoothscroll(1000);

    $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
    $("#lib").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });

});

function smoothscroll (duration){
    $('a[href^="#"]').on("click", function(event){

        var target = $( $(this).attr('href') );
        console.log(target.length);
        if( target.length ){
            event.preventDefault();
            $('html,body').animate({
                scrollTop:target.offset().top
            },duration);
        }
    });
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );














