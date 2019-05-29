// JRIBBBLE
// Get a list of shots and display them in the DOM.

// Set the Access Token
var accessToken = '32346fbe05ad04f207853e86cc955846ead40d6aece66eec3b1342a19d57be0b';

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.reverse(), function(i, val) {                
          $('.shotlist').prepend(
            '<li class="shotitem"><a target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><img class="item" src="'+ val.images.hidpi +'"/></a></li>'
            )
        })
      }
    }
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


// RADIAL GRADIENT MOVEMENT
$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
  $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #272220, #1D1918)');
});
