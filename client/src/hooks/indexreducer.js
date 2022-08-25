import {createContext} from 'react'

export function indexreducer(state,action){
	switch (action.type){
		case 'increment':
		  if (state.index == state.playlistlength - 1){
			 return {index:0,playlistlength:state.playlistlength};
		  }
		  return {index:state.index + 1,playlistlength:state.playlistlength};
		case 'decrement':
		  if (state.index == 0){
			 return {index:state.playlistlength - 1,playlistlength:state.playlistlength};
		  }
		  return {index:state.index - 1,playlistlength:state.playlistlength};
		case 'update':
 		  return JSON.parse(localStorage.getItem('indexsong'));
        default:
         throw new Error('error');		
	}
}