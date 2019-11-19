import {combineReducers} from 'redux';
import ShopListReducer from './ShopListReducer';

export default combineReducers({
	ShopList: ShopListReducer
	//replaceme: ()=>5
});
