/**
 * Created by davide on 21/06/17.
 */
var React = require('react');

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


module.exports = AddTodo;
