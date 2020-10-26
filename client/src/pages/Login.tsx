import { useLazyQuery } from '@apollo/react-hooks'
import React, { useEffect, useState } from 'react'
import { LOGIN_USER } from '../graphql/Auth/LoginUser'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/auth/action'

interface AuthLogin {
  email: string
  password: string
}
interface AuthLoginData {
  userId: string
  token: string
  tokenExpiration: number
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const dispatch = useDispatch()
  const [checkUser, { data }] = useLazyQuery<
    { login: AuthLoginData },
    AuthLogin
  >(LOGIN_USER)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    checkUser({
      variables: { email, password },
    })
  }

  useEffect(() => {
    if (
      data &&
      data.login.userId &&
      data.login.token &&
      data.login.tokenExpiration
    ) {
      dispatch(
        loginUser({
          userId: data.login.userId,
          token: data.login.token,
          tokenExpiration: data.login.tokenExpiration,
        })
      )
    }
  }, [data, dispatch])

  return (
    <form onSubmit={handleLogin}>
      <div className="registration__container">
        <div className="registration__block">
          <h1>Login</h1>
          <p>Please enter your email and password.</p>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />

          <hr />
          <button type="submit" className="registerbtn">
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default Login
