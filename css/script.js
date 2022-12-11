function playAudio(val) {
  document.getElementById("myAudio").play();
  document.getElementById("footer-play-icon").style.display = "none";
  document.getElementById("footer-pause-icon").style.display = "block";
  for (let i = 0; i < 6; i++) {
    if (i == val) {
      continue;
    }
    document.getElementsByClassName("fa-play-circle")[i].style.display =
      "block";
    document.getElementsByClassName("fa-pause-circle")[i].style.display =
      "none";
  }
}
function pauseAudio() {
  document.getElementById("myAudio").pause();
  document.getElementById("footer-play-icon").style.display = "block";
  document.getElementById("footer-pause-icon").style.display = "none";
  for (let i = 0; i < 6; i++) {
    document.getElementsByClassName("fa-play-circle")[i].style.display =
      "block";
    document.getElementsByClassName("fa-pause-circle")[i].style.display =
      "none";
  }
}
function showFooter(val) {
  console.log(val);
  document.getElementById("footer").style.display = "flex";
  console.log("show");
  document.getElementsByClassName("fa-play-circle")[val].style.display = "none";
  document.getElementsByClassName("fa-pause-circle")[val].style.display =
    "block";
  document.getElementById("footer-play-icon").style.display = "none";
  document.getElementById("footer-pause-icon").style.display = "block";
  if (val == 0) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/Adiye.jpeg')";
    document.getElementById("myAudio").src = "/audio/Adiye Video Song.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Adiye";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "Dhibu"
    let slider = document.getElementById("progress-bar-slider");
  }
  else if (val == 1) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/ab67616d00001e02b6b3b7f26f0bc0e0197163a0.jpeg')";
    document.getElementById("myAudio").src = "/audio/Arabic Kuthu.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Arabic Kuthu";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "Anirudh"
  }
  else if (val == 2) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/ab67616d00001e0239fe640ab73db368eeac0f90.jpeg')";
    document.getElementById("myAudio").src = "/audio/VIKRAM Title Track.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Vikram Title Track";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "Anirudh"
  }
  else if (val == 3) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/Rangisari.jpeg')";
    document.getElementById("myAudio").src = "/audio/RANGISARI.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Rangisari";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "Kavita Seth"
  }
  else if (val == 4) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/paramsundari.jpeg')";
    document.getElementById("myAudio").src = "/audio/Param Sundari.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Param Sundari";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "A R Rahman"
  }
  else if (val == 5) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/ab67616d0000b273c08202c50371e234d20caf62.jpeg')";
    document.getElementById("myAudio").src = "/audio/Kesariya.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Kesariya";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "Pritam"
  }
  playAudio(val);
}
function hideFooter(val) {
  pauseAudio();
  console.log("hide");
  document.getElementsByClassName("fa-play-circle")[val].style.display =
    "block";
  document.getElementsByClassName("fa-pause-circle")[val].style.display =
    "none";
  document.getElementById("footer-play-icon").style.display = "block";
  document.getElementById("footer-pause-icon").style.display = "none";
}

function playMusic(val) {
  console.log(val);
  document.getElementById("footer-play-icon").style.display = "none";
  document.getElementById("footer-pause-icon").style.display = "block";
  if (val == 0) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/paramsundari.jpeg')";
    document.getElementById("myAudio").src = "/audio/Param Sundari.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Param Sundari";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "A R Rahman"
    document.getElementsByClassName("fa-play-circle")[val].style.display =
      "none";
    document.getElementsByClassName("fa-pause-circle")[val].style.display =
      "block";
  }
  else if (val == 1) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/Rangisari.jpeg')";
    document.getElementById("myAudio").src = "/audio/RANGISARI.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Rangisari";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "Kavita Seth"
    document.getElementsByClassName("fa-play-circle")[val].style.display =
      "none";
    document.getElementsByClassName("fa-pause-circle")[val].style.display =
      "block";
  }
  else if (val == 2) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/ab67616d0000b273c08202c50371e234d20caf62.jpeg')";
    document.getElementById("myAudio").src = "/audio/Kesariya.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Kesariya";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "Pritam"
    document.getElementsByClassName("fa-play-circle")[val].style.display =
      "none";
    document.getElementsByClassName("fa-pause-circle")[val].style.display =
      "block";
  }
  else if (val == 3) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/paramsundari.jpeg')";
    document.getElementById("myAudio").src = "/audio/Param Sundari.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Param Sundari";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "A R Rahman"
    document.getElementsByClassName("fa-play-circle")[val].style.display =
      "none";
    document.getElementsByClassName("fa-pause-circle")[val].style.display =
      "block";
  }
  else if (val == 4) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/Rangisari.jpeg')";
    document.getElementById("myAudio").src = "/audio/RANGISARI.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Rangisari";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "Kavita Seth"
    document.getElementsByClassName("fa-play-circle")[val].style.display =
      "none";
    document.getElementsByClassName("fa-pause-circle")[val].style.display =
      "block";
  }
  else if (val == 5) {
    document.getElementsByClassName('footer__left__image')[0].style.backgroundImage = "url('/assets/ab67616d0000b273c08202c50371e234d20caf62.jpeg')";
    document.getElementById("myAudio").src = "/audio/Kesariya.mp3";
    document.getElementsByClassName("footer__left__details__title")[0].innerHTML = "Kesariya";
    document.getElementsByClassName("footer__left__details__artist")[0].innerHTML = "Pritam"
    document.getElementsByClassName("fa-play-circle")[val].style.display =
      "none";
    document.getElementsByClassName("fa-pause-circle")[val].style.display =
      "block";
  }
  for (let i = 0; i < 6; i++) {
    if (i == val) {
      continue;
    }
    document.getElementsByClassName("fa-play-circle")[i].style.display =
      "block";
    document.getElementsByClassName("fa-pause-circle")[i].style.display =
      "none";
  }

  document.getElementById("myAudio").play();
}

function pauseMusic(val) {
  document.getElementById("myAudio").pause();
  document.getElementById("footer-play-icon").style.display = "block";
  document.getElementById("footer-pause-icon").style.display = "none";
  document.getElementsByClassName("fa-play-circle")[val].style.display =
    "block";
  document.getElementsByClassName("fa-pause-circle")[val].style.display =
    "none";
}