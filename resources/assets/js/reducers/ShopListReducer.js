import _ from 'lodash';
import {CREATE,
		READ,
		UPDATE,
		DELETE} from '../actions/types';

export default(state ={}, action) =>{
	switch(action.type){
		case CREATE:
			return{...state, [actions.payload.id]: action.payload};
		case READ:
			return{...state, ..._.mapKeys(action.payload, 'id')}
			//return{...state}
		default:
			return state;

	}
}