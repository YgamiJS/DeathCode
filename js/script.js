"use strict";
 /*let value = document.querySelector("textarea");
value.onkeydown = function(event){
        if(event.code == "Tab"){
            value.value = value.value += "    ";
            event.preventDefault();
        }
    });*/
function func(event){
    
    if(document.getElementById("Lines")){
        document.getElementById("Lines").remove();
    }
    let header = document.querySelector("header");
    var rows = document.querySelector('textarea').value.split("\n").length--;
    div_insert.insertAdjacentHTML("afterbegin" , `<div id="Lines">Строк: ${rows}</div>`);
    let value = document.querySelector("textarea");
    try{
        eval(value.value);
        header.style.backgroundColor = "#238636";
        setTimeout( () => header.style.backgroundColor = "" , 1000);
    }catch(error){
        setTimeout( () => alert(error) , 1000);
        header.style.backgroundColor = "#b81710";
        setTimeout( () => header.style.backgroundColor = "" , 1000);
    }
}
