import React from 'react'
import axios from 'axios'
import {Input, Button, Card} from 'antd'

class NewItem extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			itemname:'',
			description:'',
			quantity:''	,
			error:[]		
		}

		this.handleFieldChange=this.handleFieldChange.bind(this)
		this.handleCreateNewItem=this.handleCreateNewItem.bind(this)
		this.hasErrorFor = this.hasErrorFor.bind(this)
    	this.renderErrorFor = this.renderErrorFor.bind(this)
	}
	
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



  	hasErrorFor (field) {
    	return !!this.state.errors[field]
  	}

  	renderErrorFor (field) {
	    if (this.hasErrorFor(field)) {
	      return (
	        <span className='invalid-feedback'>
	          <strong>{this.state.errors[field][0]}</strong>
	        </span>
	      )
	    }
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

export default NewItem;