import React,{useState} from 'react'


export const ButtonmanagementName = ({objuser,setIseditname,saveChanges}) => {
	
	const [isEdit,setIsedit] = useState(false);
       
	return isEdit ? 
	    <div><button id = "changename" class = "changeinfo" onClick={(e) => {setIsedit(false);setIseditname(false);saveChanges(e);console.log(e.currentTarget.parentElement.parentElement.previousSibling.firstChild.firstChild.name)}}>сохранить</button></div>
	    : <div><button id = "changename" class = "changeinfo" onClick={() => {setIsedit(true);setIseditname(true)}}>изменить</button></div>
}