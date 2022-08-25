import React from 'react'


export const ObjuseremailContent = ({objuser,isEditemail,changeUser}) => {
       
	return isEditemail ? 
	    <div><input type="text" onChange = {changeUser} name="userEmail"></input></div>
	    : <div>{objuser.userEmail}</div>
}