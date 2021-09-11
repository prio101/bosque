defmodule Bosque.WeatherUpdateTest do
  
  use ExUnit.Case, async: true
  
  import Bosque.WeatherUpdate
  

  test 'it should get the current weather by city name' do
    city_name = "Dhaka"

    assert weather_by_city(city_name)[:ok]["name"] == city_name
  end
end