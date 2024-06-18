document.addEventListener('keydown', function(event){
	const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
	const key = document.querySelector(`div[data-key = "${event.keyCode}"]`);
	
	if(!audio) return; 
	
	audio.currentTime = 0;
	audio.play();
	
	key.classList.add('playing');
	key.classList.add('active');
});

document.addEventListener('keyup', function(event){
	const key = document.querySelector(`div[data-key = "${event.keyCode}"]`);
	if(key) 
	{
		key.classList.remove('playing');
		key.classList.remove('active');
	}
});


function start()
{
	var song1Button = document.getElementById("show1");
	var song2Button = document.getElementById("show2");
	var song3Button = document.getElementById("show3");
	var song4Button = document.getElementById("show4");
	var song5Button = document.getElementById("show5");
	var song6Button = document.getElementById("show6");
	var song7Button = document.getElementById("show7");
	var song8Button = document.getElementById("show8");
	var song9Button = document.getElementById("show9");
	var song10Button = document.getElementById("show10");
	var song11Button = document.getElementById("show11");
	var song12Button = document.getElementById("show12");
	var song13Button = document.getElementById("show13");
	song1Button.addEventListener("click", setImage1, false);
	song2Button.addEventListener("click", setImage2, false);
	song3Button.addEventListener("click", setImage3, false);
	song4Button.addEventListener("click", setImage4, false);
	song5Button.addEventListener("click", setImage5, false);
	song6Button.addEventListener("click", setImage6, false);
	song7Button.addEventListener("click", setImage7, false);
	song8Button.addEventListener("click", setImage8, false);
	song9Button.addEventListener("click", setImage9, false);
	song10Button.addEventListener("click", setImage10, false);
	song11Button.addEventListener("click", setImage11, false);
	song12Button.addEventListener("click", setImage12, false);
	song13Button.addEventListener("click", setImage13, false);
}

function setImage1()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "1.gif");
}
function setImage2()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "2.gif");
}
function setImage3()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "3.gif");
}
function setImage4()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "4.gif");
}
function setImage5()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "5.gif");
}
function setImage6()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "6.gif");
}
function setImage7()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "7.gif");
}
function setImage8()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "8.gif");
}
function setImage9()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "9.gif");
}
function setImage10()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "10.gif");
}
function setImage11()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "11.gif");
}
function setImage12()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "12.gif");
}
function setImage13()
{
	var songID = document.getElementById("score");
	songID.setAttribute("src", "13.gif");
}
window.addEventListener("load", start, false);