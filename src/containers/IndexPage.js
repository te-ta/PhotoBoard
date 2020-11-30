import React from 'react'
import { useSelector } from 'react-redux'
import { getAuth } from '../actions' 
import PhotoList from '../components/PhotoList'


const IndexPage = () => {
  const isLogin = useSelector(state => state.app.isLogin)

  return (isLogin ? 
    <PhotoList /> : 
    <div> 
      <h3 className='title'>Вы не залогинены</h3>
      <button className='button' onClick={getAuth}>Авторизоваться?</button> 
    </div>   
  )
}

export default IndexPage
