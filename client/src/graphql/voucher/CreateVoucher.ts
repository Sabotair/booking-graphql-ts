import { gql } from 'apollo-boost'

export const CREATE_VOUCHER = gql`
  mutation CreateVoucher(
    $title: String!
    $description: String!
    $variant: String!
    $cost: Float!
    $img: String!
    $quantity: Float!
    $attachment: String!
  ) {
    createVoucher(
      inputVoucher: {
        title: $title
        description: $description
        variant: $variant
        cost: $cost
        img: $img
        quantity:$quantity
        attachment: $attachment
      }
    ) {
      _id
      title
      description
      cost
      img
      quantity
      variant
    }
  }
`
