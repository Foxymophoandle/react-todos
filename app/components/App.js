/**
 * Created by davide on 21/06/17.
 */
var React = require('react');


class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    handleRemoveTodo(){
        this.props.remove_todo(this.props.todo.id)
    }

    render (){
        return (
            <div>
                {this.props.todo.text}
                <input type="button" value="X" onClick={this.handleRemoveTodo} />
            </div>
        );
    }
}


function TodoList(props){

    var todo_items = props.todos.map((todo) =>
        <li key={todo.id}>
            <TodoItem
                todo={todo}
                remove_todo={props.remove_todo}
            />
        </li>
    );
    return (
        <ul>{todo_items}</ul>
    );
}


class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todo_text: ''};

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({todo_text: event.target.value});
    }

    handleAddTodo(event) {
        event.preventDefault();
        this.props.add_todo(this.state.todo_text);
        this.setState({todo_text: ''});
    }

    render(){

        return (
            <form onSubmit={this.handleAddTodo}>
                <input type="text" value={this.state.todo_text} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}


class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo_list: [
                {'id': 1, 'text': 'first', 'done': false},
                {'id': 2, 'text': 'second', 'done': false},
                {'id': 3, 'text': 'third', 'done': true}
            ],
            max_id: 3
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    handleAddTodo(todo){
        var new_id = this.state.max_id + 1;
        this.state.todo_list.push({'id': new_id, 'text': todo, 'done': false});
        this.setState({todo_list: this.state.todo_list});
        this.setState({max_id: new_id})
    }

    handleRemoveTodo(todo_id){
        var cleaned_todos = this.state.todo_list.filter((todo) => {
            if (todo.id !== todo_id) return todo;
        });
        this.setState({todo_list: cleaned_todos})
    }

    render() {
        return (
            <div>
                <AddTodo
                    add_todo={this.handleAddTodo}
                />
                <TodoList
                    todos={this.state.todo_list}
                    remove_todo={this.handleRemoveTodo}
                />
            </div>
        )
    }
}

module.exports = TodoApp;