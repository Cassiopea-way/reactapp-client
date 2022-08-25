import React,{useState} from 'react'


export const ButtonmanagementPhone = ({objuser,setIseditphone,saveChanges}) => {
	
	const [isEdit,setIsedit] = useState(false);
       
	return isEdit ? 
	    <div><button id = "changename" class = "changeinfo" onClick={(e) => {setIsedit(false);setIseditphone(false);saveChanges(e);console.log(e.currentTarget.parentElement.parentElement.previousSibling.firstChild.firstChild.name)}}>сохранить</button></div>
	    : <div><button id = "changename" class = "changeinfo" onClick={() => {setIsedit(true);setIseditphone(true)}}>изменить</button></div>
}