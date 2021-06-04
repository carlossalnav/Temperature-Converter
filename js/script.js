$(document).ready(function(){
    // console.log("todo listo")

    const callCalculator = (temperature,magnitude) =>{
        if (magnitude == "celsius" ) {
            celsius(temperature);
        }
        else if (magnitude == "farenheit" ) {
            farenheit(temperature);
        }
        else if (magnitude == "kelvin") {
            kelvin(temperature);
        }
    }

    const celsius = (temperature) =>{
        let c = parseFloat(temperature);
        let f = parseFloat((c * (9/5)) + 32);
        let k = parseFloat(c + 273.15);
        farenheitInput.value = f.toFixed(4);
        kelvinInput.value = k.toFixed(4);
        // console.log("Conversion desde celsius hecha")
    }

    const farenheit = (temperature) =>{
        let f = parseFloat(temperature);
        let c = parseFloat((f - 32)*(5/9));
        let k = parseFloat((f - 32)*(5/9) + 273.15);
        celsiusInput.value = c.toFixed(4);
        kelvinInput.value = k.toFixed(4);
        // console.log("Conversion desde farenheit hecha")
    }

    const kelvin = (temperature) =>{
        let k = parseFloat(temperature);
        let c = parseFloat(k - 273.15);
        let f = parseFloat((k - 273.15)*(9/5)+32);
        celsiusInput.value = c.toFixed(4);
        farenheitInput.value = f.toFixed(4);
        // console.log("Conversion desde kelvin hecha")
    }

    const globalInput = document.getElementsByName("global-input");
    const celsiusInput = document.getElementById("celsius");
    const farenheitInput = document.getElementById("farenheit");
    const kelvinInput = document.getElementById("kelvin");

    celsiusInput.value = 0;
    farenheitInput.value = 32;
    kelvinInput.value = 273.15;

    globalInput.forEach(function(input){
        input.addEventListener("keyup",function(){
            // console.log("enter llamado")
            callCalculator(input.value,input.id)
        })
    })
});


