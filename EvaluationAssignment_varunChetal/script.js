let menus = document.getElementById("menus");

const toggle = ()=> {
    if (menus.style.display == "none") {
        menus.style.display = "block";
        menus.style.textAlign = "left";
    }
    else {
        menus.style.display = "none";
    }
  }
let pauseplay = document.getElementById("vidbutton");
pauseplay.addEventListener("click", playPause);
bgvideo = document.getElementById("ocean_video");
function playPause() { 
    if (bgvideo.paused) {
        bgvideo.play();
        pauseplay.innerHTML = "Pause";
        }
    else  {
        bgvideo.pause(); 
        pauseplay.innerHTML = "Play";
        }
}
const story_images = document.querySelectorAll('.story-click');
const modal_display = document.querySelector('.modal-container');
const closebttn = document.querySelector('.closebtn')



 for (let i=0;i<story_images.length;i++){
  story_images[i].addEventListener('click',()=>{
    modal_display.classList.remove('hide-display');
    modal_display.classList.add('show-display');
   
   closebttn.addEventListener('click' , ()=>{
    modal_display.classList.remove('show-display');
    modal_display.classList.add('hide-display');
    story_images[i].classList.remove('active-class');
    story_images[i].classList.add('inactive-class');
   });
  });
}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop : true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1.25,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
      },
  });
