import { gql } from 'apollo-boost';

export const SORT_LOW_COST = gql `
 query{
    higherCostApartment{
        title
        description
        rooms
        img
        interval
        cost
    }
    higherCostVoucher{
        title
        description
        variant
        img
        quantity
        cost
    }
}
`