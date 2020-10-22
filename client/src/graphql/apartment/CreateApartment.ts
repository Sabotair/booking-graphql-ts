import { gql } from 'apollo-boost'

export const CREATE_APARTMENT = gql`
  mutation CreateApartment(
    $title: String!
    $description: String!
    $rooms: Float!
    $cost: Float!
    $img: String!
    $interval: Float!
    $attachment: String!
  
  ) {
    createApartments(
      inputApartment: {
        title: $title
        description: $description
        rooms: $rooms
        cost: $cost
        img: $img
        interval:$interval
        attachment: $attachment
      }
    ) {
      _id
      title
      description
      cost
      interval
      img
      rooms
    }
  }
`
