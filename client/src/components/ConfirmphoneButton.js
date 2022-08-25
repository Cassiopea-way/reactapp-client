import React from 'react'


export const ConfirmphoneButton = ({objuser}) => {	
       
	return <div><button class = "checkinfo" disabled={objuser.userphoneActive}>подтвердить</button></div>
	    
}