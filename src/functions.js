function hello(name){
    return(`hello ${name}`);
}

function feet2acre(feet){
    let result = feet / 43560;
    return(`${feet} feet is equivalent to ${result} acres.`);
}

//CPM stands for cut per minute
function lawn_calc(width, length, cpm){
    let result = (width * length) / cpm;
    return(`A lawn with a width of ${width}m and a length of ${feet}m would take ${result} minutes to mow.`);
}

function air_quality(aqi){
    let result = "";

    if(aqi >= 0 && aqi <= 50){
        result = "Good";
    }else if(aqi >= 51 && aqi <= 100){
        result = "Moderate";
    }else if(aqi >= 101 && aqi <= 150){
        result = "Unhealthy for Sensitive Groups";
    }else if(aqi >= 151 && aqi <= 200){
        result = "Unhealthy";
    }else if(aqi >= 201 && aqi <= 300){
        result = "Very Unhealthy";
    }else if(aqi > 300){
        result = "Hazardous";
    }

    return(`hello ${result}`);
}

function yee_ha(num){
    let result = "";

    if(num % 3 == 0 && num % 7 != 0) result = "Yee";
    if(num % 3 != 0 && num % 7 == 0) result = "Ha";
    if(num % 3 == 0 && num % 7 == 0) result = "Yee Ha";
    if(num % 3 != 0 && num % 7 != 0) result = "Nada";

    return(`${result}`);
}

function slope_calc(rise, run){
    let result = 0;
    let sign = "";
    result = rise/run;
    
    if(result > 0){
        sign = "positive";
    }else{
        sign = "negative";
    }

    return(`With a rise of ${rise} and a run of ${run}, the line has a slope of ${sign} ${result}`);
}


export {hello, feet2acre, lawn_calc, air_quality, yee_ha, slope_calc}
