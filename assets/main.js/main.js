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

var swiper1 = new Swiper(".swiper-container1", {
  slidesPerView: 10,
  spaceBetween: 0,
  navigation: {
      nextEl: ".n",
      prevEl: ".p",
  },
});

var swiper2 = new Swiper(".swiper-container2", {
  loop: true,
   slidesPerView: 1,
        spaceBetween: 30,
  navigation: {
    nextEl: ".n2",
    prevEl: ".p2",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});