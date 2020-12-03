import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Containers/HomePage/Homepage';
import Characters from '../Containers/Characters/Characters';
import Episodes from '../Containers/Episodes/Episodes';
import Locations from '../Containers/Locations/Locations';
import MyWatchList from '../Containers/MyWatchList/MyWatchList';

const Layout = () => {
  return (
    <Switch>
      <Route 
        path='/'
        exact
        render={() => <HomePage/>}
      />
      <Route 
        path='/characters'
        render={() => <Characters/>}
      />
      <Route
        path='/episodes'
        render={() => <Episodes/>}
      />
      <Route
        path='/locations'
        render={() => <Locations/>}
      />
      <Route
        path='/my-watch-list'
        render={() => <MyWatchList/>}
      />
    </Switch>
  )
}

export default Layout;