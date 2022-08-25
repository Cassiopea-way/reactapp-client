import React,{useState,useEffect,useRef} from 'react'
import {UpPanel} from './../components/UpPanel'

const imagesPath = {
	play:'/images/img.png',
	pause:'/images/pause_2.png'
}

export const ControlPanel = ({sound,setSound,playsong,playlist,setPlaylist,indexsong,dispatch}) => {
	
	const [play,setPlay] = useState('play');
	const [seek,setSeek] = useState(0);
	const requestRef = useRef();
    const previousTimeRef = useRef();

    const animate = time => {
    if (previousTimeRef.current !== undefined) {
	if (Object.keys(sound).length !== 0){
		setSeek(Math.floor(sound.seek()));
	}
    }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    }
	
	const playcurrentSong = () => {
	 if (Object.keys(sound).length !== 0){
		if (play === 'play'){
			setPlay('pause');
			sound.play();
			console.log('PLAY');
		} else {
			setPlay('play');
			sound.pause();
			console.log('PAUSE');
		}
	 }	
	}
	
	useEffect(() => {
       requestRef.current = requestAnimationFrame(animate);
       return () => cancelAnimationFrame(requestRef.current);
    },[play]);
	
	return  <div id = "player">
		       <button id = "play-pause"><img src={imagesPath[play]} onClick={playcurrentSong}></img></button>
			   <button id = "prev" data-click = "prev" onClick={() => dispatch({type:'decrement'})}><img src = "/images/prev.png"></img></button>
			   <button id = "next" data-click = "next" onClick={() => dispatch({type:'increment'})}><img src = "/images/next.png"></img></button>
			   <img src = ""></img>
			 <div id = "livepanel">
			   <UpPanel indexsong={indexsong} playlist={playlist} sound={sound} setSound={setSound} seek={seek} setSeek={setSeek} play={play}/>
			 </div>
			<div id = "volume"></div>
		   </div>
}