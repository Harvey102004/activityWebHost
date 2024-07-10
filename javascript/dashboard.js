function setActiveReportsLink() {
    const reportsLink = document.querySelector('a[href="#"]:nth-child(1)');
    const announcementsLink = document.querySelector('a[href="#"]:nth-child(2)');
    const accountsLink = document.querySelector('a[href="#"]:nth-child(3)');
    const lofnamesLink = document.querySelector('a[href="#"]:nth-child(4)');
  
    reportsLink.classList.add('active');
    announcementsLink.classList.remove('active');
    accountsLink.classList.remove('active');
    lofnamesLink.classList.remove('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    setActiveReportsLink();
});

 const container_1 = document.querySelector('.reports_container');
 const container_2 = document.querySelector('.announcements_container');
 const container_3 = document.querySelector('.listofnames_container');
 const container_4 = document.querySelector('.accountsettings_container');

 const reportsLink = document.querySelector('a[href="#"]:nth-child(2)'); 


reportsLink.addEventListener('click', () => {

  container1.style.display = 'none';
  container2.style.display = 'block';
  container3.style.display = 'none';
  container4.style.display = 'none';

  reportsLink.classList.add('active');
  announcementsLink.classList.remove('active');
  accountsLink.classList.remove('active');
  lofnamesLink.classList.remove('active');

});

const container1 = document.querySelector('.reports_container');
const container2 = document.querySelector('.announcements_container');
const container3 = document.querySelector('.listofnames_container');
const container4 = document.querySelector('.accountsettings_container');

const announcementsLink = document.querySelector('a[href="#"]:nth-child(1)'); 


announcementsLink.addEventListener('click', () => {

  container1.style.display = 'block';
  container2.style.display = 'none';
  container3.style.display = 'none';
  container4.style.display = 'none';

  announcementsLink.classList.add('active');
  reportsLink.classList.remove('active');
  accountsLink.classList.remove('active');
  lofnamesLink.classList.remove('active');
});

const _container1 = document.querySelector('.reports_container');
const _container2 = document.querySelector('.announcements_container');
const _container3 = document.querySelector('.listofnames_container');
const _container4 = document.querySelector('.accountsettings_container');
const accountsLink = document.querySelector('a[href="#"]:nth-child(3)'); 


accountsLink.addEventListener('click', () => {

  container1.style.display = 'none';
  container2.style.display = 'none';
  container3.style.display = 'block';
  container4.style.display = 'none';

  accountsLink.classList.add('active');
  reportsLink.classList.remove('active');
  announcementsLink.classList.remove('active');
  lofnamesLink.classList.remove('active');
});

const container__1 = document.querySelector('.reports_container');
const container__2 = document.querySelector('.announcements_container');
const container__3 = document.querySelector('.listofnames_container');
const container__4 = document.querySelector('.accountsettings_container');

const lofnamesLink = document.querySelector('a[href="#"]:nth-child(4)'); 


lofnamesLink.addEventListener('click', () => {

  container1.style.display = 'none';
  container2.style.display = 'none';
  container3.style.display = 'none';
  container4.style.display = 'block';

  reportsLink.classList.remove('active');
  announcementsLink.classList.remove('active');
  accountsLink.classList.remove('active');
  lofnamesLink.classList.add('active');

});


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const addListContainer = document.getElementById("addListContainer");

  toggleButton.addEventListener("click", function () {
    addListContainer.classList.toggle("show");
  });
});

let password1 = document.getElementById("password1");
let password_icon1 = document.getElementById("password_icon1");

password_icon1.onclick = function () {
  if (password1.type == "password") {
    password1.type = "text";
    password_icon1.src = "/images/unhide.png";
  } else {
    password1.type = "password";
    password_icon1.src = "/images/hide.png";
  }
};

let password2 = document.getElementById("password2");
let password_icon2 = document.getElementById("password_icon2");

password_icon2.onclick = function () {
  if (password2.type == "password") {
    password2.type = "text";
    password_icon2.src = "/images/unhide.png";
  } else {
    password2.type = "password";
    password_icon2.src = "/images/hide.png";
  }
};

let password3 = document.getElementById("password3");
let password_icon3 = document.getElementById("password_icon3");

password_icon3.onclick = function () {
  if (password3.type == "password") {
    password3.type = "text";
    password_icon3.src = "/images/unhide.png";
  } else {
    password3.type = "password";
    password_icon3.src = "/images/hide.png";
  }
};
