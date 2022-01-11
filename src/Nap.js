import React,{useState} from 'react';


const Nap = () => {
	const [text,setText] = useState(null);
	const [count,setCount] = useState(0);
	const handler = e =>{
		setText(e.target.value);
	}
	return(
		<div>
		<hr/>
		<center>
			<input value={text} onChange = {handler} type="text"/><br/>
			<button onClick={()=>setCount(eval(text))}>Result</button><br/>
			Result is : {count}
		</center>
		</div>
	)
}
export default Nap;