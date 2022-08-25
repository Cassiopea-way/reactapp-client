import React from 'react'


export const ObjusersurnameContent = ({objuser,isEditsurname,changeUser}) => {
       
	return isEditsurname ? 
	    <div><input type="text" onChange = {changeUser} name="userSurname"></input></div>
	    : <div>{objuser.userSurname}</div>
}