//creat function to handel numer btn
// creat function to handel opratore btns
// display numer value in the input
//handel prev value
//handel opertion
//handel next value
//creat equal function
//handel total numer
// handel new claculation


var screen = document.getElementById("screen");

var operType = '';
var values = {prev: null, new: null, total: null}
var isLastBtnNumber = false;
function getNumbers(num){
    if(isLastBtnNumber){
        var result;
if(values.new){
    result = values.new + '' + num;
    values.new = result;
    screen.value = result
}else{
    result = values.prev + '' + num;
    values.prev = result;
    screen.value = result;
}
    }else{
        screen.value = num;
        if(values.prev){
         values.new = num;
        }else{
         values.prev = num;
        }
         isLastBtnNumber = true;
    }
   
}

function getOperators(oper){
    console.log(values)
    operType = oper;
     isLastBtnNumber = false;
}

function calculate(){
    if(!values.new){
        return;
    }
    if(values.new && values.prev && operType){
        if(operType === "+"){
            var newValue = Number(values.prev)  + Number(values.new);
            screen.value = newValue;
            values.prev = newValue;
        } 
        if(operType === "-"){
            // screen.value = values.prev - values.new;
            var newValue = Number(values.prev)- Number(values.new);
            screen.value = newValue;
            values.prev = newValue;
        }
        if(operType === "*"){
            // screen.value = values.prev * values.new;
            var newValue = Number(values.prev) * Number(values.new);
            screen.value = newValue;
            values.prev = newValue;
        }
        if(operType === "/"){
            // screen.value = values.prev / values.new;
            var newValue = Number(values.prev) / Number(values.new);
            screen.value = newValue;
            values.prev = newValue;
        }
    }
     isLastBtnNumber = false;
}

