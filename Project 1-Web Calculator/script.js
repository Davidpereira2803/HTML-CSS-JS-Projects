var currresult=null;

function getResult(){
    currresult= document.getElementById("result").value;
    console.log(currresult);
    updateInput();
}

function updateResult(x){
    if(currresult!=null){
        currresult = currresult+x;
        console.log(currresult);
        updateInput();
    }else{
        currresult = x;
        console.log(currresult);
        updateInput();
    }

}

function compute(){
    currresult=eval(currresult);
    console.log(currresult);
    updateInput();
}

function updateInput(){
    document.getElementById("result").value=currresult;
}

function empty(){
    currresult=null;
    document.getElementById("result").value=currresult;
}