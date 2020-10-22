import { IAuth } from './../models/IAuth'
import { AuthActionTypes } from './types'

const defaultState: IAuth = {
  userId: '',
  token: '',
  tokenExpiration: 0,
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
