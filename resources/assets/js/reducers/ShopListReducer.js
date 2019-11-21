import _ from 'lodash';
import {CREATE,
		READ,
		READ_ITEM,
		UPDATE,
		DELETE} from '../actions/types';

export default(state ={}, action) =>{
	switch(action.type){
		case CREATE:
			return{...state, [actions.payload.id]: action.payload};
		case READ:
			return{...state, ..._.mapKeys(action.payload, 'id')}
		case READ_ITEM:
			return{...state, [actions.payload.id]: action.payload};
		case UPDATE:
			return{...state, [actions.payload.id]: action.payload};
		case DELETE:
			return _.omit(state, action.payload);
		default:
			return state;

	}
}