import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import component from 'react-redux'
import axios from 'axios'
import {Input, Button, Card} from 'antd'

import {create} from '../actions'

class NewItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			itemname:'',
			description:'',
			quantity:''	,
			error:[]		
		}
		
		this.renderInput=this.renderInput.bind(this);
		this.handleFieldChange=this.handleFieldChange.bind(this)
		this.handleCreateNewItem=this.handleCreateNewItem.bind(this)

	}

	renderError({error,touched}){
		if(touched && error){
			return(
				<div className-="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput({input,label, meta}){
		const className= `filed${meta.error && meta.touched ? 'error':''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off"/>
				{this.renderError(meta)}
			</div>
		);
	}
	//
	handleFieldChange (event) {
	    this.setState({
	      [event.target.name]: event.target.value
	    })
	    //console.log(event.target.name)
	    //console.log(event.target.value)
	}
	handleCreateNewItem(event){
		event.preventDefault();

		const {history}=this.props;

		const item = {
			itemname:this.state.itemname,
			description:this.state.description,
			quantity:this.state.quantity
		}
		console.log(item);
		this.props.create(item);

	}

	render(){
		const{TextArea} = Input;
		return(
	     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
	        <Card 
	      		bordered
	      		title='Edit'
	      		style={{width: 500}}
      		>
	              <div className='card-header'>Create new project</div>

	              <div className='card-body'>

	              	<form onSubmit={this.handleCreateNewItem}>

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
	                      value={this.state.quantity}
	                      onChange={this.handleFieldChange}
	                    />
	                  </div>


	                  <button className='btn btn-primary'>Create</button>
					</form>

	              </div>
	        </Card>
		  </div>
		);	
	}
}
//
const validate =(formValues)=>{
	const errors ={};

	if(!formValues.itemname){
		errors.itemname = 'You must enter a title';
	}
	if(!formValues.description){
		errors.description='enter description'
	}
	if(!formValues.quantity){
		errors.quantity='enter quantity'
	}
	return errors;
};

const formWrapped = reduxForm({
	form: 'NewItem'
})(NewItem);

export default connect(null,{create})(formWrapped);

//export default NewItem;


/*
	      	<form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
	      		<Field name = 'itemname' component={this.renderInput} label='item'/>
	      		<Field name = 'description'  component={this.renderInput} label='description'/>
	      		<Field name = 'quantity' component ={this.renderInput} label='quantity'/>
	          	<button className='btn btn-primary'>Create</button>
			</form>
*/

































/*

// constructor(props){
	// 	super(props);

	// 	this.state = {
	// 		itemname:'',
	// 		description:'',
	// 		quantity:''	,
	// 		error:[]		
	// 	}

	// 	this.handleFieldChange=this.handleFieldChange.bind(this)
	// 	this.handleCreateNewItem=this.handleCreateNewItem.bind(this)
	// 	this.hasErrorFor = this.hasErrorFor.bind(this)
 //    	this.renderErrorFor = this.renderErrorFor.bind(this)
	// }
	
	

handleFieldChange (event) {
	    this.setState({
	      [event.target.name]: event.target.value
	    })
	    //console.log(event.target.name)
	    //console.log(event.target.value)
	}
	handleCreateNewItem(event){
		event.preventDefault();

		const {history}=this.props;

		const item = {
			itemname:this.state.itemname,
			description:this.state.description,
			quantity:this.state.quantity
		}
		console.log(item);
		axios.post('/api/shoppingList', item).then(response=>{
			history.push('/shopList')
		}).catch(error => {
	        console.log(error)
		})

	}
render(){
		const{TextArea} = Input;
		return(
	     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
	        <Card 
	      		bordered
	      		title='Edit'
	      		style={{width: 500}}
      		>
	              <div className='card-header'>Create new project</div>

	              <div className='card-body'>

	              	<form onSubmit={this.handleCreateNewItem}>

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
	                      value={this.state.quantity}
	                      onChange={this.handleFieldChange}
	                    />
	                  </div>


	                  <button className='btn btn-primary'>Create</button>
					</form>

	              </div>
	        </Card>
		  </div>
		);		
	}
*/