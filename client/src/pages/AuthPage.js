import React,{useState,useContext} from 'react'
import {useNavigate} from "react-router-dom"
import {useHttp} from '../hooks/httphook'
import {UserContext} from './../hooks/UserContext'

export const AuthPage = (props) => {
	let navigate = useNavigate();
	const {loading, error, request} = useHttp();
	const [form, setForm] = useState({userLogin: '',userPassword: ''});
	const [user,isLoading,setUser] = useContext(UserContext);
	
	const changeHandler = event => {
		setForm({...form,[event.target.name]: event.target.value});
	}
	
	const loginHandler = async () => {
		try {
			const data = await request('/login','POST',{...form});
			console.log('data:',data);
			setUser(data.user);
			navigate('/');
		} catch(e) {
			throw e;
		}
	}
	
	return (
	  <div>
	    <div id = "authblock">
	      <label className = "authelement">Логин</label>
          <input className = "authelement" type="text" onChange = {changeHandler} name="userLogin" />
          <label className = "authelement">Пароль</label>
          <input className = "authelement" type="text" onChange = {changeHandler} name="userPassword" />
		 <div id="buttonblock">
          <button id = "entermain" className = "authelement" onClick = {loginHandler} disabled = {loading}>Войти</button>
		  <button id = "registeruser" className = "authelement" onClick = {event => {navigate('/register');}}>Зарегистрироваться</button>
		 </div>
		</div>
	  </div>
	);
}