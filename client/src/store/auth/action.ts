import { IAuth } from './../models/IAuth'
import { LOGIN, LOGOUT } from '../constants/actionTypes'
import { AuthActionTypes } from './types'


//Actions
export const loginUser = (auth: IAuth): AuthActionTypes => {
  localStorage.setItem('jwtToken', auth.token)
  return {
  type: LOGIN,
  payload: auth,
}}

export const logoutUser = (auth: IAuth): AuthActionTypes => {
  localStorage.removeItem('jwtToken')
   return {
  type: LOGOUT,
  payload: auth, 
}}
