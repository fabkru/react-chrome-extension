import React, {Component} from 'react';
//import StorageManager from '../utils/StorageManager';
import Tiles from './Tiles';
import { Button } from 'semantic-ui-react';

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
		return <div>
			<Button>Edit</Button>
			<Tiles items={this.state.tiles} />
		</div>;
	}
}

export default App;