// 控制input輸入字元長度
window.addEventListener("resize", function () {
  if (window.innerWidth <= 1435) {
    let input = document.getElementById("search_bar");
    input.maxLength = "14";
  }
});

// 控制input#search_bar點擊 放大縮小
let input = document.getElementById("search_bar");
let img_sear = document.getElementById("search_icon");
input.addEventListener("focus", function () {
  if (input) {
    input.style.transform = "translate(0%, -50%) scale(1.02,1.02)";
    img_sear.style.transform = "scale(1.2)";
  }
});
input.addEventListener("blur", function () {
  if (input) {
    input.style.transform = "translate(0%, -50%) scale(1.0,1.0)";
    img_sear.style.transform = "scale(1)";
  }
});

// 控制left_button和right_button左右移動scrollx
var left_btn = document.getElementsByClassName("left_button")[0];
var right_btn = document.getElementsByClassName("right_button")[0];
var ove = document.getElementsByClassName("overflow")[0];
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("right_button")) {
    ove.scrollLeft += 125;
  }
  if (e.target.classList.contains("left_button")) {
    ove.scrollLeft -= 125;
  }
});

// 當滑過圖片時做變化
$("div.same_mountain").mouseenter(function () {
  $(this).css({
    borderRadius: '10px',
    backgroundSize: '200%',
  });
}).mouseleave(function () {
  $(this).css({
    borderRadius: '50%',
    backgroundSize: 'cover',
  });
});

// 當滑鼠滑過字形時圖片做變化 和 字形顏色也做變化
// $(document).ready(function () {});
$('p.same_mountain').mouseenter(function () {
  $(this).css({
    transition: '0.6s',
    color: 'white',
    textShadow: '0px 0px 5px black',
  });
  $(this).closest("div.same_mountain_border").find("div.same_mountain").css({
    borderRadius: '10px',
    backgroundSize: '200%',
  });
}).mouseleave(function () {
  $(this).css({
    transition: '0.6s',
    color: 'black',
    textShadow: 'none',
  });
  $(this).closest("div.same_mountain_border").find("div.same_mountain").css({
    borderRadius: '50%',
    backgroundSize: 'cover',
  });
});


// 點擊切換月榜周榜
$("div.right_month").click(function () {
  $(this).css({
    background: 'white',
  });
  $(this).closest("div.week_month_bg").find("div.left_week").css({
    background: 'rgb(239,239,239)',
  });
  // 徐庭亭
  $(this).closest("div.week_month_bg").find("div.person_no_1").css({
    backgroundImage: 'url("../HTML/index_2/3p.JPG")'
  });
  $("div.no_1 p.no_name").html("徐庭亭");
  $("div.no_1 p.group_num").html("揪團人數:125人");
  // 紀恆達
  $(this).closest("div.week_month_bg").find("div.person_no_2").css({
    backgroundImage: 'url("../HTML/index_2/1p.JPG")'
  });
  $("div.no_2 p.no_name").html("紀恆達");
  $("div.no_2 p.group_num").html("揪團人數:120人");
  // 黃家佳
  $(this).closest("div.week_month_bg").find("div.person_no_3").css({
    backgroundImage: 'url("../HTML/index_2/2p.JPG")'
  });
  $("div.no_3 p.no_name").html("黃家佳");
  $("div.no_3 p.group_num").html("揪團人數:118人");
  // 陳佩琪
  $(this).closest("div.week_month_bg").find("div.no_4_picture").css({
    backgroundImage: 'url("../HTML/index_2/9p.JPG")'
  });
  $('p.no_four_nine_name').eq(0).html("陳佩琪");
  $('p.no_num').eq(0).html("111人");
  // 林維妮
  $(this).closest("div.week_month_bg").find("div.no_5_picture").css({
    backgroundImage: 'url("../HTML/index_2/8p.JPG")'
  });
  $('p.no_four_nine_name').eq(1).html("林維妮");
  $('p.no_num').eq(1).html("101人");
  // 田比筆
  $(this).closest("div.week_month_bg").find("div.no_6_picture").css({
    backgroundImage: 'url("../HTML/index_2/7p.JPG")'
  });
  $('p.no_four_nine_name').eq(2).html("田比筆");
  $('p.no_num').eq(2).html("97人");
  // 何妤真
  $(this).closest("div.week_month_bg").find("div.no_7_picture").css({
    backgroundImage: 'url("../HTML/index_2/6p.JPG")'
  });
  $('p.no_four_nine_name').eq(3).html("何妤真");
  $('p.no_num').eq(3).html("96人");
  // 黃家旗
  $(this).closest("div.week_month_bg").find("div.no_8_picture").css({
    backgroundImage: 'url("../HTML/index_2/5p.JPG")'
  });
  $('p.no_four_nine_name').eq(4).html("黃家旗");
  $('p.no_num').eq(4).html("94人");
  // 黃真真
  $(this).closest("div.week_month_bg").find("div.no_9_picture").css({
    backgroundImage: 'url("../HTML/index_2/4p.JPG")'
  });
  $('p.no_four_nine_name').eq(5).html("黃真真");
  $('p.no_num').eq(5).html("87人");
});

