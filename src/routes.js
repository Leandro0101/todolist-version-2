import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/authenticate/login/login'
import Register from './components/authenticate/register/register'
import Start from './components/panel/panel_navegation/start/start'
import Pending from './components/panel/panel_navegation/pending/pending'
import Notice from './components/panel/panel_navegation/notice/notice'
import User from './components/panel/panel_navegation/user/user'
import { PrivateRouter } from './PrivateRouter'

export default function Routes() {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRouter exact path='/' component={Start} />
      <PrivateRouter exact path='/pending' component={Pending} />
      <PrivateRouter exact path='/notice' component={Notice} />
      <PrivateRouter exact path='/user' component={User} />
    </Switch>
  )
}