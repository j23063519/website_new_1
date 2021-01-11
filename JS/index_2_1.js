// 當按下追蹤鈕出現

// 回到頂端
var a_top = document.getElementsByClassName("go_top")[0];
a_top.addEventListener("click", function () {
  window.scrollTo({
    top: '0',
    behavior: 'smooth',
  })
});