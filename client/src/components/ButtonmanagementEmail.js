import React,{useState} from 'react'


export const ButtonmanagementEmail = ({objuser,setIseditemail,saveChanges}) => {
	
	const [isEdit,setIsedit] = useState(false);
       
	return isEdit ? 
	    <div><button id = "changename" class = "changeinfo" onClick={(e) => {setIsedit(false);setIseditemail(false);saveChanges(e);console.log(e.currentTarget.parentElement.parentElement.previousSibling.firstChild.firstChild.name)}}>сохранить</button></div>
	    : <div><button id = "changename" class = "changeinfo" onClick={() => {setIsedit(true);setIseditemail(true)}}>изменить</button></div>
}