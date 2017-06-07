// Video Seachbar and Frame
function go_get() {
  var base_url = "https://www.youtube.com/embed/857VBFZh6c4";
  var search_field = document.getElementById("search");
  var target_url = base_url + search_field;
  var ifr = document.getElementById("video");
  ifr.src = target_url;
  return false;
}

// Play video
$(document).ready(function() {
  $('#play').on('click', function(ev) {
 
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});

// Results dropdown
function myResults() {
  var x = document.getElementById("myDropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// Swap text in h1 element with Analysis/Results
function change() {
  var writeAnalysis = "Analysis";
  var writeResults = "Results";
  var y = document.getElementById("myDropdown");
  if (y.style.display === "none") {
    return(writeAnalysis);
  } else {
    return(writeResults);
  }
  document.getElementById('change').innerHTML = change();
}

// jQuery counter
$('td').on('click'), function () {
  var clickCounter = parseInt( $(this).find('span').html());
  $(this).find('span').html(clickCounter + 1);
}