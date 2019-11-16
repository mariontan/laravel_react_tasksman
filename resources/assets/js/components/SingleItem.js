import React from 'react'
import axios from 'axios'

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
	}
	
	componentDidMount(props){
		//console.log(this.props)
		const id = this.props.match.params.id
		axios.get(`/api/shoppingList/${id}`).then(response=>{
			//console.log(response.data)
			this.setState({
				id: response.data.id,
				itemname: response.data.itemname,
				description: response.data.description,
				quantity: response.data.quantity
			})
			//console.log(this.state)
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
		 axios.post(`/api/shoppingList/${this.state.id}`,item).then(()=>{
		 	history.push('/shopList')
		 }).catch(error=>{
		 	console.log(error)
		 })

	}
	render(){
		//console.log(this.state);
		return(
	      <div className='container py-4'>
	        <div className='row justify-content-center'>
	          <div className='col-md-6'>
	            <div className='card'>
	              <div className='card-header'>Create new project</div>

	              <div className='card-body'>

	              	<form onSubmit={this.handleUpdate}>

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

	                  <div className='form-group'>
	                    <label htmlFor='quantity'>quantity</label>
	                    <textarea
	                      id='quantity'
	                      name='quantity'
	                      value={this.state.quantity}
	                      onChange={this.handleFieldChange}
	                    />
	                  </div>


	                  <button className='btn btn-primary'>Update</button>
					</form>

	              </div>
	            </div>
	          </div>
	        </div>
		  </div>
		);		
	}
}

export default SingleItem;