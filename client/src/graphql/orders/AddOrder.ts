import {gql} from 'apollo-boost';


export const ADD_ORDER = gql`
mutation AddOrder($id: ID!,$email: String!, $fullName: String!, $apartments: String, $vouchers: String) {
    addOrder(id: $id, inputOrder: { email: $email, fullName: $fullName,
     apartments: $apartments, vouchers:$vouchers}){
        email
    }
}
`