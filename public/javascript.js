$(document).ready(function() {
  console.log('this is working');
  //boo = $('#e');
  //var ctx = boo[0].getContext('2d');

  function getCanvasCtx(){
    return $('#e')[0].getContext('2d');
  }

  function drawEli(ctx){
    var img = new Image();
    img.src = "http://images.nationalgeographic.com/wpf/media-live/photos/000/090/cache/african-elephant-standing_9033_600x450.jpg";
    img.onload = function(){
      ctx.drawImage(this,0,0,450,450);
    }
  }

  function typeMessage(ctx, message){
    ctx.fillStyle = 'black';
    ctx.font = '24px sans-serif';
    //ctx.fillText(message,50,50);
    wrapText(ctx, message, 50, 50, 350, 40);
  }

  function clearMessage(ctx){
    ctx.clearRect(0,0,450,450);
    drawEli(ctx);
  }

  function wrapText(context, text, x, y, maxWidth, lineHeight){
    var words = text.split(" ");
    var line = "";
    for (var n = 0; n < words.length; n++){
      var testLine = line + words[n] + " ";
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth) {
        context.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }

  var ctx = getCanvasCtx();
  drawEli(ctx);

  // Bind typing enter in the text box to writing the message
  $('.add').on("click", function(){
    console.log('working');
    var ctx = getCanvasCtx();
    var message = $('.message').val();
    typeMessage(ctx, message);
  })

  // Bind clearing the message
  $('.clear').on('click', function(){
    var ctx = getCanvasCtx();
    clearMessage(ctx);
  })
});
