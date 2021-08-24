function createMenu() {
    const ptag = document.createElement('p');
    ptag.textContent="PLEASE WORK!";

    return ptag;
}

export default function loadMenupage() {
    const main = document.querySelector("#content");
    main.appendChild(createMenu());
}