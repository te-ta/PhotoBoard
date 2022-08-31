import {DO_LOGIN, SHOW_LOADER, HIDE_LOADER,
        GET_PHOTOS, DO_LIKE, DO_UNLIKE
        } from '../constants'
import { unsplash } from './unsplash'


export const getToken = (code) => {
  return dispatch => { 
    dispatch(showLoader())
    unsplash.auth.userAuthentication(code)
    .then(res => res.json())
    .then(json => {
          unsplash.auth.setBearerToken(json.access_token)
          dispatch(getPhotos())    
      })
    dispatch({ type: DO_LOGIN })
  }
} // Получаем токен и подгружаем первую стр. фото


let count = 1 // начинаем с первой страницы
export const getPhotos = () => {
  return async dispatch => {
    unsplash.photos.listPhotos(count++, 10, 'latest')
    .then(res => res.json())
    .then(json => {
      dispatch({ type: GET_PHOTOS, payload: json })
      dispatch(hideLoader()) // после(!) отключаем лоадер 
    })
  }
} // Получаем страницу последних фото


export const toggleLike = (id, islike, likes) => {
  if (islike) {
    unsplash.photos.unlikePhoto(id) 
    return dispatch => { 
      dispatch({ type: DO_UNLIKE, id, likes })
    }
  } else {
    unsplash.photos.likePhoto(id) 
    return dispatch => { 
      dispatch({ type: DO_LIKE, id, likes })
    }
  }
} // ставим и снимаем лайки


export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
} // Показываем лоадер пока не получены изображения


export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
} // Скрываем лоадер фото получены




