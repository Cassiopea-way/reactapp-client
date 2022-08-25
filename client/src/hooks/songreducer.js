import {createContext} from 'react'
import {indexreducer} from '../hooks/indexreducer'

export function songreducer(state,action){
	switch (action.type){
		case 'update':
 		  return JSON.parse(localStorage.getItem('currentsong'));
        default:
         throw new Error('error');		
	}
}