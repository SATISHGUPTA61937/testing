import React,{useState} from 'react';

const Tap = () =>{
	const[data,setData] = useState([]);
	const getData = ()=>{
		fetch('https://jsonplaceholder.typicode.com/todos').then(
		 response => response.json()
		).then(json => setData(json))
		
	}
	return(
		<div>
		<button onClick={getData}>Get Data</button><br/>
		{data.map(item=><li key={item.id}>{item.title}</li>)}
		</div>
	)
}

export default Tap;