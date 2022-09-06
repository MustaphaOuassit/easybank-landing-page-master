const navToggle = (e) => {
    const icon = e.querySelector("img");
    const list = e.parentElement.querySelector("ul");
    
    if (icon.src == "http://localhost:5500/images/icon-hamburger.svg")
        icon.src = "http://localhost:5500/images/icon-close.svg"
    else
        icon.src = "http://localhost:5500/images/icon-hamburger.svg";

    list.classList.toggle("display");
};