import {ACCESS_KEY, SECRET_KEY, CALLBACK_URL, ACCESS_PERMISSIONS,
        DO_LOGIN, SHOW_LOADER, HIDE_LOADER,
        GET_PHOTOS, MORE_PHOTOS,
        DO_LIKE, DO_UNLIKE
        } from '../constants'
import Unsplash, { toJson } from 'unsplash-js'


const unsplash = new Unsplash({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY,
  callbackUrl: CALLBACK_URL
}); // Экземпляр объекта для доступа к API

export const getAuth = () => {
  const authenticationUrl = unsplash.auth.getAuthenticationUrl(ACCESS_PERMISSIONS) // адрес
  window.location.assign(authenticationUrl) // отправляем
} // Авторизуемся - IndexPage



let count = 1 // начинаем с первой страницы

export const getToken = (code) => {
  return dispatch => { 
    dispatch(showLoader())
    unsplash.auth.userAuthentication(code)
      .then(toJson)
      .then((auth) => {
          unsplash.auth.setBearerToken(auth.access_token)
          dispatch(getPhotos())    
      })
    dispatch({ type: DO_LOGIN })
  }
} // Получаем токен

export const getPhotos = () => {
  return async dispatch => {
    unsplash.photos.listPhotos(count++, 10, 'latest')
    .then(toJson)
    .then((json) => {
      dispatch({ type: GET_PHOTOS, payload: json })
      dispatch(hideLoader())
    })
  }
} // Получаем страницу последних фото

export const morePhotos = () => {
  return async dispatch => {
    unsplash.photos.listPhotos(count++, 10, 'latest')
    .then(toJson)
    .then((json) => {
      dispatch({ type: MORE_PHOTOS, payload: json })
    });
  }
} // Получаем следующую страницу последних фото



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




