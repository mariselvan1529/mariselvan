angular.module('weatherApp', [])
.controller('WeatherController', function($http) {
    var self = this;
    var apiKey = 'YOUR_API_KEY';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    
    // Default location
    self.location = 'Coimbatore';
    
    // Fetch weather data
    self.fetchWeather = function() {
        var config = {
            params: {
                q: self.location,
                appid: apiKey,
                units: 'metric'
            }
        };

        $http.get(apiUrl, config)
        .then(function(response) {
            var data = response.data;
            self.temperature = data.main.temp;
            self.description = data.weather[0].description;
            self.iconUrl = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        }, function(error) {
            console.error('Error fetching weather data:', error);
        });
    };

    // Initial fetch
    self.fetchWeather();
});
