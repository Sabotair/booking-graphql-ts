import { IAuth } from './../models/IAuth'
import { LOGIN, LOGOUT } from '../constants/actionTypes'
import { AuthActionTypes } from './types'

//Actions
export const loginUser = (auth: IAuth): AuthActionTypes => ({
  type: LOGIN,
  payload: auth,
})

export const logoutUser = (auth: IAuth): AuthActionTypes => ({
  type: LOGOUT,
  payload: auth,
})
