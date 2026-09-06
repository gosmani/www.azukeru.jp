const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");

function closeMenu() {
  menuButton.classList.remove("is-open");
  globalNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "メニューを開く");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("is-open");

  globalNav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く"
  );
});

/* メニュー内リンクを押したら閉じる */
globalNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

/* Escキーでも閉じられる */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
