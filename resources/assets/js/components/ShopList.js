import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, List, Card, Table, Icon, Divider} from 'antd'
import {connect} from 'react-redux';
import {read} from '../actions'

class ShopList extends React.Component{
	constructor(){
		super()

		this.state={
			shopList: []
		}
		//this.onDelete=this.onDelete.bind(this);
	}

	componentDidMount(){
		this.props.read();
		// axios.get('/api/shoppingList').then(response=>{
		// 	this.setState({
		// 		shopList: response.data
		// 	})
		// })
		console.log(this.props);
	}

    render () {
    	console.log('hello world')
		//const { shopList } = this.state

		//console.log(shopList)
		return(
			<div>render list with redux</div>
		);
	    
	    
      }
}

// const mapStateToProps=(state)=>{
// 	return{shoplist: Object.values(state.shoplist)}
//}

export default connect(null,{read})(ShopList);

//export default ShopList;
