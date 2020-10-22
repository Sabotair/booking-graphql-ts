import React, { Fragment } from 'react'
import Card from '../components/Card/Card'
import { useQuery } from '@apollo/react-hooks'
import { GET_APARTMENTS } from '../graphql/apartment/GetApartments'
import { GET_VOUCHERS } from '../graphql/voucher/GetVouchers'
import FilterNavigaation from '../components/FilterNavigation/FilterNavigaation'

export interface Apartments {
  _id: string
  title: string
  description: string
  cost: number
  img: string
  rooms: number
  interval: number
}

export interface Voucher {
  _id: string
  title: string
  description: string
  cost: number
  img: string
  quantity: number
  variant: string
}

export interface ApartmentsData {
  apartments: Apartments[]
}
export interface VouchersData {
  vouchers: Voucher[]
}

const BookingPage: React.FC = () => {
  const { data: dataApartment, loading } = useQuery<ApartmentsData>(
    GET_APARTMENTS
  )
  const { data: dataVoucher } = useQuery<VouchersData>(GET_VOUCHERS)

  return (
    <Fragment>
      <FilterNavigaation />
      <Card
        dataApartment={dataApartment}
        loading={loading}
        dataVoucher={dataVoucher}
      />
    </Fragment>
  )
}

export default BookingPage
