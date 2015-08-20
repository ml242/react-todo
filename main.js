var Item = React.createClass({

	getInitialState: function(){
		return { completed: false }
	},

	taskComplete: function(){
		var checked = this.state.completed;
		this.setState({
			completed: !checked
		})
	},

	render: function(){
		return(<li className={this.state.completed ? "finished" : "incomplete"} onClick={this.taskComplete}>{this.props.item}</li>)
	},

});

var TodoList = React.createClass({

	render: function(){
		var todoItem = this.props.todos.map(function(todo){
			return <Item item={todo} />
		})
		return(<ul>{todoItem}</ul>)
	}
});

var TodoApp = React.createClass({

	getInitialState: function(){
		return {
			text: "",
			todoLists: [],
			todos: [],
			place: 0
		}
	},

	onChange: function(e) {
		this.setState({ text: e.target.value });
	},

	handleClick: function(){
		this.setState({
			todos: this.state.todos.concat(this.state.text)
		});
	},

	newList: function(){
		this.setState({
			todoLists: this.state.todoLists.concat([this.state.todos]),
			place: this.state.place += 1
		});
		console.log(this.state.todoLists)
		console.log(this.state.place)
	},

    render: function(){
        return (
        	<div>
        		<input type="text" value={this.state.text} onChange={this.onChange} /> 
				<input type="submit" onClick={this.handleClick} />
        		<TodoList todos={this.state.todos} />
        		<button onClick={this.newList}>New List</button>
    		</div>
    	)
    },
});

React.render(<TodoApp />, document.getElementById('content'));
