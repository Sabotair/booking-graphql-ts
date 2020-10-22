import { gql } from 'apollo-boost';


export const GET_LOW_COST = gql`
query {
    getLowCost {
    title
    description
    cost
  }
}
` 