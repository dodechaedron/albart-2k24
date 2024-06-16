// scroll reveal animation
AOS.init({
    once: true
});

// navbar menu events
const links = document.querySelector('nav ul')
document.querySelector('.menu_btn').addEventListener('click', () =>{ 
    document.querySelector('.menu_btn').classList.toggle('active')
    links.classList.toggle('active')
});
 
 

// // copy contract
document.getElementById("contractButton").addEventListener("click", function() { 

let contractValue = document.getElementById("contractInput");
  let btnAddress = document.getElementById("contractButton");

  let originalText = btnAddress.innerHTML; 
 
  btnAddress.innerHTML = "Copied";
 
  setTimeout(() => {
      btnAddress.innerHTML = originalText;
  }, 1000);
  

let inputVal = contractValue.value;
navigator.clipboard.writeText(inputVal) 
})


// autoplay video
// safari autoplay video
document.addEventListener('DOMContentLoaded', function() {
    let video = document.querySelector('.videoAutoPlay'); 
        video.addEventListener('canplaythrough', function() {
            video.play();
        }, true);
    });

