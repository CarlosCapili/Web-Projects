import loadMainpage from './main';
import loadHomepage from './home';

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
            break;
        case "contact":
            console.log(tab);
            break;
        case "careers":
            console.log(tab);
            break;
        default:
            console.log(tab);
            loadHomepage();
            break;
    }
}



