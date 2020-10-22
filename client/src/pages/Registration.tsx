import React, { Fragment, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_USER } from '../graphql/Auth/CreateUser'

interface User {
  id: number
  email: string
  password: string
}
interface NewUser {
  email: string
  password: string
}

const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [isComplete, setComplete] = useState<boolean>(false)

  const [saveUser, { error, data }] = useMutation<
    { createUser: User },
    NewUser
  >(CREATE_USER, {
    variables: { email, password },
  })

  const postUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (error) {
      throw new Error('Post user error')
    }
    saveUser()
    setEmail('')
    setPassword('')
    setComplete(!isComplete)
  }
  if (data && data.createUser.email) {
    console.log(data.createUser.email)
  }

  return (
    <Fragment>
      {isComplete ? (
        <div className="complete">
          <h2 style={{ textAlign: 'center', margin: '100px 0' }}>
            Success registration
          </h2>
        </div>
      ) : (
        <form onSubmit={postUser}>
          <div className="registration__container">
            <div className="registration__block">
              <h1>Register</h1>
              <p>Please fill in this form to create an account.</p>
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
                Register
              </button>
            </div>
          </div>
        </form>
      )}
    </Fragment>
  )
}

export default Registration
