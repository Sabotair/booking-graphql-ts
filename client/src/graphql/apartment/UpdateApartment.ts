import { gql } from 'apollo-boost'

export const UPDATE_APARTMENT = gql`
  mutation update(
    $id: ID!
    $title: String!
    $description: String!
    $rooms: Float!
    $cost: Float!
    $img: String!
  ) {
    updateApartment(id: $id,
        updateApartment: {
        title: $title
        description: $description
        rooms: $rooms
        cost: $cost
        img: $img
      }
    ) {
      title
    }
  }
`
