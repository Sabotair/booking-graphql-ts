import { LOGIN, LOGOUT } from '../constants/actionTypes'
import { IAuth } from './../models/IAuth'

interface ILogin {
  type: typeof LOGIN
  payload: IAuth
}
interface ILogout {
  type: typeof LOGOUT
  payload: IAuth
}

export type AuthActionTypes = ILogin | ILogout
