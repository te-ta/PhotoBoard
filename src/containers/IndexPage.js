import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, morePhotos } from '../actions' 
import PhotoList from '../components/PhotoList'


const IndexPage = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.app.isLogin)

  return (isLogin ? 
    <>
      <PhotoList /> 
      <button className='button-more' onClick={() => dispatch(morePhotos())}>ЕЩЕ БОЛЬШЕ ФОТО!</button>
    </> : 
    <div> 
      <h3 className='title'>Вы не залогинены</h3>
      <button className='button' onClick={getAuth}>Авторизоваться?</button> 
    </div>   
  )
}

export default IndexPage
