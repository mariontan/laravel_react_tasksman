import {CREATE,
		READ,
		UPDATE,
		DELETE} from './types';
import history from '../history';
import axios from 'axios';

// export const create = (formValues) => async (dispatch,getState)=>{
// 	const response = await axios.post('api/shoppingList');
// 	dispatch({type: CREATE, payload: response.data});
// };

export const read = () => async dispatch=>{
	const response = await axios.get('/api/shoppingList');
	dispatch({type: READ, payload: response.data});
}