import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Head from './components/Header/Head'
import Home from './components/Home'
import App from './components/App'
import Book from './book/Book'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Head}>
        <IndexRoute component={Home} />
        <Route path='app' component={App}/>
        <Route path='book/:id' component={Book} />
      </Route>
    </Router>
  )
}