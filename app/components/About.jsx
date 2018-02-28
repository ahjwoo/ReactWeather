var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Using <a href="https://openweathermap.org/api" target="_blank">OpenWeatherMap's</a> API, this simple <a href="https://reactjs.org" target="_blank">React</a> App shows the weather once a city name is inputted! This was built as a practice project using React along with <a href="https://foundation.zurb.com" target="_blank">Foundation</a> for styling.</p>
    </div>

  )
};

module.exports = About;
