function createNav() {
    const divBar = document.createElement('div');
    divBar.classList.add('bar');

    const navDiv = document.createElement('div');
    navDiv.setAttribute('id', 'nav-bar');
    const navTag = document.createElement('nav');
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'HOME';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENU';
    const careersBtn = document.createElement('button');
    careersBtn.textContent = 'CAREERS';
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'CONTACT';

    navTag.appendChild(homeBtn);
    navTag.appendChild(menuBtn);
    navTag.appendChild(careersBtn);
    navTag.appendChild(contactBtn);
    navDiv.appendChild(navTag);
    divBar.appendChild(navDiv)

    return divBar;
}

function createTitleBar() {
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

function createFooter() {
    const footerTag = document.createElement('footer');
    footerTag.classList.add('bar');

    const pTag = document.createElement('p');
    pTag.textContent = 'Founded 1957 in Toronto';

    footerTag.appendChild(pTag);

    return footerTag;
}

export default function loadHomePage() {
    const main = document.querySelector("#content");
    main.appendChild(createNav());
    main.appendChild(createTitleBar());
    main.appendChild(createFooter());
}