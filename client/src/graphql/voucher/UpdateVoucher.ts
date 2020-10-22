import { gql } from 'apollo-boost'

export const UPDATE_VOUCHER = gql`
  mutation update(
    $id: ID!
    $title: String!
    $description: String!
    $variant: String!
    $cost: Float!
    $img: String!
  ) {
    updateVoucher(id: $id,
      updateVoucher: {
        title: $title
        description: $description
        variant: $variant
        cost: $cost
        img: $img
      }
    ) {
      title
    }
  }
`
