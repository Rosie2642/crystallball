function shake(){
  var ball = document.getElementById("ball");
  var messageText = document.getElementById("message");

  if(messageText != null){
    messageText.parentNode.removeChild(messageText);
  }

  
  ball.classList.add("shake");


  setTimeout(function(){ball.classList.remove("shake");}, 1000);
  setTimeout(function(){getFortune();}, 1000);
}

function getFortune(){
    var fortunes = ['It is certain', 'Absolutely!', 'Reply is hazy, try again later', 'I have a headache, can\'t predict right now','Don\'t count on it','My otherworldly sources say no', 'Outlook isn\'t good', 'Signs point to yes', 'Replay hazy', 'Try again later', 'Better not tell you now', 'You don\'t want to know', 'Concentrate and ask again',  'Very doubtful'];

    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];

    var parent = document.getElementById("fortune");
    var newMessage = document.createElement("div");

    newMessage.setAttribute('id', "message");
    newMessage.innerHTML = "\""+fortune+"\""
    parent.appendChild(newMessage);

  }
  



