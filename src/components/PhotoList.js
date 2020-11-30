import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { morePhotos } from '../actions' 
import PhotoThumb from './PhotoThumb'


const PhotoList = () => {
  const dispatch = useDispatch()
  const photos = useSelector(state => state.photos.fetchedPhotos)

  return ( 
    <>
    <ul className='tumbs'>
      {photos.map((photo, i ) => <PhotoThumb photo={photo} key={i + photo.id} />)}
    </ul>
    <button className='button-more' onClick={() => dispatch(morePhotos())}>ЕЩЕ БОЛЬШЕ ФОТО!</button>
    </>
  )
}

export default PhotoList
