"use strict";

function func(){
    
    if(document.getElementById("Lines")){
        document.getElementById("Lines").remove();
    }
    var rows = document.querySelector('textarea').value.split("\n").length;
    div_insert.insertAdjacentHTML("afterbegin" , `<div id="Lines">Строк: ${rows}</div>`);
    let value = document.querySelector("textarea").value;

    try{
        eval(value);
    }catch(error){
        alert(error);
    }
}
