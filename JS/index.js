$(document).ready(function () {
  $('#lightslider').lightSlider({
    adaptiveHeight: true,
    item: 1,
    slideMargin: 0,
    loop: true,
    auto: true,
    pager: false,
    pauseOnHover: true,
    controls: false

  });
});

var btn = document.getElementsByClassName("video_border_name");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var youtube = document.getElementsByClassName("iframe_youtube");
    for (let j = 0; j < youtube.length; j++) {
      youtube[j].style.display = "none";
      btn[j].style.background = "rgba(0,0,0,0.2)";
      btn[j].style.color = "rgb(255,255,255)";
    };
    youtube[i].style.display = "block";
    btn[i].style.background = "rgb(255,255,255)";
    btn[i].style.color = "rgba(0,0,0,0.2)";
  });
}

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