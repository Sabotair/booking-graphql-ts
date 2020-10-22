import { gql } from 'apollo-boost';

export const GET_VOUCHER = gql`
query get($id: ID!) {
    getVoucher(id:$id) {
        title
        description
        cost
        img
        variant
    }
}
` 
