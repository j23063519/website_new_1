// 回到頂端
var a_top = document.getElementsByClassName("go_top")[0];
a_top.addEventListener("click", function () {
  window.scrollTo({
    top: '0',
    behavior: 'smooth',
  })
});

// 登入註冊
$('li#loginLogout').on('click', function () {
  $('div#loginlogout').toggleClass('actopa');
});

let prism = document.querySelector(".rec-prism");

function showSignup() {
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin() {
  prism.style.transform = "translateZ(-100px)";
}
function showForgotPassword() {
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe() {
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactUs() {
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
}

function showThankYou() {
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}