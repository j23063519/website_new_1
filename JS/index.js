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

// var btn = document.getElementsByClassName("video_border_name");
// btn[0].addEventListener("click", function () {
//   var youtube = document.getElementsByClassName("iframe_youtube");
//   btn[0].style.color = "rgba(0,0,0,0.2)";
//   btn[0].style.backgroundColor = "rgb(255,255,255)";
//   btn[1].style.color = "rgb(255,255,255)";
//   btn[1].style.backgroundColor = "rgba(0,0,0,0.2)";
//   btn[2].style.color = "rgb(255,255,255)";
//   btn[2].style.backgroundColor = "rgba(0,0,0,0.2)";
//   btn[3].style.color = "rgb(255,255,255)";
//   btn[3].style.backgroundColor = "rgba(0,0,0,0.2)";
//   youtube[0].style.display = "block";
//   youtube[1].style.display = "none";
//   youtube[2].style.display = "none";
//   youtube[3].style.display = "none";

// });
// btn[1].addEventListener("click", function () {
//   var youtube = document.getElementsByClassName("iframe_youtube");
//   btn[0].style.color = "rgb(255,255,255)";
//   btn[0].style.backgroundColor = "rgba(0,0,0,0.2)";
//   btn[1].style.color = "rgba(0,0,0,0.2)";
//   btn[1].style.backgroundColor = "rgb(255,255,255)";
//   btn[2].style.color = "rgb(255,255,255)";
//   btn[2].style.backgroundColor = "rgba(0,0,0,0.2)";
//   btn[3].style.color = "rgb(255,255,255)";
//   btn[3].style.backgroundColor = "rgba(0,0,0,0.2)";
//   youtube[0].style.display = "none";
//   youtube[1].style.display = "block";
//   youtube[2].style.display = "none";
//   youtube[3].style.display = "none";

// });
// btn[2].addEventListener("click", function () {
//   var youtube = document.getElementsByClassName("iframe_youtube");
//   btn[0].style.color = "rgb(255,255,255)";
//   btn[0].style.backgroundColor = "rgba(0,0,0,0.2)";
//   btn[1].style.color = "rgb(255,255,255)";
//   btn[1].style.backgroundColor = "rgba(0,0,0,0.2)";
//   btn[2].style.color = "rgba(0,0,0,0.2)";
//   btn[2].style.backgroundColor = "rgb(255,255,255)";
//   btn[3].style.color = "rgb(255,255,255)";
//   btn[3].style.backgroundColor = "rgba(0,0,0,0.2)";
//   youtube[0].style.display = "none";
//   youtube[1].style.display = "none";
//   youtube[2].style.display = "block";
//   youtube[3].style.display = "none";

// });
// btn[3].addEventListener("click", function () {
//   var youtube = document.getElementsByClassName("iframe_youtube");
//   btn[0].style.color = "rgb(255,255,255)";
//   btn[0].style.backgroundColor = "rgba(0,0,0,0.2)";
//   btn[1].style.color = "rgb(255,255,255)";
//   btn[1].style.backgroundColor = "rgba(0,0,0,0.2)";
//   btn[2].style.color = "rgb(255,255,255)";
//   btn[2].style.backgroundColor = "rgba(0,0,0,0.2)";
//   btn[3].style.color = "rgba(0,0,0,0.2)";
//   btn[3].style.backgroundColor = "rgb(255,255,255)";
//   youtube[0].style.display = "none";
//   youtube[1].style.display = "none";
//   youtube[2].style.display = "none";
//   youtube[3].style.display = "block";
// });
// for (let x = 0; x < btn.length; x++) {
//   btn[x].addEventListener('click', function () {
//     for (let y = 0; y < box.length; y++) {
//       box[y].style.display = 'none';
//       btn[y].style.background = 'gray';
//     }
//     box[x].style.display = 'block';
//     btn[x].style.background = 'white';
//   });
// }
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