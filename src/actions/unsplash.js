import {ACCESS_KEY, 
        SECRET_KEY, 
        CALLBACK_URL, 
        ACCESS_PERMISSIONS
      } from '../constants'
import Unsplash from 'unsplash-js'


export const unsplash = new Unsplash({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY,
  callbackUrl: CALLBACK_URL
}) // Экземпляр объекта для доступа к API

export const getAuth = () => {
  const authenticationUrl = unsplash.auth.getAuthenticationUrl(ACCESS_PERMISSIONS) // адрес
  window.location.assign(authenticationUrl) // отправляем
} // Авторизуемся - IndexPage

export const code = window.location.search.split('code=')[1] // получаем код из адресной строки

export const getBgImg = () => {
    unsplash.photos.getRandomPhoto()
    .then(res => res.json())
    .then(json => {
      document.body.style.background=`url(${json.urls.regular}) no-repeat center`
    })
} // фото для IndexPage