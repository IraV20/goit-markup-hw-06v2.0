document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".site-nav .link");
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(link => link.classList.remove("current"));
  
        link.classList.add("current");
      });
    });
  });
  