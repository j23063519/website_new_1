// 翻牌告訴答案直接更改內容
$("div.test_white").eq(0).on("click", function () {
  $(this).toggleClass("onw");
  $(this).find("p.knowledge_content").toggleClass("on");
  setTimeout(() => {
    $(this).find("p.knowledge_content").toggleClass("none");
  }, 250);
});
$("div.test_white").eq(1).on("click", function () {
  $(this).toggleClass("onw");
  $(this).find("p.knowledge_content").toggleClass("on");
  setTimeout(() => {
    $(this).find("p.knowledge_content").toggleClass("none");
  }, 250);
});
$("div.test_white").eq(2).on("click", function () {
  $(this).toggleClass("onw");
  $(this).find("p.knowledge_content").toggleClass("on");
  setTimeout(() => {
    $(this).find("p.knowledge_content").toggleClass("none");
  }, 250);
});
$("div.test_white").eq(3).on("click", function () {
  $(this).toggleClass("onw");
  $(this).find("p.knowledge_content").toggleClass("on");
  setTimeout(() => {
    $(this).find("p.knowledge_content").toggleClass("none");
  }, 250);
});
$("div.test_white").eq(4).on("click", function () {
  $(this).toggleClass("onw");
  $(this).find("p.knowledge_content").toggleClass("on");
  setTimeout(() => {
    $(this).find("p.knowledge_content").toggleClass("none");
  }, 250);
});
$("div.test_white").eq(5).on("click", function () {
  $(this).toggleClass("onw");
  $(this).find("p.knowledge_content").toggleClass("on");
  setTimeout(() => {
    $(this).find("p.knowledge_content").toggleClass("none");
  }, 250);
});

// 控制登山配備
for (let i = 0; i < $("div.equipment_border").length; i++) {
  $("div.equipment_border").eq(i).mouseenter(function () {
    $(this).css({
      cursor: 'pointer',
      transition: '0.6s',
      transform: 'translateY(-4%)',
    });
    $(this).find("div.equipment_bg").css({
      transition: '0.6s',
      opacity: '0',
    });
  }).mouseleave(function () {
    $(this).css({
      cursor: 'pointer',
      transition: '0.6s',
      transform: 'translateY(0%)',
    });
    $(this).find("div.equipment_bg").css({
      transition: '0.6s',
      opacity: '1',
    });
  });
}

for (let i = 0; i < $("div.equipment_border").length; i++) {
  $("div.equipment_border").eq(i).mouseenter(function () {
    $("p.equipment_ans").eq(i).removeClass("pnone");
  }).mouseleave(function () {
    $("p.equipment_ans").eq(i).addClass("pnone");
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