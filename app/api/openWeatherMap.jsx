var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4753e5fdc6f2d3bdfa3c877c702eb10a&units=metric';

// api
// 4753e5fdc6f2d3bdfa3c877c702eb10a

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      // throw new Error(res.data.message);
      throw new Error('Unable to fetch weather');
    });
  }
}
