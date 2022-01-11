import React,{useState,useEffect,useRef} from 'react';


const Sap = () => {
	const [count,setCount] = useState(0);
	useEffect(()=>console.log('This is useEffect hook'),[count])
	const data = useRef(null);
	const submitHandler = e=>{
		e.preventDefault();
		console.log(data.current.value);
	}

	useEffect(()=>{
		data.current.focus();
	},[])

	return (
		<div>
		This is Sap count no {count}<br/>
		<button onClick={()=>setCount(count+1)}>Count</button>
		<center>
			<form onSubmit={submitHandler}>
				<input ref={data} type="text" placeholder="Enter your name"/><br/>
				<input type="submit"/>
			</form>
		</center>
		</div>
	)
}

export default Sap;