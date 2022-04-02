
var swiper3 = new Swiper(".swiper-container3", {
  slidesPerView: 3,
    breakpoints: {
    300:{
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1100:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1400:{
      slidesPerView: 3,
      spaceBetween: 10,
    }
  },
  navigation: {
    nextEl: ".n3",
    prevEl: ".p3",
  },
});

var swiper4 = new Swiper(".swiper-container4", {
  slidesPerView: 3,
  spaceBetween: 0,
     breakpoints: {
    300:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1100:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1400:{
      slidesPerView: 4,
      spaceBetween: 10,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper1 = new Swiper(".swiper-container1", {
  slidesPerView: 10,
  breakpoints: {
    140: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    800:{
      slidesPerView: 7,
      spaceBetween: 20,
    },
   
    1324: {
      slidesPerView: 10,
      spaceBetween: 0,
    },
  },
  navigation: {
      nextEl: ".n",
      prevEl: ".p",
  },
});

var swiper2 = new Swiper(".swiper-container2", {
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  history: {
    key: "slide",
  },
});


const list_li = document.querySelectorAll('.nav-list')
const nav_link = document.querySelectorAll('.nav-link')

list_li.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-list.active-li").classList.remove("active-li");
      item.classList.add("active-li");
    });
});

nav_link.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-link.active").classList.remove("active");
      item.classList.add("active");
    });
});



