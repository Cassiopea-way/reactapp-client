import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {useHttp} from '../hooks/httphook'

export const ChangepasswordPage = () => {
	let navigate = useNavigate();
	const {loading, error, request} = useHttp();
	const [form, setForm] = useState({enterpassword: '',repetepassword: ''});
	const [hide,setHide] = useState({opacity:0});
	
	const changeHandler = event => {
		setForm({...form,[event.target.name]: event.target.value});
		setHide({opacity:0});
	}
	
	const checkPassword = async () => {
		if (form.enterpassword !== form.repetepassword){
			setHide({opacity:1});
		} else {
		try {
			const data = await request('/changepassword','POST',{...form});
			console.log('data:',data);
			navigate('/login');
		} catch(e) {
			throw e;
		}
	    }
	}
	
	return (
	  <div>
	    <div id = "checkpasswordblock">
	      <label className = "authelement">Введите пароль</label>
          <input className = "authelement" type="password" onChange = {changeHandler} name="enterpassword" />
          <label className = "authelement">Повторите пароль</label>
          <input className = "authelement" type="password" onChange = {changeHandler} name="repetepassword" />
		  <label style={hide} id="checkpassword" className = "authelement">Пароли не совпадают</label>
		 <div id="buttonblock">
          <button id = "entermain" className = "authelement" onClick = {checkPassword} disabled = {loading}>подтвердить изменение</button>
		 </div>
		</div>
	  </div>
	)
}