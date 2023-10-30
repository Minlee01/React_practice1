import React, { useState } from "react";
import TemperatureInput from "./TempretureInput";

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit) {
    return ((fahrenheit -32) * 5) /9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) /5 + 32;
}

function tryConvert(tempreture, convert) {
    const input = parseFloat(tempreture);
    if(Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [tempreture, setTemperature] = useState("");
    const [scale, setScale] = useState("c");
    
    const handleCelsiusChange = (tempreture) => {
        setTemperature(tempreture);
        setScale("c");
    };

    const handleFahrenheitChange = (tempreture) => {
        setTemperature(tempreture);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(tempreture, toCelsius) : tempreture;
    const fahrenheit = 
        scale === "c" ? tryConvert(tempreture, toFahrenheit) : tempreture;

    return (
        <div>
            <TemperatureInput
                scale ="c"
                tempreture={celsius}
                onTemperatureChange ={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                tempreture={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator;