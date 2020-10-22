import {gql} from 'apollo-boost';


export const GET_ORDERS = gql`
query GetOrders {
    getOrders{
        email
        fullName
        apartments{
            title
            description
            cost
            rooms
            img
            interval
        }
        vouchers{
            title
            description
            cost
            variant
            img
            quantity
        }
    }
}
`