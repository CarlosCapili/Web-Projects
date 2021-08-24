function createHomepage() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'about');

    const title = document.createElement('h1');
    title.setAttribute('id', 'name');
    title.textContent = 'Moonlit Seasons';

    const slogan = document.createElement('h3');
    slogan.textContent = 'High Price, Expensive Taste';

    const reserveBtn = document.createElement('button');
    reserveBtn.setAttribute('id', 'reserve');
    reserveBtn.textContent = 'Reserve Now';

    mainDiv.appendChild(title);
    mainDiv.appendChild(slogan);
    mainDiv.appendChild(reserveBtn);

    return mainDiv;
}

export default function loadHomepage() {
    const main = document.querySelector("#content");
    main.appendChild(createHomepage());
}
