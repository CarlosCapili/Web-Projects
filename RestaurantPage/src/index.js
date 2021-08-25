import loadMainpage from './main';
import loadHomepage from './home';
import loadMenupage from './menu';
import loadCareerspage from './careers';

loadMainpage();
loadHomepage(); //default load

const tabBtn = document.querySelectorAll(".tabs");
tabBtn.forEach(e => {
    e.addEventListener("click", tabClicked);
});

function tabClicked(e) {
    let tab = e.target.id;
    switch(tab) {
        case "menu":
            console.log(tab);
            loadMenupage();
            break;
        case "contact":
            console.log(tab);
            break;
        case "careers":
            loadCareerspage();
            console.log(tab);
            break;
        default:
            console.log(tab);
            loadHomepage();
            break;
    }
}



