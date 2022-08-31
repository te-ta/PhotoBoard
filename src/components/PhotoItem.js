import React from 'react'
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux'
import PhotoDate from './PhotoDate'
import Likes from './Likes'


const PhotoItem = ({ match }) => {
  const { params: { photoId } } = match
  const isLogin = useSelector(state => state.app.isLogin)
  const photos = useSelector(state => state.photos.fetchedPhotos)
  const photo = photos.find(photo => photo.id === photoId)
  
  return ( isLogin ?
    <div className='item'>
      <div className='item__info'>
        <Likes photo={photo} />
        <button className='item__back' onClick={() => window.history.back()}>X</button>
        <a 
          href={photo.user.links.html} 
          className='item__author link' 
          rel='noreferrer noopener' 
          target='_blank'
        >{photo.user.username}</a>
        <span className='item__data'>
          <PhotoDate date={photo.created_at} />
        </span>
      </div>
      
      <img
        className='item__image'
        alt={photo.alt_description}
        src={photo.urls.regular}
      />
    </div> :
    <Redirect to='/' />
  ) // полноэкранное фото
}

export default PhotoItem