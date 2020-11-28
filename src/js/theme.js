
const changeThemeRef = document.querySelector("#theme-switch-toggle")
const bodyRef = document.querySelector("body")

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
changeThemeRef.addEventListener("change", changeTheme)

bodyRef.classList.add(Theme.LIGHT)

function changeTheme(event) {
    event.preventDefault();
    if (event.target.checked) {
        bodyRef.classList.add(Theme.DARK)
        const themeDark = event.target.checked;
        localStorage.setItem("current-theme", themeDark)
    }
    else if (event.target.checked === false) {
        bodyRef.classList.remove(Theme.DARK)
        const themeWhite = event.target.checked;
        localStorage.setItem("current-theme", themeWhite )
}
}

const savedTheme = localStorage.getItem("current-theme")

function savedCurrentTheme() {
   
    if (savedTheme === "true") {
        bodyRef.classList.add(Theme.DARK)  
        changeThemeRef.checked = "true";
    }
    else {
        bodyRef.classList.remove(Theme.DARK)
    }
}
savedCurrentTheme()