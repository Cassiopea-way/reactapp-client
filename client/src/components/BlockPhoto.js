import React,{useState} from 'react'
import {InputImageFile} from './../components/InputImageFile'
import {UserPhoto} from './../components/UserPhoto'
import {LoadFileImageComponent} from './../components/LoadFileImageComponent'

export const BlockPhoto = ({objuser,loadphoto,setLoadphoto}) => {
	
	const [formatfile,setFormatfile] = useState('image/png,image/jpeg,image/gif');
	
	return <div id = "blockphoto">
	       <div id = "photo"><UserPhoto objuser={objuser}/></div>
		   <div id = "loadphoto"><LoadFileImageComponent><InputImageFile loadphoto={loadphoto} setLoadphoto={setLoadphoto} format={formatfile}/></LoadFileImageComponent></div>
	     </div>
	
}