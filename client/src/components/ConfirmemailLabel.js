import React from 'react'


export const ConfirmemailLabel = ({objuser}) => {	
       
	return objuser.useremailActive ? 
	    <div>Адрес электронной почты подтвержден</div>
	    : <div>Адрес электронной почты не подтвержден</div>
}