import { gql } from 'apollo-boost';

export const DELETE_APARTMENT = gql`
    mutation deleteApartment($id: ID!, $userId: String!){
        deleteApartment(id: $id, userId: $userId) {
            title
        }
    }
`