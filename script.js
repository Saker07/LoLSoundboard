let keys;
keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removePlaying))



window.addEventListener("keydown",playing)

function playing(ev){
    let aud;
    let key;
    aud=document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    key=document.querySelector(`.key[data-key="${ev.keyCode}"]`);
    if(!aud) return;
    resetAudios();
    aud.currentTime=0;
    aud.play();
    key.classList.add("playing");
}


function removePlaying(){
    this.classList.remove("playing");
}

function resetAudios(){
    let audios;
    audios = document.querySelectorAll("audio");
    audios.forEach(function (audio){
        audio.pause();
        audio.currentTime=0;
    });
}