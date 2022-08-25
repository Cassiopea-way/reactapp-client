import React,{useState,useEffect} from 'react'
import {getImage} from './../supportingfunctions/getImage'

export const LoadImage = ({loadsrc,isloading}) => {
	console.log(loadsrc);
    const base64String = btoa(String.fromCharCode(...new Uint8Array(loadsrc[0].data.data)));
	return isloading ? ( <img id = "albumphoto" src={`data:loadsrc[0].format;base64,${base64String}`}/> ) : (<div>load</div>)
}