import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'
import ShopList from './ShopList'
 

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          
            <Route path='/' exact component={ProjectsList} />
            <Route path='/shopList' exact component={ShopList}/>
            <Route path='/create' component={NewProject} />
            <Route path='/:id' component={SingleProject} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
/*
<Switch>

<Route exact path='/:id' component={SingleProject} />
</Switch>
*/