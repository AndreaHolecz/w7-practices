const menuButtonComponent = function() {
    return `<button id="menu-btn"></button>`
}

const beerSectionComponent = function(id, title, sub, text) {
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

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent())

    const menuButtonElement = document.getElementById ("menu-btn")

    menuButtonElement.addEventListener("click", function (event) {

        //event.currentTarget.closest("#root").classList.toggle("menu-opened");
    })
}

window.addEventListener("load", loadEvent)