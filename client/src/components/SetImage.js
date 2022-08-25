import React,{useState,useEffect} from 'react'

const imagesPath = {
	play:'/images/img.png',
	pause:'/images/pause_2.png'
}

export const SetImage = ({testprop,playcurrentSong,playsong,duration}) => {
	
	console.log(playsong);
	
    const [img,setImg] = useState('play');
	
	const [play,setPlay] = useState(true);
	
	return <img src={imagesPath[img]} onClick={() => {
		      setImg((img) => {
		      setPlay(!play);
	          playcurrentSong(img);
		      return play ? 'pause' : 'play'})}}>
		   </img>
	
}