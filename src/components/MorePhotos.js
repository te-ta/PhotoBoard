import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos, showLoader } from '../actions' 
import Loader from './Loader'


const MorePhotos = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.app.loading)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }) // слушаем скроллинг

  const handleScroll = () => {
    let isScrollBottom = window.innerHeight + document.documentElement.scrollTop === document.querySelector('.app').clientHeight // высота окна + скролл от верха(слушаем выше) равно высоте контейнера .app?
    
    if ( isScrollBottom === true && loading === false) { 
    dispatch(showLoader())
    dispatch(getPhotos())
    } 
  }

  return (loading ? <Loader /> : <p> </p>)
}

export default MorePhotos