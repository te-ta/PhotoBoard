import { DO_LOGIN, SHOW_LOADER, HIDE_LOADER } from '../constants'

const initialSate = {
  isLogin: false,
  loading: false
}

export const appReducer = (state = initialSate, action) => {
  switch (action.type) {
    case DO_LOGIN:
      return { ...state, isLogin: true }
    case SHOW_LOADER:
      return { ...state, loading: true }
    case HIDE_LOADER:
      return { ...state, loading: false }
    default: return state
  }
}