var script = document.createElement("script");
script.src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.body.appendChild(script);
$(document).resdy(function(){
  $("div").animate({left: '250px'})
});
