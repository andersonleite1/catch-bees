function showHelp() {
    var btnClose = document.querySelector(".icon-close");
    var txtDescription = document.querySelector(".info-description");

    btnClose.classList.add("show");
    txtDescription.classList.add("show");
}

function closeHelp() {
    var btnClose = document.querySelector(".icon-close");
    var txtDescription = document.querySelector(".info-description");

    btnClose.classList.remove("show");
    txtDescription.classList.remove("show");
}

function load() { 
    var btnHelp = document.querySelector(".icon-help");
    var btnClose = document.querySelector(".icon-close");

    btnHelp.addEventListener("click", showHelp, false); 
    btnClose.addEventListener("click", closeHelp, false); 
  } 

  document.addEventListener("DOMContentLoaded", load, false);
