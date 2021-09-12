import React from "react";
import WeatherInfo from "../src/Components/WeatherInfo";

interface DashboardProps {
  title: String;

}

const DashBoard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const title = "Bosque";
  return(
    <>
      <div className="flex 
                      flex-col 
                      flex-1 
                      min-h-screen">
        <div className="m-2 flex 
                        flex-1 
                        text-2xl 
                        text-purple-400
                        font-bold
                         
                        justify-start">
           {title} Dashboard
        </div>
        <WeatherInfo cityName=""/>
      </div>
    </>
  )

}

export default DashBoard;