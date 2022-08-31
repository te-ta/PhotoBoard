import React from 'react'
import { useSelector } from 'react-redux'
import PhotoThumb from './PhotoThumb'
import MorePhotos from './MorePhotos'


const PhotoList = () => {
  const photos = useSelector(state => state.photos.fetchedPhotos)

  return ( 
  <div className='container'>
    <ul className='tumbs'>
      {photos.map((photo, i ) => <PhotoThumb photo={photo} key={i + photo.id} />)}
    </ul>
    <MorePhotos />
  </div> ) // мапим превьюшки и ф-ция бесконечной прокрутки
}

export default PhotoList

