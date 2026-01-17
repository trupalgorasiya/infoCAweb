/* ================= SLIDER ================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

/* Safety check (important) */
if (slides.length && dots.length) {
  showSlide(index);

  nextBtn?.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prevBtn?.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4000);
}

/* ================= MOBILE MENU ================= */

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (!menuToggle || !menu) return;

  /* Main mobile menu toggle */
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
     menuToggle.classList.toggle("active");
  });

  /* Mobile submenu toggle */
  document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    }
  });
});

  /* Close menu when clicking outside (optional but pro) */
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 900 &&
      !menu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      menu.classList.remove("active");
      document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
    }
  });

});

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});
