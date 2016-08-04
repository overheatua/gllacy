var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.116477, lng: 30.636405},
    zoom: 17,
    disableDefaultUI: true
  });

  var image = 'img/map-pin.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 50.116477, lng: 30.636405},
    map: map,
    icon: image
  });
}

var search = document.querySelector(".search");
var popup = document.querySelector(".search-form");
var close = popup.querySelector(".modal-content-close");
var storage = localStorage.getItem("login");
var form = popup.querySelector("form");
var link = document.querySelector(".login");
var popupLogin = document.querySelector(".login-form");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btn3 = document.querySelector("#btn-3");
var slider1 = document.querySelector(".slider1");
var slider2 = document.querySelector(".slider2");
var slider3 = document.querySelector(".slider3");
search.addEventListener("click", function(event){
event.preventDefault();
popup.classList.add("search-form-show");
});

link.addEventListener("click", function(event){
event.preventDefault();
popupLogin.classList.add("login-form-show");
popupLogin.focus();
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (popupLogin.classList.contains("login-form-show")) {
popupLogin.classList.remove("login-form-show");
}
}
});

btn1.addEventListener("click", function(event) {
  if (slider1.classList.contains("slider2")) {
slider1.classList.remove("slider2");
}
if (slider1.classList.contains("slider3")) {
slider1.classList.remove("slider3");
}
  slider1.classList.add("slider1");
});
btn2.addEventListener("click", function(event) {
  if (slider1.classList.contains("slider1")) {
slider1.classList.remove("slider1");
}
if (slider1.classList.contains("slider3")) {
slider1.classList.remove("slider3");
}
  slider1.classList.add("slider2");
});
btn3.addEventListener("click", function(event) {
  if (slider1.classList.contains("slider2")) {
slider1.classList.remove("slider2");
}
if (slider1.classList.contains("slider1")) {
slider1.classList.remove("slider1");
}
  slider1.classList.add("slider3");
});

// close.addEventListener("click", function(event){
// event.preventDefault();
// popup.classList.remove("modal-content-show");
// popup.classList.remove("modal-error");
// });
//
// form.addEventListener("submit", function(event) {
// if (!login.value || !password.value) {
// event.preventDefault();
// popup.classList.add("modal-error");
// } else {
// localStorage.setItem("login", login.value);
// }
// });

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (popup.classList.contains("search-form-show")) {
popup.classList.remove("search-form-show");
}
}
});
