import { gql } from 'apollo-boost';

export const GET_APARTMENT = gql`
query getApartment($id: ID!) {
    getApartment(id:$id) {
        title
        description
        cost
        img
        rooms
    }
}
` 
