import React,{useState} from 'react';
import Sap from './Sap.js';
import './Lap.css';

const Lap = () =>{
	const [name,setName] = useState("This is lap");
	const [count,setCount] = useState(0);
	return(
		<div>
		Hay, {name}<br/>
		<button onClick={()=> setName('Lap was Changed')}>Chnage Lap</button><br/>
		<h1>{count}</h1> <button onClick={()=> setCount(count+1)}>+</button>
	    <button onClick={()=> setCount(count - 1)}>-</button><hr/>
	    <Sap></Sap>

		</div>
	)
}

export default Lap;