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
		this.handleFieldChange = this.handleUpdate.bind(this);
	}
	
	componentDidMount(props){
		//console.log(this.props)
		const id = this.props.match.params.id
		axios.get(`/api/shoppingList/${id}`).then(response=>{
			//console.log(response.data)
			this.setState({
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
	}

	handleUpdate(event){
		event.prevetDefault();


	}
	render(){
		console.log(this.state);
		return(
			<div>enter item</div>
		);
	}
}

export default SingleItem;