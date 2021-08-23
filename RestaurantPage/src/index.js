import  { createNav, createTitleBar, createFooter } from './home';

const content = document.querySelector('#content');
content.appendChild(createNav());
content.appendChild(createTitleBar());
content.appendChild(createFooter());