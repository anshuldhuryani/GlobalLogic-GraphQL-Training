import axios from "axios";

const { Component } = require("react");

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Todo List Here..',
            todos: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/todo/all')
            .then((result) => {
                this.setState({todos: result.data});
                console.log(this.state.todos);
            })
            .catch((error) => {console.log(error);})
    }

    render() {
        return(
            <div>
                <h2>{this.state.title}</h2>
                {this.state.todos.map(todo => 
                    <div key={todo.id}>
                        Title: {todo.title}, 
                        Description: {todo.description},
                        Completed: {String(todo.completed)}    
                    </div>
                )}
            </div>
        );     
    }
}

export default TodoList;
