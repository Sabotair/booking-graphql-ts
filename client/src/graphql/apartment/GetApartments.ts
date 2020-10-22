import { gql } from 'apollo-boost'

export const GET_APARTMENTS = gql`
  query GetApartments {
    apartments {
      _id
      title
      description
      cost
      img
      rooms
      interval
    }
  }
`
