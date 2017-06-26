/**
 * Created by davide on 26/06/17.
 */
var React = require('react');

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        this.handleChangeTodo = this.handleChangeTodo.bind(this);
    }

    handleRemoveTodo(){
        this.props.remove_todo(this.props.todo.id)
    }

    handleChangeTodo(event){
        this.props.change_todo(this.props.todo.id, event.target.checked)
    }

    render (){
        return (
            <div>
                {this.props.todo.text}
                <input
                    type="button"
                    value="X"
                    onClick={this.handleRemoveTodo}
                />
                <input
                    type="checkbox"
                    defaultChecked={this.props.todo.done}
                    onClick={this.handleChangeTodo}
                />
            </div>
        );
    }
}

module.exports = TodoItem;
