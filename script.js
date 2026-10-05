// =========================
// Jainam Mehta Portfolio JS
// =========================

// Automatically update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Close mobile navbar after clicking a navigation link
document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    const navbar = document.querySelector(".navbar-collapse");

    if (navbar.classList.contains("show")) {
      const collapse = bootstrap.Collapse.getInstance(navbar);
      if (collapse) {
        collapse.hide();
      }
    }
  });
});

// Simple scroll effect for navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(7, 10, 17, 0.97)";
  } else {
    navbar.style.background = "rgba(11, 15, 25, 0.92)";
  }
});
