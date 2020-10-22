import { gql } from 'apollo-boost'

export const LOGIN_USER = gql`
  query loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`
