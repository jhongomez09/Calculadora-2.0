function getResult() {
    const result = document.getElementById("result").innerHTML 
    return result 
}

function setResult(value){
    document.getElementById("result").innerHTML = value 
    }



function add(key){
    let result =  getResult()

    if (result != "0" || isNaN(key) ) {
        setResult(result+ key) 
    }
    else {
        setResult(key)
    }
}

function add1(key1){
    let result =  getResult()

    if (result != "0" || isNaN(key1) ) {
        setResult(result+ key1) 
        console.log ("no cumple")
    }
    else {
        setResult(key1)
    }
   }

function calculate() {

    let result

    console.log(eval(getResult))
    

    if (eval(getResult()) === Infinity || eval(getResult()) === -Infinity){
     
          swal ({
            title: "¡Error!",
            text: "No puede dividir un numero en 0",
            icon: "error", 
        });
         result = "0"
        
        } else {
            let result = eval(getResult())
            setResult(result)
        }

    }



function clean(){
    setResult(0)
}

for(let contador = 0; contador <= 100; contador++){
    setResult()
}





