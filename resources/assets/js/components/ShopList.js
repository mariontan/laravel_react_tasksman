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
		//console.log(this.props.read());
	}

    render () {
		//const { shopList } = this.state

		console.log(this.props.ShopList)
		return(
			<div>render list with redux</div>
		);
	    
	    
      }
}

const mapStateToProps=(state)=>{
	return{ShopList: Object.values(state.ShopList)}//retruns an array of objects
}

export default connect(mapStateToProps,{read})(ShopList);

//export default ShopList;
