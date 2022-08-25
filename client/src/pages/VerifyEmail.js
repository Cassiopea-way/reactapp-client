import React,{useEffect,useState} from 'react'
import {useSearchParams,useParams,useNavigate} from "react-router-dom"
import {useHttp} from '../hooks/httphook'

export const VerifyEmail = () => {
	let navigate = useNavigate();
	const {loading, error, request} = useHttp();
	const params = useParams();
	
	let [searchParams,setSearchParams] = useSearchParams();
	const [verify,setVerify] = useState(false);
	
	console.log(searchParams.get("id"));
	useEffect(() => {
		request('/verifyemail','POST',{stringquery:searchParams.get("id")}).then(
		  response => {setVerify(true);}
		)
		.catch(err => setVerify(false));
	},[]);
	
	return verify ?  
	
	<div><button id="buttonverifyemail">На страницу пользователя</button><div id="verifyemail">Электронная почта подтверждена</div></div>
	: 
	<div><button id="buttonverifyemail">На страницу пользователя</button><div id="verifyemailerr">Ошибка верификации</div></div>
	
}