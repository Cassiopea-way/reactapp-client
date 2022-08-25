import React,{useState,useEffect} from 'react'

export const CurrentIndicator = ({changeTime,soundhowler}) => {
	
	const [currenttime,setCurrenttime] = useState(0);
	
	const changewidth = () => {
		console.log(this.style.width);
	}
	
	return <div id = "currenttime" onClick={() => {console.log(this.style.width);}}></div>
}