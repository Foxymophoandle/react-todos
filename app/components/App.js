/**
 * Created by davide on 21/06/17.
 */
var React = require('react');


class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {done: props.todo.done};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({done: event.target.value !== 'on'});
    }

    render() {
            return (
                <form>
                    <input type="checkbox" onChange={this.handleChange} defaultChecked={this.state.done}/>
                    <li key={this.props.todo.id} className={this.state.done ? "todo-done" : "todo-active"}>
                        {this.props.todo.text}
                    </li>
                </form>
            )
    }
}


function TodosList(props) {

    const TodoList = props.todos.map((todo) =>
        <div><TodoItem todo={todo}/></div>
    );

    return (
        <div>
            <ul>{TodoList}</ul>
        </div>
    )
}


class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A todo was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

var TODOS = [
    {'id': 1, 'text': 'first', 'done': false},
    {'id': 2, 'text': 'second', 'done': false},
    {'id': 3, 'text': 'third', 'done': true},
];


class TodosApp extends React.Component {

  render() {
    return (
        <div>
            <NewTodo />
            <TodosList todos={TODOS} />
        </div>
    )
  }
}

module.exports = TodosApp;