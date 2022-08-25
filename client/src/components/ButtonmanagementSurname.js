import React,{useState} from 'react'


export const ButtonmanagementSurname = ({objuser,setIseditsurname,saveChanges}) => {
	
	const [isEdit,setIsedit] = useState(false);
       
	return isEdit ? 
	    <div><button id = "changename" class = "changeinfo" onClick={(e) => {setIsedit(false);setIseditsurname(false);saveChanges(e);console.log(e.currentTarget.parentElement.parentElement.previousSibling.firstChild.firstChild.name)}}>сохранить</button></div>
	    : <div><button id = "changename" class = "changeinfo" onClick={() => {setIsedit(true);setIseditsurname(true)}}>изменить</button></div>
}