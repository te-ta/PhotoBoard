import React from 'react'
import {useDispatch} from 'react-redux'
import {toggleLike} from '../actions'


const Likes = ({ photo }) => { 
  const dispatch = useDispatch()
  let classLikes = photo.liked_by_user ? 'item__like do-unlike' : 'item__like do-like' 

  return <button 
          className={classLikes} 
          onClick={() => dispatch(toggleLike( photo.id, photo.liked_by_user, photo.likes))}
          >{photo.likes}</button> // кнопка и кол-во лайков на большом фото - PhotoItem
}

export default Likes