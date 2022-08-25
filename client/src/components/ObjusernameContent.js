import React from 'react'


export const ObjusernameContent = ({objuser,isEditname,changeUser}) => {
       
	return isEditname ? 
	    <div><input type="text" onChange = {changeUser} name="userName"></input></div>
	    : <div>{objuser.userName}</div>
}