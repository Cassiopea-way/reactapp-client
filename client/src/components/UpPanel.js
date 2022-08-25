import React,{useState,useEffect,useRef} from 'react'
import {Timer} from './../components/Timer'
import {DownPanel} from './../components/DownPanel'
import {LivePanel} from './../components/LivePanel'
import {getProperty} from './../supportingfunctions/getProperty'
import {getTime} from './../supportingfunctions/getTime'

export const UpPanel = ({indexsong,playlist,sound,setSound,seek,setSeek,play}) => {
	
	return indexsong !== null ? <LivePanel indexsong={indexsong} playlist={playlist} sound={sound} setSound={setSound} seek={seek} setSeek={setSeek} play={play}/>
		   :
		   (<div id="nofile">Загрузите файл в библиотеку</div>)
}