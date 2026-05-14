// ヘッダーの縮小処理
let scrolling = false;

window.addEventListener("scroll", function () {
  if (!scrolling) {
    window.requestAnimationFrame(() => {
      const header = document.querySelector("header");

      if (window.scrollY > 150) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
      scrolling = false;
    });
    scrolling = true;
  }
});
