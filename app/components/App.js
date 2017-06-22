/**
 * Created by davide on 21/06/17.
 */
var React = require('react');
var InsertTodo = require('./InsertTodo');

class App extends React.Component {
  render() {
    return (
        <div className="container">
            <h1>TODOS</h1>
            <InsertTodo />
        </div>
    )
  }
}

module.exports = App;