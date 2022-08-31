import React from 'react'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../actions'
import { code } from '../actions/unsplash'
import Loader from '../components/Loader'


const AuthPage = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.app.isLogin)
  const loading = useSelector(state => state.app.loading)
  

  if (!isLogin) {
    dispatch(getToken(code))
  } // получаем токен
  
  if (loading) {
    return <Loader />
  } // про загрузке показываем лоадер
  
  return ( isLogin ? 
    <Redirect to='/' /> : <h4>Фотосток недоступен. Поробуйте позже.</h4>
  )
} // при успешной авторизации возвращаемся на главную

export default AuthPage
