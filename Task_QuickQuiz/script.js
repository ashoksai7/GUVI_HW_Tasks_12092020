var mainCont = document.createElement('div');
mainCont.setAttribute('class','container');
mainCont.setAttribute('id', 'mainCont');

//Main div holding the Heading and the buttons
var mainDiv = document.createElement('div');
mainDiv.setAttribute('class','text-center p-5 m-5 text-primary');
mainDiv.setAttribute('id','mainDiv');
mainDiv.innerHTML = "<h1>Quick Quiz<h1>"

//Button to navigate to game play page
var btnPlay = document.createElement('a');
btnPlay.setAttribute('href','./game.html');
btnPlay.setAttribute('class','btn btn-info btn-sm mt-5 btn-block');
btnPlay.setAttribute('id','play');
btnPlay.innerText = 'Play'

//Button to navigate to High scores page
var btnHighScore = document.createElement('a');
btnHighScore.setAttribute('href','./highscores.html');
btnHighScore.setAttribute('class','btn btn-info btn-sm btn-block');
btnHighScore.setAttribute('id','highScores');
btnHighScore.innerText = 'High Score'


mainDiv.append(btnPlay, btnHighScore);
mainCont.appendChild(mainDiv);
document.body.appendChild(mainCont);