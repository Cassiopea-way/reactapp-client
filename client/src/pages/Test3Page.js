import React,{useEffect,useState,useContext} from 'react'
import {useHttp} from '../hooks/httphook'
import {InputFile} from './../components/InputFile'
import {LoadFileComponent} from './../components/LoadFileComponent'
import {LoadImage} from './../components/LoadImage'
import {getProperty} from './../supportingfunctions/getProperty'
import {Player} from './../components/Player'

export const Test3Page = () => {
	
	const {loading, error, request} = useHttp();
	const [playlist,setPlaylist] = useState([]);
	const [loadmusic,setLoadmusic] = useState(false);

    const removeSong = (index) => {
		if (index == playlist.length - 1 && index !== 0){
			setPlaylist([...playlist.slice(0,index),...playlist.slice(index + 1)]);
			let objindex = {index:index - 1,playlistlength:playlist.length};
		    localStorage.setItem('indexsong',JSON.stringify(objindex));
			 request('/deletesong','POST',{sound:playlist[index].common.originalName}).then(deletesong => {
				console.log('аудиофайл успешно удалён');
			 }	   
			 );
		} else {
			if (index !== 0){
				setPlaylist([...playlist.slice(0,index),...playlist.slice(index + 1)]);
			    request('/deletesong','POST',{sound:playlist[index].common.originalName}).then(deletesong => {
				  console.log('аудиофайл успешно удалён');
			    }	   
			    );
			} else {
				localStorage.clear();
			    setPlaylist([...playlist.slice(0,index),...playlist.slice(index + 1)]);
			    request('/deletesong','POST',{sound:playlist[index].common.originalName}).then(deletesong => {
				  console.log('аудиофайл успешно удалён');
			    }	   
			    );
			}
		}
	}	

    useEffect(() => {
		let data = request('/playlist','GET');
		data.then(metainfo => {
			console.log(metainfo);
            setPlaylist(metainfo);
            setLoadmusic(true);			
		});
	},[])
	
	return loadmusic ? (
	  <div id = "musicblock">
	      <Player playlist={playlist} setPlaylist={setPlaylist} loadmusic={loadmusic} removeSong={removeSong}></Player>
	  </div>
	) : (<p>LOADING</p>)
}