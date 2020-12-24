import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/authenticate/login/login'
import Start from './components/panel/panel_navegation/start/start'
import Pending from './components/panel/panel_navegation/pending/pending'
import Notice from './components/panel/panel_navegation/notice/notice'
import User from './components/panel/panel_navegation/user/user'
import { PrivateRouter } from './PrivateRouter'

export default function Routes() {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <PrivateRouter exact path='/panel' component={Start} />
      <PrivateRouter exact path='/pending' component={Pending} />
      <PrivateRouter exact path='/notice' component={Notice} />
      <PrivateRouter exact path='/user' component={User} />
    </Switch>
  )
}