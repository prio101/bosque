defmodule Bosque.WeatherUpdate do
  def weather_by_city(city_name) do
    ExOwm.get_current_weather([%{ city: city_name }])
  end
end
