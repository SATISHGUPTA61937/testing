import React from 'react';
import Lap from './Lap.js';
import './Lap.css';

class Cap extends React.Component{
	
	handleClick = () => {
	    console.log('Click happened');
    };
    render(){
		return(
			<div>
			<h1>Satish </h1>
			<button onClick={this.handleClick}>Button</button><br/>
			{this.props.names}
			<hr/>
			<Lap></Lap>
			</div>
		)
	}
}

export default Cap;