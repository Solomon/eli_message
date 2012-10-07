$(document).ready(function() {
  console.log('this is working');
  boo = $('#e');
  var context = boo[0].getContext('2d');
  context.fillStyle = "rgb(50, 50, 50)";
  context.fillRect(10, 10, 55, 50);

});
