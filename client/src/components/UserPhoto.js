import React from 'react'

export const UserPhoto = ({objuser}) => {
	
	return objuser.userPhoto == "" ? <div id="emptyphoto">загрузить фото</div> : <img src={objuser.userPhoto} id="userphoto"></img>
	
}