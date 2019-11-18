import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, List} from 'antd'
class ShopList extends React.Component{
	constructor(){
		super()

		this.state={
			shopList: []
		}
		this.onDelete=this.onDelete.bind(this);
	}

	componentDidMount(){
		axios.get('/api/shoppingList').then(response=>{
			this.setState({
				shopList: response.data
			})
		})
	}

	onDelete(id){
		// console.log('delete')
		//console.log(id)
		const {history} = this.props;
		axios.delete(`/api/shoppingList/${id}`).then(()=>{
			console.log(`deleted`);
			history.push('/shopList')
		}).catch(error=>{
			console.log(error);
			console.log(this.state.id);
		});
	}

    render () {
		const { shopList } = this.state
		//console.log(this.state)
	    return (
	      <div className='container py-4'>
	        <div className='row justify-content-center'>
	          <div className='col-md-8'>
	            <div className='card'>
	              <div className='card-body'>
	                <Link className='btn btn-primary btn-sm mb-3' to='/shoplistcreate'>
	                  Create new item
	                </Link>
	                <List
	                	 header = {<div> Shopping List</div>}
	                	bordered>
	                  {shopList.map(item => (
	                  	<div>
		                    <Link
		                      className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
		                      to={`/shopitem/${item.id}`}
		                      key={item.id}>
		                      {item.itemname}
		                      <span className='badge badge-primary badge-pill'>
		                        {item.quantity}
		                      </span>
		                    </Link>
		                    <Button type='danger' onClick={()=>this.onDelete(item.id)}>Delete</Button>
	                    </div>
	                  ))}
	                </List>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
    );
      }
}

export default ShopList;