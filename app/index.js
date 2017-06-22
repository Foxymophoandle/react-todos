var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

var TodosApp = require('./components/App');

ReactDOM.render(
  <TodosApp />,
  document.getElementById('app')
);