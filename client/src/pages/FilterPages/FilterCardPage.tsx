import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Select from '../../components/FilterNavigation/Select'
import { GET_APARTMENTS } from '../../graphql/apartment/GetApartments'
import { GET_VOUCHERS } from '../../graphql/voucher/GetVouchers'
import { ApartmentsData, VouchersData } from '../BookingPage'
import './FilterCardPage.css'

const ApartmentPage: React.FC = () => {
  const location = useLocation()
  const param = location.search.split('=')[1]

  const { data: dataApartment, loading } = useQuery<ApartmentsData>(
    GET_APARTMENTS,
    {
      skip: param === 'vouchers',
    }
  )
  const { data: dataVoucher } = useQuery<VouchersData>(GET_VOUCHERS, {
    skip: param === 'apartments',
  })

  return (
    <div className="filter__info">
      <Select />
      <Card
        dataApartment={dataApartment}
        dataVoucher={dataVoucher}
        loading={loading}
      />
    </div>
  )
}

export default ApartmentPage
