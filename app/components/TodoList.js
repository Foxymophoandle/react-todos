var React = require('react');

var TodoItem = require('./TodoItem');

function TodoList(props){

    var todo_items = props.todos.map((todo) =>
        <li key={todo.id}>
            <TodoItem
                todo={todo}
                remove_todo={props.remove_todo}
                change_todo={props.change_todo}
            />
        </li>
    );
    return (
        <ul>{todo_items}</ul>
    );
}

module.exports = TodoList;
