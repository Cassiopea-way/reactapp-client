import React from 'react'


export const ConfirmemailCheck = ({objuser}) => {	
       
	return <div><input type="checkbox" disabled={objuser.useremailActive}></input></div>
	    
}