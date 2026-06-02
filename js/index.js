// ギャラリーの無限スクロール
document.addEventListener("DOMContentLoaded", function () {
  const scrollWrap = document.querySelector(".scroll-infinity__wrap");
  if (!scrollWrap) return;

  const scrollLists = scrollWrap.querySelectorAll(".scroll-infinity__list");

  // 無限ループのためにリストを複製
  scrollLists.forEach((list) => {
    const clone = list.cloneNode(true);
    scrollWrap.appendChild(clone);
  });

  let isPaused = false;
  let resumeTimer = null;
  const scrollSpeed = 0.8; // スクロール速度（ピクセル/フレーム）
  let currentScroll = scrollWrap.scrollLeft;

  function autoScroll() {
    if (!isPaused) {
      currentScroll += scrollSpeed;
      scrollWrap.scrollLeft = currentScroll;
    } else {
      // 手動操作中は内部変数を同期
      currentScroll = scrollWrap.scrollLeft;
    }

    // 常にループ境界をチェック
    const halfWidth = scrollWrap.scrollWidth / 2;
    if (scrollWrap.scrollLeft >= halfWidth) {
      currentScroll -= halfWidth;
      scrollWrap.scrollLeft = currentScroll;
    }

    requestAnimationFrame(autoScroll);
  }

  const pauseAutoScroll = () => {
    if (window.innerWidth > 768) return; // デスクトップ版では手動操作による一時停止を無効化
    isPaused = true;
    // 手動操作中はスナップを有効にする（モバイル向け）
    scrollWrap.style.scrollSnapType = "x mandatory";
    if (resumeTimer) clearTimeout(resumeTimer);
  };

  const resumeAutoScroll = () => {
    if (window.innerWidth > 768) return;
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      // 自動スクロール再開時はスナップを無効にして滑らかに
      scrollWrap.style.scrollSnapType = "none";
      isPaused = false;
    }, 400);
  };

  // イベント登録
  scrollWrap.addEventListener("touchstart", pauseAutoScroll, { passive: true });
  scrollWrap.addEventListener("touchend", resumeAutoScroll, { passive: true });

  // 慣性スクロール中も「操作中」とみなし、停止するまで再開させない
  scrollWrap.addEventListener(
    "scroll",
    () => {
      if (isPaused) {
        resumeAutoScroll(); // スクロールが続いている間はタイマーを延長し続ける
      }
    },
    { passive: true },
  );

  // 初回開始
  autoScroll();
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
