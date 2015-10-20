var React = require('react');
var ReactDOM = require('react-dom');

var CookerPower = require('./CookerPower');

var CookerPowerRow = React.createClass({
  render: function() {
    return (
      <div className="buttons">
        <CookerPower cooker='top-left-power' />
        <CookerPower cooker='bottom-left-power' />
        <CookerPower cooker='top-right-power' />
        <CookerPower cooker='bottom-left-power' />
      </div>
    );
  }
});

ReactDOM.render(
    <CookerPowerRow />,
    document.getElementById('cooker-power-row')
);
