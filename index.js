window.addEventListener("scroll", function () {
  // header要素を取得
  const header = document.querySelector("header");

  // スクロール量が150pxを超えた場合
  if (window.scrollY > 150) {
    header.classList.add("shrink");
  } else {
    // 150px以下の場合
    header.classList.remove("shrink");
  }
});
