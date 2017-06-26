var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

var TodoApp = require('./components/App');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);