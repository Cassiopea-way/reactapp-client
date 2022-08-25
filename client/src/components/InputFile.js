import React from 'react'
import {useHttp} from '../hooks/httphook'

export const InputFile = ({setPlaylist,format}) => {
	
	const {loading, error, request} = useHttp();
	
	const onSelectFileHandler = async(files) => {
		const file = files[0];
		console.log(file);
		const formData = new FormData(); 
		formData.append('file',file);
		for (let pair of formData.entries()){
			console.log(pair[0]);
		}
		const config = {headers:{"Content-Type":"multipart/form-data"}};
		const data = await request('/loadsong','POST',formData,config);
		await request('/playlist','GET').then(newplaylist => {
			console.log(newplaylist);
			setPlaylist(newplaylist);
		});
	}
	
	return ( 
	  <input type = "file" accept = {format} onChange={(e) => onSelectFileHandler(e.target.files)}>
	      
	  </input>
	)
}