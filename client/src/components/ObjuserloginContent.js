import React from 'react'


export const ObjuserloginContent = ({objuser,isEditlogin,changeUser}) => {
       
	return isEditlogin ? 
	    <div><input type="text" onChange = {changeUser} name="userLogin"></input></div>
	    : <div>{objuser.userLogin}</div>
}