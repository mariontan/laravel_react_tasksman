import {CREATE,
		READ,
		READ_ITEM,
		UPDATE,
		DELETE} from './types';
import history from '../history';
import axios from 'axios';

export const create = (formValues) => async (dispatch,getState)=>{
	const response = await axios.post('api/shoppingList',formValues).then(()=>
		history.push('/shopList'));
	dispatch({type: CREATE, payload: response.data});
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
	const response = await axios.post(`/api/shoppingList/${id}`,formValues).then(()=>
		history.push('/shopList'));
	dispatch({type: UPDATE, payload: response.data})
}

export const delete_item=(id)=>async dispatch=>{
	const response = await axios.delete(`/api/shoppingList/${id}`).then(()=>
		read());
	dispatch({type: DELETE, payload: id});
}

