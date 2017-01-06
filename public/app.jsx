var React = require('react');
var ReactDOM = require('react-dom');

var GreetingsMessage = React.createClass({
	getDefaultProps: function() {
		return {
			message: "Hi Welcome To The Wasteland!"
		}
	},
	getInitialState: function() {
		return {
			message: this.props.message
		}
	},
	render: function() {
		var message = this.props.message;
		return (
			<p> {message} </p>
		)
	}
})

var RecipeForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		var RecipeName = this.refs.recipe.value;
		var RecipeMessage = this.refs.message.value;

		var update = {recipe: RecipeName, message: RecipeMessage};
		this.props.onNewUpdate(update);
	},
	render: function() {
		return(
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="recipe"/><br />
				<textarea rows="4" cols="10" ref="message">
				</textarea>
				<br />
				<button>Submit</button>
			</form>
		)
	}
})

var Greetings = React.createClass({
	getDefaultProps: function() {
		return {
			recipe: "Nuka Burgers",
			message: "Now with Added Radiation!"
		}
	},
	getInitialState: function() {
		return {
			recipe: this.props.recipe,
			message: this.props.message
		}
	},
	handleNewUpdate: function(updates) {
		if(updates.recipe.length > 0) {
			this.setState({
				recipe: updates.recipe
			})
		}

		if(updates.message.length > 0) {
			this.setState({
				message: updates.message
			})
		}
	},
	render: function() {
		var recipe = this.state.recipe;
		var message = this.state.message;
		return (
			<div>
				<h4> {recipe} Will Give You Power Ups! </h4>
				<GreetingsMessage message={message}/>
				<RecipeForm onNewUpdate={this.handleNewUpdate}/>
			</div>
		)
	}
})

ReactDOM.render(
	<Greetings/>,
	document.getElementById('app')
)