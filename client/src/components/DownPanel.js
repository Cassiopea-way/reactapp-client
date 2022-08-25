import React,{useState,useEffect,useRef} from 'react'
import {getProperty} from './../supportingfunctions/getProperty'
import {getTime} from './../supportingfunctions/getTime'

export const DownPanel = ({sound,setSound,seek,setSeek}) => {
	
	const [seekvalue,setSeekvalue] = useState(0);
	const [mousestate,setMousestate] = useState(false);
	
	useEffect(() => {
		console.log(mousestate);
	},[mousestate]);
       
	return mousestate ? 
      (<div id = "down-panel" onMouseDown={(e) => setMousestate(false)} onMouseUp={(e) => {console.log(e.type);console.log('mouseup in true',e.target.value);setMousestate(false);sound.seek(seekvalue);}}><input type="range" id="indicator" onChange={(e) => setSeekvalue(e.target.value)} min="0" max={sound._duration} value={seekvalue} step="1"></input></div>)   
      :
      (<div id = "down-panel" onMouseDown={(e) => setMousestate(true)} onMouseUp={(e) => {console.log(e.type);console.log('mouseup in false',e.target.value);setMousestate(true);}}><input type="range" id="indicator" onChange={(e) => {if (mousestate){sound.seek(e.target.value);}}} min="0" max={sound._duration} value={seek} step="1"></input></div>)
}