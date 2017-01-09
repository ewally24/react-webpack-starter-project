var React = require('react');
var ReactDOM = require('react-dom');

var Greetings = React.createClass({
	getDefaultProps: function() {
		return {
			message: "Hello World!"
		}
	},
	render: function() {
		
		var message = this.props.message;
		return (
			<div>
				<h4> {message} </h4>
			</div>
		)
	}
})

ReactDOM.render(
	<Greetings/>,
	document.getElementById('app')
)