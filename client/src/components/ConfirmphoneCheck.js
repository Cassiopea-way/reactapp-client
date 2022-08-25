import React from 'react'


export const ConfirmphoneCheck = ({objuser}) => {	
       
	return <div><input type="checkbox" disabled={objuser.userphoneActive}></input></div>
	    
}