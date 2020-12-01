import React from 'react'
import { useSelector } from 'react-redux'
import PhotoThumb from './PhotoThumb'


const PhotoList = () => {
  const photos = useSelector(state => state.photos.fetchedPhotos)

  return ( 
    <ul className='tumbs'>
      {photos.map((photo, i ) => <PhotoThumb photo={photo} key={i + photo.id} />)}
    </ul>
  )
}

export default PhotoList

