AOS.init();
var typed = new Typed('#element', {
    strings: ["I'M A FRONT-END DEVELOPER"],
    typeSpeed: 50,
    loop: true, 
    loopCount: Infinity,
  });

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
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
sections.forEach(sec => {
  let top = window.scrollY;
  let offset = sec.offsetTop - 150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');
  
  if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
  };
});
};


const nav = document.getElementById("navbar");

window.addEventListener("scroll", function(){
if(window.scrollY >= 550){
  nav.classList.add("fixed")
}
else{
  nav.classList.remove("fixed")
}
})    



var seeMoreButton = document.getElementById("seeMore");
var project = document.getElementById("containerProject");

seeMoreButton.addEventListener("click", function(){
    if(project.style.display === "none" || project.style.display === ""){
        project.style.display = "grid"; 
        project.style.gap = "2rem";
        seeMoreButton.innerText = "See Less";
    } else{
        project.style.display = "none"
        seeMoreButton.innerText = "See More"

    }
})
