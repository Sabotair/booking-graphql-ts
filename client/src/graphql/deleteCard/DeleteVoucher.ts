import { gql } from 'apollo-boost';

export const DELETE_VOUCHER = gql`
    mutation deleteVoucher($id: ID!, $userId: String!){
        deleteVoucher(id: $id, userId: $userId ) {
            title
        }
    }
`