$("div.left_week").click(function () {
  $(this).css({
    background: 'white',
  });
  $(this).closest("div.week_month_bg").find("div.right_month").css({
    background: 'rgb(239,239,239)',
  });

  // 紀恆達
  $(this).closest("div.week_month_bg").find("div.person_no_1").css({
    backgroundImage: 'url("../HTML/index_2/1p.JPG")'
  });
  $("div.no_1 p.no_name").html("紀恆達");
  $("div.no_1 p.group_num").html("揪團人數:126人");
  // 黃家佳
  $(this).closest("div.week_month_bg").find("div.person_no_2").css({
    backgroundImage: 'url("../HTML/index_2/2p.JPG")'
  });
  $("div.no_2 p.no_name").html("黃家佳");
  $("div.no_2 p.group_num").html("揪團人數:121人");
  // 徐庭亭
  $(this).closest("div.week_month_bg").find("div.person_no_3").css({
    backgroundImage: 'url("../HTML/index_2/3p.JPG")'
  });
  $("div.no_3 p.no_name").html("徐庭亭");
  $("div.no_3 p.group_num").html("揪團人數:119人");
  // 黃真真
  $(this).closest("div.week_month_bg").find("div.no_4_picture").css({
    backgroundImage: 'url("../HTML/index_2/4p.JPG")'
  });
  $('p.no_four_nine_name').eq(0).html("黃真真");
  $('p.no_num').eq(0).html("112人");
  // 黃家旗
  $(this).closest("div.week_month_bg").find("div.no_5_picture").css({
    backgroundImage: 'url("../HTML/index_2/5p.JPG")'
  });
  $('p.no_four_nine_name').eq(1).html("黃家旗");
  $('p.no_num').eq(1).html("102人");
  // 何妤真
  $(this).closest("div.week_month_bg").find("div.no_6_picture").css({
    backgroundImage: 'url("../HTML/index_2/6p.JPG")'
  });
  $('p.no_four_nine_name').eq(2).html("何妤真");
  $('p.no_num').eq(2).html("98人");
  // 田比筆
  $(this).closest("div.week_month_bg").find("div.no_7_picture").css({
    backgroundImage: 'url("../HTML/index_2/7p.JPG")'
  });
  $('p.no_four_nine_name').eq(3).html("田比筆");
  $('p.no_num').eq(3).html("95人");
  // 林維妮
  $(this).closest("div.week_month_bg").find("div.no_8_picture").css({
    backgroundImage: 'url("../HTML/index_2/8p.JPG")'
  });
  $('p.no_four_nine_name').eq(4).html("林維妮");
  $('p.no_num').eq(4).html("88人");
  // 陳佩琪
  $(this).closest("div.week_month_bg").find("div.no_9_picture").css({
    backgroundImage: 'url("../HTML/index_2/9p.JPG")'
  });
  $('p.no_four_nine_name').eq(5).html("陳佩琪");
  $('p.no_num').eq(5).html("85人");
});

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