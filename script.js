const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".hero-dots i")];
let currentSlide = 0;

function showSlide(index){
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

if(slides.length > 1){
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5200);
}

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const phone = "919946914766";
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("phone").value.trim();
  const ci = document.getElementById("checkin").value;
  const co = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value.trim();
  const interest = document.getElementById("interest").value;
  const message = document.getElementById("message").value.trim();

  const text = [
    "Hello Adhi Villa!",
    "",
    `Name: ${name}`,
    `WhatsApp/Phone: ${contact}`,
    `Check-in: ${ci || "Not specified"}`,
    `Check-out: ${co || "Not specified"}`,
    `Guests: ${guests || "Not specified"}`,
    `Interested in: ${interest}`,
    `Message: ${message || "—"}`,
    "",
    "I'd like to know availability and details."
  ].join("\n");

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
});

// Accessible mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.getElementById("primary-navigation");
if (menuToggle && primaryNavigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNavigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  primaryNavigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      primaryNavigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Keep checkout on or after check-in when dates are selected.
const checkinField = document.getElementById("checkin");
const checkoutField = document.getElementById("checkout");
if (checkinField && checkoutField) {
  checkinField.addEventListener("change", () => {
    checkoutField.min = checkinField.value || "";
    if (checkoutField.value && checkinField.value && checkoutField.value < checkinField.value) {
      checkoutField.value = "";
    }
  });
}
