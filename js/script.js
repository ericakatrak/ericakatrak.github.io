// JRIBBBLE
// Get a list of your shots and display them in the DOM.
jribbble.shots({token: "32346fbe05ad04f207853e86cc955846ead40d6aece66eec3b1342a19d57be0b", per_page: 30}, function(shotsArray) {
  document.querySelector(".shotlist").innerHTML = shotsArray.reduce(function(html, shot) {
	  var img = (shot.images.hidpi) ? shot.images.hidpi : shot.images.normal;
    return html + '<li class="shotitem"><a href="'+  shot.html_url + '" target="_blank"><img class="item" src="' + img + '"></a></li>';
  }, "");
  showImages('.item', 0);
});

// LOADING LOGIC
function showImages(el, delay) {
		var topOfWindow = $(window).scrollTop();
    var windowHeight = $(window).height();
    
    $(el).each(function(){
        var thisPos = $(this).offset().top;
        if (topOfWindow + windowHeight - delay > thisPos ) {
          	$(this).addClass("fadeIn");
        }
    });
}

// if the image is in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.item', 200);
});
