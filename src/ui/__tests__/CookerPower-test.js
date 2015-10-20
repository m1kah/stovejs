jest.dontMock('../CookerPower.js');

describe('initial state', function() {
  var React;
  var ReactDom;
  var CookerPower;
  var TestUtils;
  var power;
  var powerLevel;
  var inc;
  var dec;
  
  function clickInc() {
    TestUtils.Simulate.click(inc);
  }
  
  function clickDec() {
    TestUtils.Simulate.click(dec);
  }
  
  function expectPower(expected) {
    expect(ReactDom.findDOMNode(powerLevel).textContent).toBe(expected);
  }
  
  beforeEach(function() {
    React = require('react');
    ReactDom = require('react-dom');
    CookerPower = require('../CookerPower.js');
    TestUtils = require('react-addons-test-utils');
    power = TestUtils.renderIntoDocument(
      <CookerPower />
    );
    powerLevel = TestUtils.findRenderedDOMComponentWithClass(power, 'power');    
    inc = TestUtils.findRenderedDOMComponentWithClass(power, 'increase');
    dec = TestUtils.findRenderedDOMComponentWithClass(power, 'decrease');
  });
  
  it('starts with empty value', function() {
    expectPower('');
  });
  
  it('+ starts from 0,9,..,1,2,3 and then starts again', function() {
    clickInc();
    expectPower('0');
    clickInc();
    expectPower('9');
    clickInc();
    expectPower('0');
    clickInc();
    expectPower('1');
    clickInc();
    expectPower('1.');
    clickInc();
    expectPower('2');
    clickInc();
    expectPower('2.');
    clickInc();
    expectPower('3');
    clickInc();
    expectPower('3.');
    clickInc();
    expectPower('4');
    clickInc();
    expectPower('4.');
    clickInc();
    expectPower('5');
    clickInc();
    expectPower('5.');
    clickInc();
    expectPower('6');
    clickInc();
    expectPower('6.');
    clickInc();
    expectPower('7');
    clickInc();
    expectPower('7.');
    clickInc();
    expectPower('8');
    clickInc();
    expectPower('8.');
    clickInc();
    expectPower('9');
    clickInc();
    expectPower('0');
  });
  
  it('- starts from 0,4,3...,1,0,9,8.', function() {
    clickDec();
    expectPower('0');
    clickDec();
    expectPower('4');
    clickDec();
    expectPower('3.');
    clickDec();
    expectPower('3');
    clickDec();
    expectPower('2.');
    clickDec();
    expectPower('2');
    clickDec();
    expectPower('1.');
    clickDec();
    expectPower('1');
    clickDec();
    expectPower('0');
    clickDec();
    expectPower('9');
    clickDec();
    expectPower('8.');
    clickDec();
    expectPower('8');
  });
});
