import React,{useEffect,useState} from 'react'
import {InputFile} from './../components/InputFile'
import {LoadFileComponent} from './../components/LoadFileComponent'
import {LoadImage} from './../components/LoadImage'

import {getProperty} from './../supportingfunctions/getProperty'

export const PlayList = ({playlist,setPlaylist,loadmusic,sound,addSong,removeSong}) => {
	
	 const [searchoverlap,setSearchoverlap] = useState('');
	 const [formatfile,setFormatfile] = useState('audio/*');
	
	 const filteredPlaylist = playlist.filter(song => {
		console.log(getProperty(song,'common','title'));
		if (getProperty(song,'common','title').toLowerCase().includes(searchoverlap.toLowerCase()) || getProperty(song,'common','artist').toLowerCase().includes(searchoverlap.toLowerCase())){
			return true;
		}
		return false;
	});
	
	return <div>
	          <div id = "panelsearch"><input id="musicsearch" value={searchoverlap} placeholder = "music search" onChange={(e) => setSearchoverlap(e.target.value)}></input><LoadFileComponent><InputFile setPlaylist={setPlaylist} format={formatfile}/></LoadFileComponent></div>
		      <ul id = "playlist">
		         {
			        filteredPlaylist.map((song,index) => {
				       return (
				         <li onClick={() => addSong(index)}><div className="song-info"><div className="song-info-block-1"><LoadImage loadsrc = {getProperty(song,'common','picture')} isloading = {loadmusic} index={index}></LoadImage><div className="titlesong">{getProperty(song,'common','artist')} - {getProperty(song,'common','title')}</div></div><div className="song-info-block-2"><div className = "duration">{Math.floor(getProperty(song,'format','duration')/60)} : {Math.ceil(getProperty(song,'format','duration')%60)}</div><button onClick={() => removeSong(index)} className = "delete_song">X</button></div></div></li>
				       )
			        })
		         }
		      </ul>
	          </div>
}