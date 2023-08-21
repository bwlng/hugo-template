const mastheadMenu = document.querySelector("[data-masthead-menu]");

const mastheadMenuToggle = mastheadMenu?.querySelector("[data-masthead-menu-toggle]");

const onMastheadMenuToggleClick = (event) => {
    event.preventDefault();

    const target = event.currentTarget;
    const expanded = target.getAttribute("aria-expanded") === "true" || false;

    target.setAttribute("aria-expanded", !expanded);
}

mastheadMenuToggle?.addEventListener("click", onMastheadMenuToggleClick);

const mastheadMenuClose = mastheadMenu?.querySelector("[data-masthead-menu-close]");

const onMastheadMenuCloseClick = (event) => {
    event.preventDefault();

    const target = mastheadMenuToggle;

    target.setAttribute("aria-expanded", false);
}

mastheadMenuClose?.addEventListener("click", onMastheadMenuCloseClick);

let prevWindowWidth = window.innerWidth;

function setAriaExpanded() {
  // If the previous window width was greater than or equal to 768, set aria-expanded to false so that the menu is collapsed
  if (window.innerWidth < 768) {
    if (prevWindowWidth >= 768) {
      mastheadMenuToggle?.setAttribute('aria-expanded', 'false');
    }
  } else {
    // Otherwise, set aria-expanded to true so that the menu is expanded
    mastheadMenuToggle?.setAttribute('aria-expanded', 'true');
  }
  // Update the previous window width so the next time this function is called, we can compare the previous width to the current width
  prevWindowWidth = window.innerWidth;
}

// Set the initial value of aria-expanded
setAriaExpanded();

// Update the value of aria-expanded when the window is resized
window.addEventListener('resize', setAriaExpanded);