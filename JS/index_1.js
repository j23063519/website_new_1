$('button.button_move').click(function () {
  $('aside.height_border').toggleClass('mo');
});

var btn = document.getElementsByClassName("same");
for (let i = 0; i < btn.length; i++) {
  var content = document.getElementsByClassName("big_content_border");
  btn[i].addEventListener("click", function () {
    // alert();
    for (let j = 0; j < content.length; j++) {
      content[j].style.opacity = "0";
      setTimeout(() => {
        content[j].classList.add("-none");
      }, 1000);
      btn[j].style.background = "white";
      btn[j].style.boxShadow = "0px 0px 0px 0px black inset"
      // alert(j);
    }
    content[i].style.opacity = "1";
    setTimeout(() => {
      content[i].classList.remove("-none");
    }, 1000);
    btn[i].style.background = "green";
    btn[i].style.boxShadow = "0px 0px 0px 1px black inset"
  });
}

// var btn = document.getElementsByClassName("same");
// for (let i = 0; i < btn.length; i++) {
//   var content = document.getElementsByClassName("big_content_border");
//   var main = document.getElementsByClassName("main")[0];
//   btn[i].addEventListener("click", function () {
//     for (let j = 0; j < content.length; j++) {
//       content[j].style.opacity = "0";
//     }

//     setTimeout(() => {
//       main.innerHTML = "";
//     }, 1000);
//     main.insertAdjacentHTML("afterbegin", content.outerHTML);

//   });
// }

var btn = document.getElementsByClassName("same");
for (let i = 0; i < btn.length; i++) {
  var view = document.getElementsByClassName("view_all")[0];
  btn[i].addEventListener("click", function () {
    var bg_1 = ["../HTML/index_1/u.gif", "../HTML/index_1/da.gif", "../HTML/index_1/u.gif", "../HTML/index_1/sh.gif", "../HTML/index_1/gh.gif", "../HTML/index_1/ho.gif"];

    view.style.backgroundImage = "url(" + bg_1[i] + ")";
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