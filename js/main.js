// global object
MOMB = {};

// color profile
MOMB.themeColors = {
  light: {
    primary: "#002868",
    primary_light: "#586585",
    secondary: "#547C45",
    secondary_light: "#CFDACB",
    text: "#131D1E",
    background: "#FFFFFF"
  },
  dark: {
    primary: "#527DC1",
    primary_light: "#C0CAE3",
    secondary: "#547C45",
    secondary_light: "#4E5A49",
    text: "#FFFFFF",
    background: "#2C2C2C"
  }
}

// toggle theme
MOMB.toggleTheme = () => {
  const trigger = document.getElementById('themeToggler');
  const root = document.documentElement;
  const variables = getComputedStyle(root);
  const theme = MOMB.themeColors.light;
  let isLight = true;


  // if theme toggler is null or undefined
  if (!trigger) return;

  function setTheme (theme) {
    for (let property in theme) {
      const color = theme[property];
      root.style.setProperty(`--${property}`, color);
    }
  }
  
  function toggle() {
    if (isLight) {
      isLight = false;
      setTheme(MOMB.themeColors.dark);
      return;
    }

    isLight = true;
    setTheme(MOMB.themeColors.light);
  }

  trigger.addEventListener('click', toggle);
};

// document on load
document.addEventListener('DOMContentLoaded', function() {
  // theme toggler
  MOMB.toggleTheme();
});

// document on resize
document.addEventListener('resize', function() {

});

// document on scroll
document.addEventListener('scroll', function() {

});