import React, {Component} from 'react';
//import StorageManager from '../utils/StorageManager';
import Tiles from './Tiles';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tiles: []
		}
	}

	componentWillMount() {
		let callback = result => {
			this.setState({
				tiles: result.tiles
			})
		};
		chrome.storage.local.get('tiles', callback);
	}

	render() {
		return <Tiles items={this.state.tiles} />;
	}
}

export default App;