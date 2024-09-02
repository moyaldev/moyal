const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(form);
const object = Object.fromEntries(formData);
const json = JSON.stringify(object);
result.innerHTML = "Please wait..."

fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: json
  })
  .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
          result.innerHTML = "Form submitted successfully";
      } else {
          console.log(response);
          result.innerHTML = json.message;
      }
  })
  .catch(error => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
  })
  .then(function() {
      form.reset();
      setTimeout(() => {
          result.style.display = "none";
      }, 3000);
  });
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul a');
window.onscroll = () => {
sections.forEach(sec => {
  let top = window.scrollY;
  let offset = sec.offsetTop - 150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');
  
  if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('nav ul a[href*=' + id + ']').classList.add('active');
      });
  };
});
};

var menu = document.getElementById("menu-icon")
var close = document.getElementById("close-icon")
var list = document.getElementById("list")

menu.addEventListener("click", function(){
  list.style.left = 0 + "px"
  close.style.display = "block"
  menu.style.display = "none"
})
close.addEventListener("click", function(){
  list.style.left = -500 + "px"
  close.style.display = "none"
  menu.style.display = "block"
})