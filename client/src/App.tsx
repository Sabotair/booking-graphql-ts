import React from 'react'
import './App.css'
// import Footer from './components/Footer'
import MainNavigation from './components/Navigation/MainNavigation'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import BookingPage from './pages/BookingPage'
import Registration from './pages/Registration'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import { RootState } from './store/reducers'
import CreateCard from './pages/CreateCard'
import OrderList from './pages/OrderList'
import EditApartmentCard from './pages/EditApartment'
import EditVoucher from './pages/EditVoucher'
import FilterCardPage from './pages/FilterPages/FilterCardPage'

const App: React.FC = () => {
  const token = useSelector<RootState>((state) => {
    return state.auth.token
  })

  return (
    <BrowserRouter>
      <MainNavigation />
      <Switch>
        <Route component={BookingPage} path="/" exact />
        {token && <Redirect from="/login" to="/" exact />}
        {token && <Redirect from="/register" to="/" exact />}
        {!token && <Redirect from="/apartment" to="/" exact />}
        {!token && <Redirect from="/voucher" to="/" exact />}
        {!token && <Redirect from="/create" to="/" exact />}
        {!token && <Redirect from="/order" to="/" exact />}
        {!token && <Redirect from="/apartment/:id" to="/" exact />}
        {!token && <Redirect from="/voucher/:id" to="/" exact />}
        <Route component={Registration} path="/register" />
        <Route component={Login} path="/login" />
        <Route component={CreateCard} path="/create" />
        <Route component={OrderList} path="/order" />
        <Route component={EditApartmentCard} path="/apartment/:id" exact />
        <Route component={EditVoucher} path="/voucher/:id" exact />
        <Route component={FilterCardPage} path="/filter" exact />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
