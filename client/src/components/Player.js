import React,{useState,useEffect,useReducer} from 'react'

import {useHttp} from '../hooks/httphook'
import {indexreducer} from '../hooks/indexreducer'
import {songreducer} from '../hooks/songreducer'
import {PlayList} from './../components/PlayList'
import {ControlPanel} from './../components/ControlPanel'
import {UpPanel} from './../components/UpPanel'
import {getProperty} from './../supportingfunctions/getProperty'
import {UserContext} from './../hooks/UserContext'
import {Howl,Howler} from 'howler'

export const Player = ({playlist,setPlaylist,loadmusic,removeSong}) => {
	console.log(localStorage);
	const [user,isLoading] = React.useContext(UserContext);
	const {loading, error, request} = useHttp();
	const [indexsong,dispatch] = useReducer(indexreducer,JSON.parse(localStorage.getItem('indexsong')));
	const [sound,setSound] = useState({});
	console.log(indexsong);
	console.log(sound);
	useEffect(() => {
		console.log('useEffect is running');
		if (indexsong !== null && indexsong.index !== -1 && indexsong.index !== playlist.length){
		      request('/getcurrentsong','POST',{sound:playlist[indexsong.index].common.originalName}).then(getcurrentsong => {
			  console.log('файл успешно скопирован');
			  console.log('1');
		      setSound(new Howl({
			    src:['/src/currentsong/' + playlist[indexsong.index].common.originalName],
			    html5:true,
			    preload:true,
			    loop:true,
			    format:['mp3','aac','wav'],
			    onloaderror:function(id,err){
				  console.log(id,err);
				  alert(id,err);
			    },
			    onplay:function(id){
				
			    },
			    onseek:function(seek,id){
				  console.log(seek,id,'CURRENT SEEK');
			    }
		     }));
		   });
		}
 		return () => {
			console.log('component unmounted');
		}
	},[indexsong,playlist]);
	
	const addSong = (songindex) => {
		console.log(user);
		let objindex = {index:songindex,playlistlength:playlist.length};
		localStorage.setItem('indexsong',JSON.stringify(objindex));
		dispatch({type:'update'});
	}	
	
	return <div>
	       <ControlPanel sound={sound} setSound={setSound} playlist={playlist} setPlaylist={setPlaylist} indexsong={indexsong} dispatch={dispatch}/>
		   <PlayList playlist={playlist} setPlaylist={setPlaylist} loadmusic={loadmusic} sound={sound} addSong={addSong} removeSong={removeSong}/>
		  </div>
}