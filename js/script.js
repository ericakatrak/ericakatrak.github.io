$.jribbble.setToken('06cf95687ae5bf5ea006aa0a1046f10561f68c2de1c6eb5be4a5b8bc298df717');


$.jribbble.users(dribbbleUsername).shots({per_page: shotsOnPage}).then(function(shots) {
    var htmlShots = [];

    shots.forEach(function(shot) {
    	var images = shot.images;
    	// If a hidpi image is available use that, if not fall back to the normal image
			var img = (images.hidpi) ? images.hidpi : images.normal;
		
      // See the Dribbble docs for all available shot properties.
      htmlShots.push('<li class="shotitem">');
      htmlShots.push('<img class="item" src="' + img + '"/>')
      htmlShots.push('</li>');
    });

    $('.shotlist').html(htmlShots.join(''));
});

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
          	$(this).addClass("fadeIn");
        }
    });
}

// if the image is in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.item');
});


