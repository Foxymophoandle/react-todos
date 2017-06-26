/**
 * Created by davide on 21/06/17.
 */
var React = require('react');


function TodoItem(props) {
    return (<div>{props.todo.text}</div>);
}


function TodoList(props){

    var todo_items = props.todos.map((todo) =>
        <li key={todo.id}><TodoItem todo={todo}/></li>
    );
    return (
        <ul>{todo_items}</ul>
    );
}


class AddTodo extends React.Component {

    render(){
        let input;

        return (
            <div>
                 <form onSubmit={(e) => {
                     e.preventDefault();
                     this.props.add_todo(input.value);
                     input.value = '';
                 }}>
                     <input ref={node => {input = node;}} />
                 </form>
            </div>
        )
    }
}


class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todo_list: [
            {'id': 1, 'text': 'first', 'done': false},
            {'id': 2, 'text': 'second', 'done': false},
            {'id': 3, 'text': 'third', 'done': true},
        ]};

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleChangeTodoState = this.handleChangeTodoState.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    handleAddTodo(todo){
        var new_id = this.state.todo_list.length + 1;
        this.state.todo_list.push({'id': new_id, 'text': todo, 'done': false});
        this.setState({todo_list: this.state.todo_list})
    }

    handleChangeTodoState(todo_id){

    }

    handleRemoveTodo(todo_id){

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
                    change_todo={this.handleChangeTodoState}
                />
            </div>
        )
    }
}

module.exports = TodoApp;