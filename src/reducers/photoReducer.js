import { GET_PHOTOS, DO_LIKE, DO_UNLIKE } from '../constants'

const initialSate = {
  fetchedPhotos: []
}

export const photoReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, fetchedPhotos: state.fetchedPhotos.concat(action.payload) }
    case DO_LIKE:
      return { ...state, fetchedPhotos: state.fetchedPhotos.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              liked_by_user: true,
              likes: ++action.likes
            }
          }
          return item
        })
      }
    case DO_UNLIKE:
      return { ...state, fetchedPhotos: state.fetchedPhotos.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              liked_by_user: false,
              likes: --action.likes
            }
          }
          return item
        })
      } 

    default: return state
  }
}