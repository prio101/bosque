import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

export interface WeatherType {
  cityName: string;
}

const WeatherInfo: React.FC<WeatherType> = (props: WeatherType) =>{
  
  const [cityName, setCityName] = useState("");

  useEffect(() => {

  })

  return(
    <>
    </>
  )
}

export default WeatherInfo;