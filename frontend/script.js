let globalVariable1 = 12;

const loadEvent = function (){
    const rootElement = document.getElementById("root")
    console.log(globalVariable1);
}

window.addEventListener("load", loadEvent)