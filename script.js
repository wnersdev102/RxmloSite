// Scroll animasyon
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// 3 saniye bekleyerek yönlendir
function delayedRedirect(url) {
  const text = document.getElementById("redirectText");
  if (text) text.style.display = "block";
  setTimeout(() => {
    window.location.href = url;
  }, 3000);
}
