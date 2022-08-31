import React from 'react'
import { Link } from 'react-router-dom'
import PhotoDate from './PhotoDate'

const PhotoThumb = ({ photo }) => {
  let tumbLikes = photo.liked_by_user ? 'tumb__like' : 'tumb__unlike' 

  return (
    <li className='tumb'>
      <Link to={`/photos/${photo.id}`} className='tumb__cover tumb__hide'></Link>
      <div className='tumb__info tumb__hide'>
        <div className={tumbLikes}>{photo.likes}</div>
        <a 
          href={photo.user.links.html} 
          className='tumb__author link' 
          rel='noreferrer noopener' 
          target='_blank'
        >{photo.user.username}</a>
      </div>
      <span className='tumb__data tumb__hide'>
        <PhotoDate date={photo.created_at} />
      </span>
      <img
        className='tumb__image'
        alt={photo.alt_description}
        src={photo.urls.small}
      />
    </li>
  ) // экзнмпляр превью фото
}

export default PhotoThumb