import { gql } from 'apollo-boost'

export const GET_VOUCHERS = gql`
  query GetVoucher {
    vouchers {
      _id
      title
      description
      cost
      img
      variant
      quantity
    }
  }
`
