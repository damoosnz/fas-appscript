// Load jQuery from a CDN
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
script.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(script);

// Ensure jQuery is loaded
script.onload = function() {
  console.log("jQuery loaded");
};
