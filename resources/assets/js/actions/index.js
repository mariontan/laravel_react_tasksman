import {CREATE,
		READ,
		READ_ITEM,
		UPDATE,
		DELETE} from './types';
import history from '../history';
import axios from 'axios';

export const create = (formValues) => async (dispatch,getState)=>{
	const response = await axios.post('api/shoppingList',formValues);
	dispatch({type: CREATE, payload: response.data});
	history.push('/shopList')
};

export const read = () => async dispatch=>{
	const response = await axios.get('/api/shoppingList');
	dispatch({type: READ, payload: response.data});
}
export const read_item = (id) => async dispatch=>{
	const response = await axios.get(`/api/shoppingList/${id}`)
	dispatch({type: READ_ITEM, payload: response.data})
}
export const update = (id,formValues) => async dispatch=>{
	const response = await axios.post(`/api/shoppingList/${id}`,formValues);
	dispatch({type: UPDATE, payload: response.data})
}