let globalVariable1 = 12;

let globalVariable2 = function () {
    console.log ("inside the function", globalVariable1);

    let funVariable1 = "hello"

    let funVariable2 = function () {
        console.log("funVariable2 belseje");
    }
    
    funVariable2();
}

globalVariable2()

/*console.log (funvariable1);*/

const loadEvent = function (){
    const rootElement = document.getElementById("root")

    console.log(globalVariable1);
}

window.addEventListener("load", loadEvent)