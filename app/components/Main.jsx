var React = require('react');
var Nav = require('Nav');
// var Background = require('Background');
// var imgUrl = '/memphis-colorful.png';
// import Background from "../../public/img/memphis-colorful.png";

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row everything">

        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
