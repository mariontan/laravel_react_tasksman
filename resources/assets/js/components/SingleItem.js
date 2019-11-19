import React from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm}  from 'redux-form'
import axios from 'axios';
import {Input, Button, Card} from 'antd';
import 'antd/dist/antd.css';

import {update,read_item} from '../actions'

class SingleItem extends React.Component{
	constructor(props){
		super(props);

		this.state={
			itemname: '',
			description: '',
			quantity: ''
		};

		this.handleUpdate=this.handleUpdate.bind(this);
		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}
	
	componentDidMount(props){
		//console.log(this.props)
		const id = this.props.match.params.id
//		console.log(id);
		this.props.read_item(id);
		const response = this.props.ShopList
		this.setState({
			id: response.id,
			itemname: response.itemname,
			description: response.description,
			quantity: response.quantity
		})		
	}

	handleFieldChange(event){
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(event.target.name)
		console.log(event.target.value)
	}

	handleUpdate(event){
		event.preventDefault();

		const {history} = this.props;

		const item ={
			itemname: this.state.itemname,
			description: this.state.description,
			quantity: this.state.quantity
		}
		console.log(this.state.id);
		this.props.update(this.state.id, item)

	} 

	onDelete(){
		// console.log('delete')
		// console.log(this.state.id)
		axios.delete(`/api/shoppingList/${this.state.id}`).then(()=>{
			console.log(`deleted`);
			history.push('/shopList')
		}).catch(error=>{
			console.log(error);
			console.log(this.state.id);
		});
	}

	render(){
		//console.log(this.state);
		const{TextArea} = Input;
		return(
	      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
	        <Card 
	      		bordered
	      		title='Edit'
	      		style={{width: 500}}
      		>
	              <div className='card-body'>

	              	<form onSubmit={this.handleUpdate}>

	                  <div className='form-group'>
	                    <label htmlFor='itemname'>Item</label>
	                    <Input
	                      id='itemname'
	                      name='itemname'
	                      value={this.state.itemname}
	                      onChange={this.handleFieldChange}
	                    />
	                  </div>

	                  <div className='form-group'>
	                    <label htmlFor='description'>Item description</label>
	                    <TextArea
	                      id='description'
	                      name='description'
						  type='textarea'
						  rows={4}	                      
	                      value={this.state.description}
	                      onChange={this.handleFieldChange}
	                    />
	                  </div>

	                  <div className='form-group'>
	                    <label htmlFor='quantity'>quantity</label>
	                    <Input
	                      id='quantity'
	                      name='quantity'
	                      type='textarea'
	                      value={this.state.quantity}
	                      onChange={this.handleFieldChange}
	                    />
	                  </div>


	                  <button className='btn btn-primary'>Update</button>

					</form>
	
	              </div>
	       	</Card>
		  </div>
		);		
	}
}

const mapStateToProps = (state,ownProps) =>{
	return{ShopList: state.ShopList[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{update,read_item})(SingleItem);