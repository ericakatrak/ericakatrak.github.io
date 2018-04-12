jribbble.shots({token: "32346fbe05ad04f207853e86cc955846ead40d6aece66eec3b1342a19d57be0b"}, function(shots) {
  document.querySelector(".dribbble-shots-list").innerHTML = shots.reduce(function(html, shot) {
    return html + '<li><a href="'+  shot.html_url + '" target="_blank"><img src="' + shot.images.normal + '"></a></li>';
  }, "");
});