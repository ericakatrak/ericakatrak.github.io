// JRIBBBLE
// Get a list of your shots and display them in the DOM.
jribbble.shots({token: "32346fbe05ad04f207853e86cc955846ead40d6aece66eec3b1342a19d57be0b"}, function(shotsArray) {
  document.querySelector(".dribbble-shots").innerHTML = shotsArray.reduce(function(html, shot) {
    return html + '<li class="shotitem"><a href="'+  shot.html_url + '" target="_blank"><img class="item" src="' + shot.images.normal + '"></a></li>';
  }, "");
});


// LOADING LOGIC
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