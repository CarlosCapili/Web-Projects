function createContactpage() {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("about");

    const contact = document.createElement("h2");
    contact.textContent = "Contact Us";
    contact.setAttribute("id", "contactUs");
    contact.classList.add("menuTitle");

    const number = document.createElement("p");
    number.textContent = "123-456-7890";
    number.classList.add("role");
    const email = document.createElement("p");
    email.textContent = "moonlitseasons@gmail.com";
    email.classList.add("role");

    mainDiv.appendChild(contact);
    mainDiv.appendChild(number);
    mainDiv.appendChild(email);

    return mainDiv;
}

export default function loadContactpage() {
    const main = document.querySelector("#tabSpace");
    main.textContent = "";
    main.appendChild(createContactpage());
}