import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

export interface WeatherType {
  cityName: string;
}




const WeatherInfo: React.FC<WeatherType> = (props: WeatherType) =>{
  
  const [cityName, setCityName] = useState("");

  useEffect(() => {

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setCityName(e.target.value); 
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Clicked");
  }

  return(
    <>
      <div className="flex flex-col flex-1 items-center  ">
        <input className="p-2 m-2 border border-gray-500" type="text" value={cityName} placeholder="City Name" onChange={handleChange} />
        {console.log(cityName)}
        <button type="submit" onClick={handleSubmit} className="p-2 bg-purple-400 text-white border-white rounded-md font-bold">Get Info</button>
      </div>
    </>
  )
}

export default WeatherInfo;
