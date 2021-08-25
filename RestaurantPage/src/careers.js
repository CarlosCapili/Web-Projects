function createCareerspage() {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("about");

    const nowHiring = document.createElement("h2");
    nowHiring.textContent = "Now Hiring";
    nowHiring.classList.add("menuTitle");
    nowHiring.setAttribute("id", "hiring");

    //Roles
    const headChef = document.createElement("h4");
    headChef.textContent = "Head Chef";
    headChef.classList.add("role");
    const depChef = document.createElement("h4");
    depChef.textContent = "Deputy Chef";
    depChef.classList.add("role");
    const waiter = document.createElement("h4");
    waiter.textContent = "Waiter";
    waiter.classList.add("role");

    //Message
    const msg = document.createElement("p");
    msg.textContent = "Please send us your resume and we might just respond";

    mainDiv.appendChild(nowHiring);
    mainDiv.appendChild(headChef);
    mainDiv.appendChild(depChef);
    mainDiv.appendChild(waiter);
    mainDiv.appendChild(msg);

    return mainDiv;
}

export default function loadCareerspage() {
    const main = document.querySelector("#tabSpace");
    main.textContent = "";
    main.append(createCareerspage());
}