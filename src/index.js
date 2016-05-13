import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyD4JxQgebX6T1d1PnwShMY0yWmpWcAs50c';




class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'surfboards' }, videos => this.setState({ videos }));
	}

    render() {

        return ( <div>
            <SearchBar />
            </div>
        );

    }
}


ReactDom.render( < App / > ,
    document.querySelector('.container')
);
