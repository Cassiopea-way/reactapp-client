import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {BlockPhoto} from './../components/BlockPhoto'
import {BlockInfo} from './../components/BlockInfo'
import {useHttp} from '../hooks/httphook'

export const MyprofilePage = () => {
	
	const [loadimage,setLoadimage] = useState('loadimage');
	const {loading, error, request} = useHttp();
	const [objuser,setObjuser] = useState({});
	const [lastchange,setLastchange] = useState('');
	const [loadphoto,setLoadphoto] = useState(false);
	
	const changeUser = event => {
		setObjuser({...objuser,[event.target.name]: event.target.value});
		setLastchange(event.target.value);
	}
	
	const saveChanges = event => {
		request('/savechanges','POST',{inputname:event.currentTarget.parentElement.parentElement.previousSibling.firstChild.firstChild.name,change:lastchange});
	}
	
	useEffect(() => {
		const data = request('/MyprofilePage','GET');
		data.then(loadobjuser => {
			setObjuser(loadobjuser);
		});
		return () => {
			console.log('component unmounted');
		}
	},[loadphoto]);

	return ( 
	  <div>
	    <div id="myprofilepage">
		 <Container>
		 <Row>
	         <Col md={1}><div id = "blockbutton"><button id = "back">Назад</button></div></Col>
	         <Col md={5}><BlockPhoto objuser={objuser} loadphoto={loadphoto} setLoadphoto={setLoadphoto}/></Col>
		     <Col md={6}><BlockInfo objuser={objuser} changeUser={changeUser} saveChanges={saveChanges}/></Col>
	     </Row>
         </Container>		 
	    </div>  
	 </div>)
}