function playPauseFunc(num) {

  if (nowPlaying == num) {
    nowPlaying = 0;
    stopAudio();

    //change img
    playBtn1P = document.getElementById('playBtn' + num);
    playBtn1P.src = "./assets/img/play.png";
  } else {
    nowPlaying = num;
    playAudio();

    //change img
    playBtn1P = document.getElementById('playBtn1');
    playBtn2P = document.getElementById('playBtn2');
    playBtn3P = document.getElementById('playBtn3');
    playBtn4P = document.getElementById('playBtn4');

    playBtn1P.src = "./assets/img/play.png";
    playBtn2P.src = "./assets/img/play.png";
    playBtn3P.src = "./assets/img/play.png";
    playBtn4P.src = "./assets/img/play.png";

    //change img
    playBtnP = document.getElementById('playBtn' + num);
    playBtnP.src = "./assets/img/pause.png";
  }
}

function playAudio() {
  audio1 = document.getElementById('audio1');
  audio1.load();
  audio1.play();
}

function stopAudio() {
  audio1 = document.getElementById('audio1');
  audio1.load();
  audio1.pause();
  audio1.currentTime = 0;
}