import React,{useState,useEffect,useRef} from 'react'
import {Timer} from './../components/Timer'
import {getProperty} from './../supportingfunctions/getProperty'
import {getTime} from './../supportingfunctions/getTime'

export const CurrentTime = ({currentsong,duration,playaudio,play}) => {
	console.log(play,'property');
	const [timer,setTimer] = useState(0);
	const [start,setStart] = useState(play);
	const firstStart = useRef(true);
	const tick = useRef();
	console.log(start,'state');
	console.log(timer,'timer state');
	
	useEffect(() => {
       if (firstStart.current) {
         firstStart.current = !firstStart.current;
         return;
       }

       if (play) {
          tick.current = setInterval(() => { // <— set tick ref current value
          setTimer((timer) => timer + 1);
       }, 1000);
       } else {
          clearInterval(tick.current); // <— access tick ref current value
       }

          return () => clearInterval(tick.current); // <— clear on unmount!
   }, [play]);
   
   
	
	return timer == 0 ? (<div>{Math.floor(getProperty(currentsong,'format','duration')/60)} : {Math.ceil(getProperty(currentsong,'format','duration')%60)}</div>) : (<div><Timer timer={timer}/></div>)
}