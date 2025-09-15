// === script.js ===

// Carousel Logic
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");

function showImage(index) {
  images.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}
showImage(currentIndex);

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// === Fetch Multiple Dog Images for Gallery ===
async function loadDogImages() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/12"); // fetch 12 images
  const data = await res.json();
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = ""; // clear previous

  data.message.forEach(imgUrl => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");
    div.innerHTML = `<img src="${imgUrl}" alt="Dog Image">`;
    gallery.appendChild(div);
  });
}
loadDogImages();

// === Contact Form Handling ===
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent 🐶❤️");
  e.target.reset();
});

// === Dark/Light Mode Toggle ===
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent =
    document.body.classList.contains("light-mode") ? "🌙 Dark Mode" : "☀️ Light Mode";
});
