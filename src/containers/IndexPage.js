import React from 'react'
import { useSelector } from 'react-redux'
import { getAuth, getBgImg } from '../actions/unsplash' 
import PhotoList from '../components/PhotoList'


const IndexPage = () => {
  const isLogin = useSelector(state => state.app.isLogin)

  return (isLogin ? 
    <PhotoList /> : 
    <div className='wrapper'> 
      <h1 className='title'>PhotoBoard</h1>
      <h2 className='subtitle'>- бесконечный поток фотографий -</h2>
      <button className='button' onClick={getAuth}>Войти</button> 
      {getBgImg()}
    </div>   
  )
} // Авторизоваться или показать фото

export default IndexPage
