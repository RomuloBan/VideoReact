// Create a web component. This component should produce some html
// This component is a function
import React from 'react';
import ReactDom from 'react-dom';

const App = function() {
	return <div>Hi!</div>;
}


// Put this component in the DOM

ReactDom.render(
	<App />,
	document.querySelector('.container')
);