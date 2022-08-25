import React from 'react'


export const ObjuserphoneContent = ({objuser,isEditphone,changeUser}) => {
       
	return isEditphone ? 
	    <div><input type="text" onChange = {changeUser} name="userPhone"></input></div>
	    : <div>{objuser.userPhone}</div>
}