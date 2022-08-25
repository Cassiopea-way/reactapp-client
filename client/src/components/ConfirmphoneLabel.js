import React from 'react'


export const ConfirmphoneLabel = ({objuser}) => {	
       
	return objuser.userphoneActive ? 
	    <div>Номер телефона подтвержден</div>
	    : <div>Номер телефона не подтвержден</div>
}