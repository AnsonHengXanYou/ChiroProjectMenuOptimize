console.log("JS is running");

// Select all elements with the "reveal" class
const reveals = document.querySelectorAll('.reveal');

/**
 * Function to reveal or hide elements based on viewport
 */
function revealOnScroll() {
  reveals.forEach(reveal => {
    const rect = reveal.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      // Element is in viewport → show it
      reveal.classList.add('active');
      reveal.classList.remove('hide');
    } else {
      // Element is out of viewport → hide it
      reveal.classList.remove('active');
      reveal.classList.add('hide');
    }
  });
}

// Optimize scroll events using requestAnimationFrame
let ticking = false;
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      revealOnScroll();
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', revealOnScroll); // 页面加载时触发


// Event listeners
window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  const percentage = document.querySelector(".loading-percentage");

  let progress = 0;

  // 模拟加载进度 0 → 100
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 5) + 1; // 每次增加 1~5
    if (progress > 100) progress = 100;
    percentage.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      // 渐隐
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 800);

      // 页面 reveal 动画
      if (typeof revealOnScroll === "function") revealOnScroll();
    }
  }, 50); // 每50ms更新一次
});

/*菜单*/
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');      // 菜单下拉 / 收起
    hamburger.classList.toggle('active');    // 汉堡旋转成 X
});

