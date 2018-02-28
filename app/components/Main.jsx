var React = require('react');
var Nav = require('Nav');
// import Background from 'img/memphis-colorful.png';
// var Background = require('Background');

// var imgUrl = '../../img/memphis-colorful.png';

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//         <h2>Main component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
      {/*<img src={ Background }/>*/}
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
