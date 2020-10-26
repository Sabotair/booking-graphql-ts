import { gql } from 'apollo-boost'

export const SORT_HIGHT_COST = gql`
  query {
    higherCostApartment {
      _id
      title
      description
      rooms
      img
      interval
      cost
    }
    higherCostVoucher {
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
