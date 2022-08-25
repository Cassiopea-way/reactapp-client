import React,{useState} from 'react'
import {ObjusernameContent} from './../components/ObjusernameContent'
import {ObjusersurnameContent} from './../components/ObjusersurnameContent'
import {ObjuserloginContent} from './../components/ObjuserloginContent'
import {ObjuseremailContent} from './../components/ObjuseremailContent'
import {ObjuserphoneContent} from './../components/ObjuserphoneContent'
import {ButtonmanagementName} from './../components/ButtonmanagementName'
import {ButtonmanagementSurname} from './../components/ButtonmanagementSurname'
import {ButtonmanagementLogin} from './../components/ButtonmanagementLogin'
import {ButtonmanagementEmail} from './../components/ButtonmanagementEmail'
import {ButtonmanagementPhone} from './../components/ButtonmanagementPhone'
import {ConfirmemailLabel} from './../components/ConfirmemailLabel'
import {ConfirmphoneLabel} from './../components/ConfirmphoneLabel'
import {ConfirmemailCheck} from './../components/ConfirmemailCheck'
import {ConfirmphoneCheck} from './../components/ConfirmphoneCheck'
import {ConfirmemailButton} from './../components/ConfirmemailButton'
import {ConfirmphoneButton} from './../components/ConfirmphoneButton'


export const BlockInfo = ({objuser,changeUser,saveChanges}) => {
	
	const [isEditname,setIseditname] = useState(false);
	const [isEditsurname,setIseditsurname] = useState(false);
	const [isEditlogin,setIseditlogin] = useState(false);
	const [isEditemail,setIseditemail] = useState(false);
	const [isEditphone,setIseditphone] = useState(false);
	
	return <div>
	       <div id = "blockinfo">
		     <div id = "userinfo">
		         <table id = "information" border = "1" cellPadding = "0" cellspacing = "0">
			       <tr><td>Имя</td><td><ObjusernameContent objuser={objuser} isEditname={isEditname} changeUser={changeUser} /></td><td><ButtonmanagementName objuser={objuser} setIseditname={setIseditname} saveChanges={saveChanges}/></td></tr>
				   <tr><td>Фамилия</td><td><ObjusersurnameContent objuser={objuser} isEditsurname={isEditsurname} changeUser={changeUser} /></td><td><ButtonmanagementSurname objuser={objuser} setIseditsurname={setIseditsurname} saveChanges={saveChanges} /> </td></tr>
				   <tr><td>Логин</td><td><ObjuserloginContent objuser={objuser} isEditlogin={isEditlogin} changeUser={changeUser} /></td><td><ButtonmanagementLogin objuser={objuser} setIseditlogin={setIseditlogin} saveChanges={saveChanges} /></td></tr>
				   <tr><td>Пароль</td><td>********</td><td><button id = "changepassword">изменить</button></td></tr>
				   <tr><td>Эл.почта</td><td><ObjuseremailContent objuser={objuser} isEditemail={isEditemail} changeUser={changeUser} /></td><td><ButtonmanagementEmail objuser={objuser} setIseditemail={setIseditemail} saveChanges={saveChanges} /></td></tr>
				   <tr><td>Телефон</td><td><ObjuserphoneContent objuser={objuser} isEditname={isEditphone} changeUser={changeUser} /></td><td><ButtonmanagementPhone objuser={objuser} setIseditphone={setIseditphone} saveChanges={saveChanges} /></td></tr>
				   <tr><td><ConfirmemailLabel objuser={objuser} /></td><td><ConfirmemailCheck objuser={objuser} /></td><td><ConfirmemailButton objuser={objuser} /></td></tr>
				   <tr><td><ConfirmphoneLabel objuser={objuser} /></td><td><ConfirmphoneCheck objuser={objuser} /></td><td><ConfirmphoneButton objuser={objuser} /></td></tr>
			     </table>
		     </div>
		 </div>
	   </div>
	
}