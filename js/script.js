jribbble.shots({token: "32346fbe05ad04f207853e86cc955846ead40d6aece66eec3b1342a19d57be0b"}, function(shots) {
  document.querySelector(".dribbble-shots-list").innerHTML = shots.reduce(function(html, shot) {
    return html + '<li><a href="'+  shot.html_url + '" target="_blank"><img src="' + shot.images.normal + '"></a></li>';
  }, "");
});

$.jribbble.users(dribbbleUsername).shots({per_page: shotsOnPage}).then(function(shots) {
    var htmlShots = [];

    shots.forEach(function(shot) {
    	var images = shot.images;
    	// If a hidpi image is available use that, if not fall back to the normal image
			var img = (images.hidpi) ? images.hidpi : images.normal;
		
      // See the Dribbble docs for all available shot properties.
      htmlShots.push('<li class="shotitem">');
      htmlShots.push('<a href="' + shot.html_url + '" target="_blank">');
      htmlShots.push('<img class="item" src="' + img + '"/>')
      htmlShots.push('</a></li>');
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

// if the image is in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.item');
});
