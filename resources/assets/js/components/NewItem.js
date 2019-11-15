import React from 'react'
import axios from 'axios'

class NewItem extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			itemname:'',
			description:'',
			quantity:''			
		}

		this.handleFieldChange=this.handleFieldChange.bind(this)
		this.handleCreateNewItem=this.handleCreateNewItem.bind(this)
	}
	handleFieldChange (event) {
	    this.setState({
	      [event.target.name]: event.target.value
	    })
	    //console.log(event.target.name)
	}
	handleCreateNewItem(){
		event.preventDefault();

		const {history}=this.props;

		const item = {
			itemname:this.state.itemname,
			description:this.state.description,
			quantity:this.state.quantity
		}
		console.log(item);
		// axios.post('/api/shoppingList',item).then(respose=>{
		// 	history.push('/')
		// });

	}
	render(){
		return(
	      <div className='container py-4'>
	        <div className='row justify-content-center'>
	          <div className='col-md-6'>
	            <div className='card'>
	              <div className='card-header'>Create new project</div>

	              <div className='card-body'>

	              	<form onSubmit={this.handleCreateNewItem}>

	                  <div className='form-group'>
	                    <label htmlFor='itemname'>Item</label>
	                    <input
	                      id='itemname'
	                      name='itemname'
	                      value={this.state.itemname}
	                      onChange={this.handleFieldChange}
	                    />
	                  </div>


	                  <div className='form-group'>
	                    <label htmlFor='description'>Item description</label>
	                    <textarea
	                      id='description'
	                      name='description'
	                      rows='10'
	                      value={this.state.description}
	                      onChange={this.handleFieldChange}
	                    />
	                  </div>

	                  <button className='btn btn-primary'>Create</button>
					</form>

	              </div>
	            </div>
	          </div>
	        </div>
		  </div>
		);		
	}
}

export default NewItem;