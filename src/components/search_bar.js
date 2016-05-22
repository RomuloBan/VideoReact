import React, { Component } from 'react';



class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: ''};
	}
	render() {
		return (
			<div className="search-bar"> 
			<input onChange={evt => this.onInputSearchChange(evt.target.value)} />
			</div>
			);
	}

	onInputSearchChange(term) {

		this.setState({ term });
		this.props.onSearchTermChange(term);

	}

}



export default SearchBar;