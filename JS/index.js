// mengganti atau mengisi kata sambutan pada page pertama
function replaceName() {
  let name = prompt("What's Your Name?", "");
  console.log(name);
  document.getElementById("name").innerHTML = name
}
replaceName()


// animasi scroll agar terlihat lebih smooth
function buttonAbout() {
  document.getElementById("target-section-about").scrollIntoView({ behavior: "smooth" });
} // button about & button hit me
function buttonProject() {
  document.getElementById("target-section-project").scrollIntoView({ behavior: "smooth" });
} // button project
function buttonContact() {
  document.getElementById("target-section-contact").scrollIntoView({ behavior: "smooth" });
} // button contact


// banner slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slideshow");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}


// validate form
document.getElementById('contactForm').onsubmit = function (event) {
  event.preventDefault();

  var name = document.getElementById('nama').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name || email || message) {
    alert(`Thank you for your message, here are your submitted details :\nName : ${name}\nEmail : ${email}\nMessage:  ${message}`);
  }
  this.submit();
}; 