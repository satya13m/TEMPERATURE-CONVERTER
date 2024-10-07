function convert(){
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);


    var converted;
    var resultUnit;

    switch(fromUnit){
        case 'C':
            if(toUnit === 'F'){
                converted = (temperature*9/5)+32;
                resultUnit = 'F';
            }else if(toUnit === 'K'){
                converted = temperature + 273.15;
                resultUnit = 'K';
            }else{
                converted = temperature ;
                resultUnit = 'C';
            }
            break;

            case 'F':
                if(toUnit === 'C'){
                    converted = (temperature-32)*5/9;
                    resultUnit = 'C';
                }else if(toUnit === 'K'){
                    converted = (temperature-32)*5/9 + 273.15;
                    resultUnit = 'K';
                }else{
                    converted = temperature ;
                    resultUnit = 'F';
                }
                break;


                case 'K':
                    if(toUnit === 'F'){
                        converted = (temperature*9/5)*32;
                        resultUnit = 'F';
                    }else if(toUnit === 'C'){
                        converted = (temperature - 273.15)*9/5 + 32;
                        resultUnit = 'C';
                    }else{
                        converted = temperature ;
                        resultUnit = 'K';
                    }
                    break;

    }
    document.getElementById('result').value = converted.toFixed(2) + ' ' + resultUnit;


}