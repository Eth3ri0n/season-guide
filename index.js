// Déclaration d'objet
const Menu_Items = {
  Logo_Light_Theme: "./src/img/logo-l.PNG",
  Logo_Dark_Theme: "./src/img/logo-d.PNG",
  Home: "Accueil",
  FL: "Fruits & Légumes",
  About: "À propos",
  Mentions: "Mentions Légales",
};

// Compsant Menu
const Menu_Component = `
      <a href="./index.html"><img src="${Menu_Items.Logo_Light_Theme}" alt="Logo" /></a>
      <nav class="navbar">
        <ul class="menu">
          <li class="menu-list">
            <a href="./index.html"
              ><img src="./src/img/home.PNG" alt="Home icon" class="icon-size"/><span>${Menu_Items.Home}</span></a
            >
          </li>
          <li class="menu-list">
            <a href="./fruits_legumes.html"
              ><img src="./src/img/fl.PNG" alt="Fruits and Vegetable" class="icon-size"/><span>${Menu_Items.FL}</span></a
            >
          </li>
          <li class="menu-list">
            <a href="./about.html"
              ><img src="./src/img/about.PNG" alt="About icon" class="icon-size"/><span
                >${Menu_Items.About}</span
              ></a
            >
          </li>
        </ul>
      </nav>
      <div class="burger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <i class="btn-theme fa fa-sun"></i>
`;

// Injection dans le container de class="nav"
const Nav_Menu = document.querySelector(".nav");
Nav_Menu.insertAdjacentHTML("afterbegin", Menu_Component);

/** Navbar Burger menu */
let burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});

// Theme Mode
const Theme_Mode = document.querySelector(".btn-theme");
Theme_Mode.addEventListener("click", () => {
  const body = document.body;

  if (
    body.classList.contains("dark") &&
    Theme_Mode.classList.contains("fa-moon")
  ) {
    body.classList.add("light");
    Theme_Mode.classList.add("fa-sun");
    body.classList.remove("dark");
    Theme_Mode.classList.remove("fa-moon");
  } else if (
    body.classList.contains("light") &&
    Theme_Mode.classList.contains("fa-sun")
  ) {
    body.classList.add("dark");
    Theme_Mode.classList.add("fa-moon");
    body.classList.remove("light");
    Theme_Mode.classList.remove("fa-sun");
  }
});

// Listes des fruits & légumes
function SetupTabs() {
  document.querySelectorAll(".tabs_button").forEach((button) => {
    button.addEventListener("click", () => {
      const SideBar = button.parentElement;
      const TabsContainer = SideBar.parentElement;
      const TabNumber = button.dataset.forTab;
      const TabToActivate = TabsContainer.querySelector(
        `.tabs_content[data-tab="${TabNumber}"]`
      );

      SideBar.querySelectorAll(".tabs_button").forEach((button) => {
        button.classList.remove("tabs_button--active");
      });

      TabsContainer.querySelectorAll(".tabs_content").forEach((tab) => {
        tab.classList.remove("tabs_content--active");
      });

      button.classList.add("tabs_button--active");
      TabToActivate.classList.add("tabs_content--active");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  SetupTabs();

  document.querySelectorAll(".tabs").forEach((TabsContainer) => {
    TabsContainer.querySelector(".tabs_sidebar .tabs_button").click();
  });
});

// Composant Footer
const Footer_Component = `
  <div class="footer-info">
    <img src="${Menu_Items.Logo_Light_Theme}" alt="logo" />
    <ul>
      <li><a href="./mentions-legales.html">Mentions légales</a></li>
    </ul>
  </div>
  <span class="copy">&copy; Season Guide, all right reseved | 2022</span>
`;

// Injection dans le container de class="nav"
const Footer_Menu = document.querySelector("#footer");
Footer_Menu.insertAdjacentHTML("beforeend", Footer_Component);
