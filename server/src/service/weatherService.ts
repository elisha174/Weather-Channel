import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
  city: string;
  state: string;
  countryCode: number;
}

// TODO: Define a class for the Weather object
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// TODO: Complete the WeatherService class
class WeatherService implements Coordinates {
  // TODO: Define the baseURL, API key, and city name properties
  const BASE_URL = process.env.API_BASE_URL;
  const KEY = process.env.WEATHER_API_KEY; 
  const cityName; 
  
  // TODO: Create fetchLocationData method
   private async fetchLocationData(query: string) {
    fetch(this.BASE_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (const user of data) {
        // ? Separating the logic of creating a user button into a function allows for better readability and reusability
        const repoButton = createUserButton(user.login, user.html_url);

        // ? Appending the dynamically generated html to the div associated with the id="users"
        usersContainer.appendChild(repoButton);
      }
    });
   }

  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
