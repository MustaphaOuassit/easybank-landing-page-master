const navToggle = (e) => {
    const icons = e.querySelectorAll("img");
    const list = e.parentElement.querySelector("ul");

    icons[0].classList.toggle("display");
    icons[1].classList.toggle("display-toggle");
    list.classList.toggle("display-list");
};