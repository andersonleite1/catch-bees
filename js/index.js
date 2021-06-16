function showHelp() {
    let btnClose = document.querySelector(".icon-close");
    let txtDescription = document.querySelector(".info-description");

    btnClose.classList.add("show");
    txtDescription.classList.add("show");
}

function closeHelp() {
    let btnClose = document.querySelector(".icon-close");
    let txtDescription = document.querySelector(".info-description");

    btnClose.classList.remove("show");
    txtDescription.classList.remove("show");
}

function load() { 
    let btnHelp = document.querySelector(".icon-help");
    let btnClose = document.querySelector(".icon-close");

    btnHelp.addEventListener("click", showHelp, false); 
    btnClose.addEventListener("click", closeHelp, false); 
  } 

  document.addEventListener("DOMContentLoaded", load, false);
