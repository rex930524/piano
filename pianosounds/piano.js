document.addEventListener('keydown', function(event){
	const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
	const key = document.querySelector(`div[data-key = "${event.keyCode}"]`);
	
	if(!audio) return; 
	
	//audio.currentTime = 0;
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