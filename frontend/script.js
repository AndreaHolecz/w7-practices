const menuButtonComponent = function() {
    return `<button id="menu-btn"></button>`
}

const loadEvent = function (parameter1){
    const rootElement = document.getElementById("root");
    console.log(rootElement.parentElement);

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent())

    const menuButtonElement = document.getElementById ("menu-btn")

    menuButtonElement.addEventListener("click", function (event) {
        event.target.classList.toggle("clicked")
        //console.log(rootElement);
        //console.log(event.currentTarget.parentElement);
        //console.log(event.currentTarget.closest("#root"));
        event.currentTarget.closest("#root").classList.toggle("clicked");
    })
}

window.addEventListener("load", loadEvent)