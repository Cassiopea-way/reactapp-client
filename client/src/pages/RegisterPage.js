import React,{useState,useContext} from 'react'
import {useNavigate} from "react-router-dom"
import {useHttp} from '../hooks/httphook'

export const RegisterPage = () => {
	
	let navigate = useNavigate();
	const {loading, error, request} = useHttp();
	const [regform, setForm] = useState({userName:'',userSurname:'',userLogin: '',userPassword: '',userEmail:'',userPhone:''});
	
	const changeHandler = event => {
		setForm({...regform,[event.target.name]: event.target.value});
	}
	
	const registerHandler = async () => {
		try {
			const data = await request('/register','POST',{...regform});
			console.log('data:',data);
			data.then(auth => {
				navigate('/login');
			})
			.catch(err => console.log(err));
		} catch(e) {
			throw e;
		}
	}
	
	return (
	   <div>
	    <div id = "registerblock">
	      <label className = "authelement">Имя</label>
          <input className = "authelement" type="text" onChange = {changeHandler} name="userName" />
          <label className = "authelement">Фамилия</label>
          <input className = "authelement" type="text" onChange = {changeHandler} name="userSurname" />
		  <label className = "authelement">Логин</label>
          <input className = "authelement" type="text" onChange = {changeHandler} name="userLogin" />
          <label className = "authelement">Пароль</label>
          <input className = "authelement" type="text" onChange = {changeHandler} name="userPassword" />
		  <label className = "authelement">Адрес электронной почты</label>
          <input className = "authelement" type="text" onChange = {changeHandler} name="userEmail" />
		  <label className = "authelement">Номер телефона</label>
          <input className = "authelement" type="text" onChange = {changeHandler} name="userPhone" />
		 <div id="buttonblock">
		  <button id = "registeruser" className = "authelement" onClick = {registerHandler}>Зарегистрироваться</button>
		 </div>
		</div>
	  </div>
	)
}