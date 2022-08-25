import React from 'react'
import {useHttp} from '../hooks/httphook'

export const InputImageFile = ({loadphoto,setLoadphoto,format}) => {
	
	const {loading, error, request} = useHttp();
	
	const onSelectFileHandler = (files) => {
		const file = files[0];
		console.log(file);
		const formData = new FormData(); 
		formData.append('file',file);
		for (let pair of formData.entries()){
			console.log(pair[0]);
		}
		const config = {headers:{"Content-Type":"multipart/form-data"}};
		const data = request('/savephoto','POST',formData,config);
		console.log(data);
		data.then(response => {
			setLoadphoto(!loadphoto);
		});
	}
	
	return ( 
	  <input type = "file" accept = {format} onChange={(e) => onSelectFileHandler(e.target.files)}>
	      
	  </input>
	)
}