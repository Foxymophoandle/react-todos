/**
 * Created by davide on 21/06/17.
 */
var React = require('react');

var AddTodo = require('./AddTodo');
var TodoList = require('./TodoList');


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
        this.handleChangeTodo = this.handleChangeTodo.bind(this);
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

    handleChangeTodo(todo_id, done){
        var todos = this.state.todo_list;
        todos.forEach((todo) => {
            if (todo.id === todo_id) {
                todo.done = done;
            }
        });
        console.log(done);
        this.setState({todo_list: todos})
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
                    change_todo={this.handleChangeTodo}
                />
            </div>
        )
    }
}

module.exports = TodoApp;