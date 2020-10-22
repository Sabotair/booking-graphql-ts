import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import OrderCard from '../components/Orders/OrderCard'
import { GET_ORDERS } from '../graphql/orders/GetAllOrders'

export interface IApartmentsData {
  title: string
  description: string
  rooms: number
  cost: number
  img: string
  interval: number
}

export interface IVouchersData {
  title: string
  description: string
  variant: string
  cost: number
  img: string
  quantity: number
}

interface IOrderApartment {
  getOrders: [
    {
      email: string
      fullName: string
      apartments: [IApartmentsData]
      vouchers: [IVouchersData]
    }
  ]
}

const OrderList: React.FC = () => {
  const { data, error } = useQuery<IOrderApartment>(GET_ORDERS)
  if (error) {
    throw error
  }

  return (
    <div>
      <OrderCard apartment={data?.getOrders} />
    </div>
  )
}

export default OrderList
