import { IAuth } from './../models/IAuth'
import { AuthActionTypes } from './types'
import jwtDecode from 'jwt-decode'

const defaultState: IAuth = {
  userId: '',
  token: '',
  tokenExpiration: 0,
}
interface IDecode {
  userId: string
  exp: number
  token: string
}

if (localStorage.getItem('jwtToken')) {
  const decodedToken: IDecode = jwtDecode(
    localStorage.getItem('jwtToken') || ''
  )
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken')
  } else {
    defaultState.userId = decodedToken.userId
    defaultState.token = localStorage.getItem('jwtToken') || ''
    defaultState.tokenExpiration = 1
  }
}

export const authReducer = (
  state = defaultState,
  action: AuthActionTypes
): IAuth => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
        tokenExpiration: action.payload.tokenExpiration,
      }
    case 'LOGOUT':
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
        tokenExpiration: action.payload.tokenExpiration,
      }
    default:
      return state
  }
}
