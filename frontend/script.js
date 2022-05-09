let globalVariable1 = 12;

let globalVariable2 = function () {
    console.log ("inside the function", globalVariable1);
    
    let funVariable1 = "hello"
    
    let funVariable2 = function () {
        console.log("funVariable2 belseje");
        console.log(globalVariable1);
        console.log(funVariable1);

        let funInFunVariable1 = true;
        console.log(funInFunVariable1);

        
        let funInFunVariable2 = function() {
            console.log(funInFunVariable1);

        }
        
        funInFunVariable2();
    }
    
    funVariable2();

    console.log (funVariable1);

    if(funVariable1 === "hello"){
        var blockVariable1 = "Bye"
    }else{
        /*console.log(blockVariable1);*/
    }

    console.log(blockVariable1);
}

globalVariable2()

/*console.log (funvariable1);*/

var varVariable = 1;


let varVariable1 = 2;
console.log(varVariable1);

let varVariable2;
console.log(varVariable2);

const constVariable1 = "ciao";
//constVariable1 = "hello"
console.log(constVariable1);

const constObj1 = {
};

//constObj1.key = "value"
//constObj1 = {key: "value"};
console.log(constObj1);

const globalVariable3 = function (parameter1, parameter2, parameter3) {
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3);
    console.log(parameter3());
}

const globalVariable4 = "apple"

const globalVariable5 = function () {
    return "pear"
}

const globalVariable6 = function () {
    return "shoes"
}

globalVariable3 (globalVariable5(), globalVariable4, globalVariable6);



const loadEvent = function (){
    const rootElement = document.getElementById("root")
    console.log(rootElement);
    //console.log(globalVariable1);
}

window.addEventListener("load", loadEvent)