import React,{useState,useEffect,useRef} from 'react'
import {getProperty} from './../supportingfunctions/getProperty'
import {getTime} from './../supportingfunctions/getTime'

export const Timer = ({seek}) => {
       
	return <div>{getTime(seek)}</div>
}