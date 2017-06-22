/**
 * Created by davide on 21/06/17.
 */
var React = require('react');

function TodoList(props) {
    return (<ul className="todo-list">
        {props.todos.map(function (todo){
            return (
                <li key={todo.id} className="todo">
                    {todo.text}
                </li>
            )
        })}
    </ul>)
}

module.exports = TodoList;
