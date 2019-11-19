import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';

import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'
import ShopList from './ShopList'
import NewItem from './NewItem'
import SingleItem from './SingleItem'
import reducers from '../reducers';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
            <Route path='/' exact component={ProjectsList} />
            <Route path='/shopList' exact component={ShopList}/>
            <Route path='/shoplistcreate' component={NewItem}/>
            <Route path='/create' component={NewProject} />
            <Route path='/project/:id' exact component={SingleProject} />
            <Route path='/shopitem/:id' exact component={SingleItem}/>
        </div>
      </BrowserRouter>
    )
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(
              reducers,
              composeEnhancers(applyMiddleware(reduxThunk))
              );

ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>,
                document.getElementById('app'))
/*
<Switch>

</Switch>
*/