document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  if (menuButton && mobileMenu && iconOpen && iconClose) {
    menuButton.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.toggle("hidden");
      iconOpen.classList.toggle("hidden");
      iconClose.classList.toggle("hidden");
      menuButton.setAttribute("aria-expanded", String(!isHidden));
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        iconOpen.classList.remove("hidden");
        iconClose.classList.add("hidden");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const header = document.querySelector(".seccion-menu");
  const menuInner = document.querySelector(".menu-inner");
  const menuLogo = document.querySelector(".menu-logo");
  const navContainer = document.querySelector(".nav-container");

  if (header && menuInner && menuLogo && navContainer) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("shadow-md");
        menuInner.classList.remove("md:flex-col", "md:justify-center", "md:gap-5", "md:py-6");
        menuInner.classList.add("md:flex-row", "md:justify-between", "md:py-3");
        menuLogo.classList.remove("md:h-18");
        menuLogo.classList.add("md:h-11");
        navContainer.classList.remove("w-full");
      } else {
        header.classList.remove("shadow-md");
        menuInner.classList.add("md:flex-col", "md:justify-center", "md:gap-5", "md:py-6");
        menuInner.classList.remove("md:flex-row", "md:justify-between", "md:py-3");
        menuLogo.classList.remove("md:h-11");
        menuLogo.classList.add("md:h-18");
        navContainer.classList.add("w-full");
      }
    });
  }
});
