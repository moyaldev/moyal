let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav main div a');
let navLinks2 = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav main div a[href*=' + id + ']').classList.add('active');
            });

            navLinks2.forEach(links => {
                links.classList.remove('active2');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active2');
            });
        };
    });
};

const heart = document.getElementById("heart");
const heart2 = document.getElementById("heart2");

        heart.addEventListener("click", function () {
            if (heart.innerHTML.includes('bxs-heart')) {
                heart.innerHTML = "<i class='bx bx-heart'></i>"; 
            } else {
                heart.innerHTML = "<i class='bx bxs-heart'></i>"; 
            }
        });
        heart2.addEventListener("click", function () {
          if (heart2.innerHTML.includes('bxs-heart')) {
              heart2.innerHTML = "<i class='bx bx-heart'></i>"; 
          } else {
              heart2.innerHTML = "<i class='bx bxs-heart'></i>";
          }
      });

const shop = document.getElementById("shop");
const shop2 = document.getElementById("shop2");

        shop.addEventListener("click", function () {
            if (shop.innerHTML.includes('bxs-shopping-bag')) {
                shop.innerHTML = "<i class='bx bx-shopping-bag'></i>"; 
            } else {
                shop.innerHTML = "<i class='bx bxs-shopping-bag'></i>"; 
            }
        });
        shop2.addEventListener("click", function () {
          if (shop2.innerHTML.includes('bxs-shopping-bag')) {
              shop2.innerHTML = "<i class='bx bx-shopping-bag'></i>"; 
          } else {
              shop2.innerHTML = "<i class='bx bxs-shopping-bag'></i>"; 
          }
      });

      const seeMore = document.getElementById("buttonAbout");
      const text = document.getElementById("more");
      
      seeMore.addEventListener("click", function() {
          if (text.style.display === "none" || text.style.display === "") {
              text.style.display = "block";
              seeMore.innerText = "See Less";
          } else {
              text.style.display = "none";
              seeMore.innerText = "See More";
          }
      });

      const logo = document.getElementById("logo");
      const item = document.querySelector("nav ul");
      
      function toggleMenu() {
        if (window.innerWidth <= 768) { 
          if (item.style.display === "none" || item.style.display === "") {
            item.style.display = "block";
            item.classList.remove("up");
            item.classList.add("scroll");
          } else {
            item.classList.remove("scroll");
            item.classList.add("up");
            setTimeout(() => {
              item.style.display = "none";
              item.classList.remove("up"); // Hapus kelas setelah animasi selesai
            }, 300); // Durasi yang sama dengan animasi
          }
        } else {
          item.style.display = "block";
          item.classList.remove("up");
          item.classList.add("scroll");
        }
      }
      
      logo.addEventListener("click", toggleMenu);
      
      window.addEventListener("resize", function() {
        if (window.innerWidth < 768) {
          item.style.display = "block"; 
          item.classList.remove("scroll");
          item.classList.remove("up");
        } else {
          item.style.display = "none";
          item.classList.remove("scroll");
          item.classList.remove("up");
        }
      });