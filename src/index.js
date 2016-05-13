// Create a web component. This component should produce some html
// This component is a function
import React from 'react';
import ReactDom from 'react-dom';

const API_KEY = 'AIzaSyD4JxQgebX6T1d1PnwShMY0yWmpWcAs50c';

const App = function() {
	return <div>Hi!</div>;
}


// Put this component in the DOM

ReactDom.render(
	<App />,
	document.querySelector('.container')
);