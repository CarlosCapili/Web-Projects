function createNav() {
    const divBar = document.createElement('div');
    divBar.classList.add('bar');

    const navDiv = document.createElement('div');
    navDiv.setAttribute('id', 'nav-bar');
    const navTag = document.createElement('nav');
    
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const careersBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
  
    homeBtn.textContent = 'HOME';
    menuBtn.textContent = 'MENU';
    careersBtn.textContent = 'CAREERS';
    contactBtn.textContent = 'CONTACT';

    homeBtn.setAttribute("id", "home");
    menuBtn.setAttribute("id", "menu");
    careersBtn.setAttribute("id", "careers");
    contactBtn.setAttribute("id", "contact");
    homeBtn.setAttribute("class", "tabs");
    menuBtn.setAttribute("class", "tabs");
    careersBtn.setAttribute("class", "tabs");
    contactBtn.setAttribute("class", "tabs");

    navTag.appendChild(homeBtn);
    navTag.appendChild(menuBtn);
    navTag.appendChild(careersBtn);
    navTag.appendChild(contactBtn);
    navDiv.appendChild(navTag);
    divBar.appendChild(navDiv)

    return divBar;
}

function createFooter() {
    const footerTag = document.createElement('footer');
    footerTag.classList.add('bar');

    const pTag = document.createElement('p');
    pTag.textContent = 'Founded 1957 in Toronto';

    footerTag.appendChild(pTag);

    return footerTag;
}

export default function loadMainpage() {
    const main = document.querySelector("#content");
    main.appendChild(createNav());
    main.appendChild(createFooter());
}
