const menuButtonComponent = function() {
    return `<button id="menu-btn"></button>`
}

const beerSectionComponent = function(title, sub, text, id) {
    return `
        <section id="${id}">
            <h1 class="beerName">${title}</h1>
            <h2 class="beerCompany">${sub}</h2>
            <h3 class="beerType">${text}</h3>
        </section>
    `
}

const beerAnchorComponent = function (id, title) {
    return `
        <a href="#${id}">${title}</a>
    `
}

const menuButtonClickEvent = function (event) {

    event.currentTarget.closest("#root").classList.toggle("menu-opened")
}


const loadEvent = function (){
    
    /*console.log(typeOfBeerSection);
    console.log(typeOfBeerSection());

    (function () {
        console.log("blablabla");
    })();
    */

    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());

    const menuButtonElement = document.getElementById ("menu-btn");

    menuButtonElement.addEventListener("click", menuButtonClickEvent);

    let beerSections = "";

    for (const beer of beers.cards) {
        beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
    }

    //console.log(beerSections);

    rootElement.insertAdjacentHTML("beforeend", beerSections);
}

window.addEventListener("load", loadEvent)