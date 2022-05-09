let globalVariable1 = 12;

let globalVariable2 = function () {
    console.log ("inside the function", globalVariable1);
    let funVariable1 = "hello"
}

globalVariable2()

/*console.log (funvariable1);*/

const loadEvent = function (){
    const rootElement = document.getElementById("root")

    console.log(globalVariable1);
}

window.addEventListener("load", loadEvent)