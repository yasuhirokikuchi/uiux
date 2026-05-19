// スムーススクロール処理
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      // ヘッダーの高さを取得（縮小時を考慮）
      const headerHeight = header.offsetHeight;
      // 追加の余白（必要に応じて調整）
      const offset = 20;

      // 要素の位置を取得
      const elementPosition = target.getBoundingClientRect().top;
      // 現在のスクロール位置 + 要素の位置 - ヘッダーの高さ - 余白
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
});

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
