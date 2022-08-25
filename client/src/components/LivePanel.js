import React,{useState,useEffect,useRef} from 'react'
import {Timer} from './../components/Timer'
import {DownPanel} from './../components/DownPanel'
import {getProperty} from './../supportingfunctions/getProperty'
import {getTime} from './../supportingfunctions/getTime'

export const LivePanel = ({indexsong,playlist,sound,setSound,seek,setSeek,play}) => {
	return seek == 0 ? (<div><div id = "up-panel">
			     <div className="songinfo">{getProperty(playlist[indexsong.index],'common','artist')} - {getProperty(playlist[indexsong.index],'common','title')}</div>
				 <div className="songinfo"><div>{Math.floor(getProperty(playlist[indexsong.index],'format','duration')/60)} : {Math.ceil(getProperty(playlist[indexsong.index],'format','duration')%60)}</div></div>
		   </div>
		   <DownPanel sound={sound} setSound={setSound} seek={seek} setSeek={setSeek}/>
		   </div>
		   )
		   :
		   (<div><div id = "up-panel">
			     <div className="songinfo">{getProperty(playlist[indexsong.index],'common','artist')} - {getProperty(playlist[indexsong.index],'common','title')}</div>
				 <div className="songinfo"><div><Timer seek={seek}/></div></div>
		   </div>
		   <DownPanel sound={sound} setSound={setSound}  seek={seek} setSeek={setSeek}/>
		   </div>)
}