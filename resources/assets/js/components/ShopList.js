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
	}

    render () {
		const  ShopList  = this.props.ShopList

		console.log(this.props)
	    const columns=[{
	    	title: 'ID',
	    	dataIndex: 'id',
	    	key: 'id',
	    	render: text =><a href='#'>{text}</a>
	    },{
			title: 'Item',
			dataIndex: 'itemname',
			key: 'itemname'
		},{
			title: 'Description',
			dataIndex: 'description',
			key: 'Description'
		},{
			title:'Quantity',
			dataIndex: 'quantity',
			key: 'quantity'
		},{
			title:'Action',
			key: 'action',
			render:(text, record)=>(
				<span>
					 <Button onClick={()=>this.onDelete(record.id)}>Delete</Button>
					 <Link to={`/shopitem/${record.id}`}>Update</Link>
				</span>
			)
		}]

	    return (
	    	<div>
	            <Link className='btn btn-primary btn-sm mb-3' to='/shoplistcreate'>
	              Create new item
	            </Link>

		    	<Table dataSource={ShopList} columns={columns}/>
	    	</div>
    );	    
	    
      }
}

const mapStateToProps=(state)=>{
	return{ShopList: Object.values(state.ShopList)}//retruns an array of object values
}

export default connect(mapStateToProps,{read})(ShopList);

