window.addEventListener("scroll", function () {
  var conver = document.querySelector("div.conversation_border");
  // console.log("abc"); //測試scroll事件是否成功
  let datet = document.querySelectorAll("div.mon0817");
  //console.log(datet.offsetTop); //知道div.mon0817頂點至父元素距離321及2475

  let scroll_y = parseInt(window.scrollY);
  // console.log(scroll_y); //抓出滑動距離並且取整數

  let height_win = window.innerHeight - 150;
  // console.log(height_win);//抓出網頁螢幕高度

  // 日期的FOR迴圈
  for (let i = 0; i < datet.length; i++) {
    let distan = datet[i].offsetTop - scroll_y;
    // console.log(distan);
    if ((distan <= height_win) && (distan >= 50)) {
      datet[i].style.transform = "translateX(0%)";
      datet[i].style.opacity = "1";
    } else {
      datet[i].style.transform = "translateX(100%)";
      datet[i].style.opacity = "0";
    }
  }

  // green
  let green = document.querySelectorAll("div.green");
  for (let i = 0; i < green.length; i++) {
    let green_dis = green[i].offsetTop - scroll_y;
    if ((green_dis <= height_win) && (green_dis >= 50)) {
      green[i].style.transform = "translateX(0%)";
      green[i].style.opacity = "1";
    } else {
      green[i].style.transform = "translateX(100%)";
      green[i].style.opacity = "0";
    }
  }

  // gray
  let gray = document.querySelectorAll("div.gray");
  for (let i = 0; i < gray.length; i++) {
    let gray_dis = gray[i].offsetTop - scroll_y;
    if ((gray_dis <= height_win) && (gray_dis >= 50)) {
      gray[i].style.transform = "translateX(0%)";
      gray[i].style.opacity = "1";
    } else {
      gray[i].style.transform = "translateX(100%)";
      gray[i].style.opacity = "0";
    }
  }

});

// 針對背景圖做變換
$(document).ready(function () {
  $(window).scroll(function () {
    let scrollTop = parseInt($(this).scrollTop());
    // console.log($('div.bg_dif')[i].offsetTop);
    let p = [
      "../HTML/index_1_2/entrance.JPG",
      "../HTML/index_1_2/view_beautiful.jpg",
      "../HTML/index_1_2/maya.jpg",
      "../HTML/index_1_2/bath_2.jpg",
      "../HTML/index_1_2/castle.jpg",
      "../HTML/index_1_2/top_2.jpg"
    ];
    // console.log($('div.bg_dif')[0]);
    for (i = 0; i < $('div.bg_dif').length; i++) {
      // console.log($('div.bg_dif')[i].offsetTop);
      if (($('div.bg_dif')[i].offsetTop - scrollTop) <= 0) {
        // console.log(1);

        $('div.view_point').css({
          backgroundImage: `url(${p[i]})`,
        });
      } else if (scrollTop == 0) {
        $('div.view_point').css({
          backgroundImage: 'url(../HTML/index_1_2/waterfall.jpg)',
        });
      }
    }
  });
});

// 點擊事件(關閉彈跳視窗) 
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("close_btn")) {
    let close = document.querySelector("button.close_btn");
    close.style.color = "black";
    close.style.backgroundColor = "white";
    let art = document.querySelector("article.article");
    setTimeout(() => {
      art.style.opacity = "0";
      art.style.zIndex = "-1";
    }, 300);
  }
});

//點擊事件(開啟彈跳視窗並更換彈跳視窗裡的圖片) 
var same = document.querySelectorAll("div.same_width");
let pic = document.getElementsByClassName("jump_pic")[0];
// let pp = [
//   "../HTML/index_1_2/entrance1.JPG",
//   "../HTML/index_1_2/entrance.jpg",
//   "../HTML/index_1_2/view_beautiful.jpg",
//   "../HTML/index_1_2/go_hiking.jpg",
//   "../HTML/index_1_2/maya.jpg",
//   "../HTML/index_1_2/bath_1.jpg",
//   "../HTML/index_1_2/bath_2.jpg",
//   "../HTML/index_1_2/castle.jpg",
//   "../HTML/index_1_2/castle_1.jpg",
//   "../HTML/index_1_2/top_1.jpg",
//   "../HTML/index_1_2/top_2.jpg"
// ];
// 暫時用不到
// let ppp = [
//   'url("../HTML/index_1_2/entrance1.JPG")',
//   'url("../HTML/index_1_2/entrance.jpg")',
//   'url("../HTML/index_1_2/view_beautiful.jpg")',
//   'url("../HTML/index_1_2/go_hiking.jpg")',
//   'url("../HTML/index_1_2/maya.jpg")',
//   'url("../HTML/index_1_2/bath_1.jpg")',
//   'url("../HTML/index_1_2/bath_2.jpg")',
//   'url("../HTML/index_1_2/castle.jpg")',
//   'url("../HTML/index_1_2/castle_1.jpg")',
//   'url("../HTML/index_1_2/top_1.jpg")',
//   'url("../HTML/index_1_2/top_2.jpg")'
// ];
for (i = 0; i < same.length; i++) {
  if (i == 0) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/entrance1.JPG';
    });
  }
  if (i == 1) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/entrance.jpg';
    });
  }
  if (i == 2) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/view_beautiful.jpg';
    });
  }
  if (i == 3) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/go_hiking.jpg';
    });
  }
  if (i == 4) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/maya.jpg';
    });
  }
  if (i == 5) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/bath_1.jpg';
    });
  }
  if (i == 6) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/bath_2.jpg';
    });
  }
  if (i == 7) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/castle.jpg';
    });
  }
  if (i == 8) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/castle_1.jpg';
    });
  }
  if (i == 9) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/top_1.jpg';
    });
  }
  if (i == 10) {
    same[i].addEventListener("click", function () {
      let article = document.querySelector("article.article");
      article.style.opacity = "1";
      article.style.zIndex = "999";
      pic.src = '../HTML/index_1_2/top_2.jpg';
    });
  }
}

// 回到頂端
var a_top = document.getElementsByClassName("go_top")[0];
a_top.addEventListener("click", function () {
  window.scrollTo({
    top: '0',
    behavior: 'smooth',
  })
});