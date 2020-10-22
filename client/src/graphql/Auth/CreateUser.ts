import { gql } from 'apollo-boost'

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(inputUser: { email: $email, password: $password }) {
      email
    }
  }
`
