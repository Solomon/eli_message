var current_eli = 7;

$(document).ready(function() {

  function getCanvasCtx(){
    return $('#e')[0].getContext('2d');
  }

  function getEliUrl(number){
    return "https://s3.amazonaws.com/eli_message/elephants/" + number + ".jpeg"
  }

  function drawEli(ctx){
    var img = new Image();
    img.src = getEliUrl(current_eli);
    img.onload = function(){
      ctx.drawImage(this,0,0,450,450);
    }
  }


  function typeMessage(ctx, message){
    ctx.fillStyle = '#25020F';
    ctx.font = '18px sans-serif';
    wrapText(ctx, message, 50, 50, 350, 27);
  }

  function clearMessage(ctx){
    ctx.clearRect(0,0,450,450);
    drawEli(ctx);
  }

  function splitLines(context, text, x, y, maxWidth, lineHeight){
  }

  function wrapText(context, text, x, y, maxWidth, lineHeight){
    var paragraphs = text.split("\n");
    for (var p = 0; p < paragraphs.length; p++){
      var words = paragraphs[p].split(" ");
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
      y += lineHeight;
    }
  }

  function newEli(ctx){
    var number = Math.floor(Math.random()*11)+1;
    current_eli = number;
    drawEli(ctx);
  }

  var ctx = getCanvasCtx();
  drawEli(ctx);

  // Bind typing enter in the text box to writing the message
  $('.add').on("click", function(){
    var ctx = getCanvasCtx();
    var message = $('.message').val();
    typeMessage(ctx, message);
  })

  // Bind clearing the message
  $('.clear').on('click', function(){
    var ctx = getCanvasCtx();
    clearMessage(ctx);
  })

  // Get a new Eli
  $('.new_eli').on('click', function(){
    var number = Math.floor(Math.random()*10)+1;
    current_eli = number;
    var ctx = getCanvasCtx()
    newEli(ctx)
  })
});
