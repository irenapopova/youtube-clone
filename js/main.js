showUser.onclick = function () {
  console.log("hey")
  document.getElementById("userSettings");
  if (userSettings.classList.contains("show") == false) {
    userSettings.classList.add("show");
  } else {
    userSettings.classList.remove("show");
  }
};

/*dark mode */
darkMode.onclick = function () {
  console.log("open dark mode box");
  document.getElementById("darkModeBox");
  if (darkModeBox.classList.contains("show-flex") == false) {
    darkModeBox.classList.add("show-flex");
  } else {
    darkModeBox.classList.remove("show-flex");
  }
  if (userSettings.classList.contains("show") == true) {
    userSettings.classList.remove("show");
  }

};


slider.onclick = function () {
  console.log("yo dark mode")
  const body = document.body;
  if (body.classList.contains("dark-mode") == false) {
    body.classList.add("dark-mode");
    videoHolder.classList.add("dark-mode");
    videoNav.classList.add("dark-mode");
    videoInfo.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    videoHolder.classList.remove("dark-mode");
    videoNav.classList.remove("dark-mode");
    videoInfo.classList.remove("dark-mode");
  }
};