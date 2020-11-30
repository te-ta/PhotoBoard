import React from 'react'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../actions'
import Loader from '../components/Loader'

const code = window.location.search.split('code=')[1];


const AuthPage = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.app.loading)
  const isLogin = useSelector(state => state.app.isLogin)

  if (!isLogin) {
    dispatch(getToken(code))
  }
  
  if (loading) {
    return <Loader />
  } 
  
  return ( isLogin ? 
    <Redirect to='/' /> : <h4>Фотосток недоступен. Поробуйте позже.</h4>
  )
} 

export default AuthPage
