var React = require('react');
var ReactDOM = require('react-dom');

var CookerPower = React.createClass({
    getInitialState: function() {
        return {powerLevel: '', isOn: false};
    },
    handleIncrease: function(event) {
        var newPower = '0';
        if (!this.state.isOn && this.state.powerLevel === '0') {
            newPower = 9;
            this.state.isOn = true;
        } else if (this.state.powerLevel.length > 0) {
            newPower = parseInt(this.state.powerLevel.substring(0, 1));
            if (this.state.powerLevel.substring(1, 2) === '.'
                || newPower === 0
                || newPower === 9) {
                newPower = newPower + 1;
                if (newPower > 9) {
                    newPower = 0;
                }
            } else {
                newPower = newPower + '.';
            }
        }
        this.setState({powerLevel: newPower.toString()});
    },
    handleDecrease: function(event) {
        var newPower = '0';
        if (!this.state.isOn && this.state.powerLevel === '0') {
            newPower = 4;
            this.state.isOn = true;
        } else if (this.state.powerLevel.length > 0) {
            newPower = parseInt(this.state.powerLevel.substring(0, 1));
            if (this.state.powerLevel.substring(1, 2) === '.') {
                newPower = newPower;
            } else {
                newPower = newPower - 1;
                if (newPower < 0) {
                    newPower = 9;
                } else if (newPower !== 0) {
                    newPower = newPower + '.';
                }
            }
        }
        this.setState({powerLevel: newPower.toString()});
    },
    render: function() {
        var powerLevel = this.state.powerLevel;
        return (
          <div className="group" id={this.props.cooker}>
            <div className="cooker-symbols">
              <div className="active"></div>
              <div></div>
            </div>
            <div className="power">{powerLevel}</div>
            <div className="controls">
              <a href="#" className="decrease" onClick={this.handleDecrease}>-</a>
              <a href="#" className="increase" onClick={this.handleIncrease}>+</a>
            </div>
          </div>
        );
    }
});

module.exports = CookerPower;
