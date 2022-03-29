const another_language = document.querySelector('.another_language')
const flag = document.querySelector('.flag')

flag.addEventListener('click', function(){
    another_language.classList.toggle('active')
})

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

const blog_open = document.querySelector('.blog_open')
const dropdown = document.querySelector('.dropdown')

blog_open.addEventListener('click', function(){
    dropdown.classList.toggle('active')
})