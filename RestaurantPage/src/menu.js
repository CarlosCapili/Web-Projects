function createMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "about");
    menuDiv.setAttribute("id", "menuStyles");

    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Moonlit Seasons";
    menuTitle.setAttribute("class", "menuTitle");

    // Food choices
    const menuChoice = document.createElement("div");
    menuChoice.setAttribute("class", "two-columns");

    //Starters menu
    const starterDiv = document.createElement("div");
    starterDiv.classList.add("columns");
    const starters = document.createElement("h4");
    starters.textContent = "STARTERS";

    starterDiv.appendChild(starters);
    starterDiv.appendChild(
        createMenuItem(
            "STEAMED MAINE MUSSELS",
            "sausage, fennel, preserved lemon"
        )
    );
    starterDiv.appendChild(
        createMenuItem(
            "MARINATED LAMD SKEWER",
            "grilled cucumber tzatziki, whole wheat pita"
        )
    );

    starterDiv.appendChild(
        createMenuItem(
            "LEMON CHICKEN SOUP",
            "volo olive, oregano, francese croutons"
        )
    );

    //Main course menu
    const mainCourseDiv = document.createElement("div");
    mainCourseDiv.classList.add("columns");
    const mainCourse = document.createElement("h4");
    mainCourse.textContent = "PLATES";

    mainCourseDiv.appendChild(mainCourse);
    mainCourseDiv.appendChild(
        createMenuItem(
            "SEARED SALMON",
            "sunchokes, eggplant relish, rotisserie drippings"
        )
    );
    mainCourseDiv.appendChild(
        createMenuItem(
            "PORK SAUSAGE",
            "grilled apple, basil, house beer mustard"
        )
    );
    mainCourseDiv.appendChild(
        createMenuItem(
            "BUTCHER'S STEAK",
            "whole roasted garlic, anchovy butter"
        )
    );

    menuChoice.appendChild(starterDiv);
    menuChoice.appendChild(mainCourseDiv);

    menuDiv.appendChild(menuTitle);
    menuDiv.appendChild(menuChoice);

    return menuDiv;
}

function createMenuItem(name, desc) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");

    const itemName = document.createElement("h5");
    itemName.classList.add("itemName");
    itemName.textContent = name;

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("itemDesc");
    itemDesc.textContent = desc;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDesc);

    return menuItem;
}

export default function loadMenupage() {
    const main = document.querySelector("#tabSpace");
    main.textContent = "";
    main.appendChild(createMenu());
}