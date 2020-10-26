import { gql } from 'apollo-boost'

export const SORT_INTERVAL_DAY = gql`
  query {
    lowInterval {
      _id
      title
      description
      rooms
      img
      interval
      cost
    }
    higherInterval {
      _id
      title
      description
      rooms
      img
      interval
      cost
    }
  }
`
