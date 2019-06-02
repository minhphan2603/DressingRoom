import React from 'react';
import Store from './Components/Store/Store';
import Model from './Components/Model/Model';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { topStyle, botStyle, feetStyle, handbagStyle, hairStyle, necklacesStyle, backgroundStyle } from './Data/initStyle';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topclothes: topStyle,
			botclothes: botStyle,
			shoes: feetStyle,
			handbags: handbagStyle,
			hairstyle: hairStyle,
			necklaces: necklacesStyle,
			background: backgroundStyle
		}
	}
	addCloth = (type, url) => {
		this.setState({
			[type]: {...this.state[type],
				background: 'url("' + url + '")'
			}
		})
	}

	render() {
		return (
			<div className="App m-0">
				<Header />
				<div className='row m-0 p-0'>
					<Store addCloth={this.addCloth} />
					<Model cloth={this.state} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
