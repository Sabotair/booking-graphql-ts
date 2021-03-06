import { gql } from 'apollo-boost'

export const SORT_LOW_COST = gql`
  query {
    lowCostApartment {
      _id
      title
      description
      rooms
      img
      interval
      cost
    }
    lowCostVoucher {
      _id
      title
      description
      variant
      img
      quantity
      cost
    }
  }
`
