// // script.js — Heart of Caterers Website
// 🔨🤖🔧 Created with love and buttercream 💛

// ===== Scroll Fade-In Animation =====
const fadeEls = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeEls.forEach((el) => {
  appearOnScroll.observe(el);
});

// ===== Mobile Navbar Toggle =====
const menuBtn = document.createElement("div");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = "☰";
document.querySelector("header").prepend(menuBtn);

const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Close nav when a link is clicked (mobile UX)
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// ===== Back To Top Button =====
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.classList.add("back-to-top");
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===== Contact Form Popup (no backend) =====
const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = "Thank you! We'll contact you soon. 💌";
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add("show");
    }, 50);

    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 300);
    }, 3000);

    contactForm.reset();
  });
}
// ===== Sliding Info Section =====
const slides = document.querySelectorAll("#info-slider .slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
  setInterval(showNextSlide, 4000); // Change slide every 4 seconds
}
