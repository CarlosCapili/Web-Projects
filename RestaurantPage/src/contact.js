function createContactpage() {
    const mainDiv = document.createElement("div");


    return mainDiv;
}

export default function loadContactpage() {
    const main = document.querySelector("#tabSpace");
    main.textContent = "";
    main.appendChild(createContactpage());
}