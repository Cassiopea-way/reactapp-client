import React from 'react'
import {useHttp} from '../hooks/httphook'


export const ConfirmemailButton = ({objuser}) => {

    const {request} = useHttp();	
       
	return <div><button class = "checkinfo" disabled={objuser.useremailActive} onClick={() => {request('/sendrandlink','GET').then(response => console.log(response))}}>подтвердить</button></div>
	    
}