const menuButtonComponent = function() {
    return `<button id="menu-btn"></button>`
}

const loadEvent = function (parameter1){
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent())

    const menuButtonElement = document.getElementById ("menu-btn")

    menuButtonElement.addEventListener("click", function (event) {
        event.target.classList.toggle("clicked")
    })
}

window.addEventListener("load", loadEvent)