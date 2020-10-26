import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { useLocation } from 'react-router-dom'
import SortCard from '../../components/Card/SortCard'
import Select from '../../components/FilterNavigation/Select'
import { SORT_HIGHT_COST } from '../../graphql/filters/SortHigthCostCard'
import { SORT_LOW_COST } from '../../graphql/filters/SortLowCostCard'
import { Apartments, Voucher } from '../BookingPage'

const FilterCost = () => {
  const location = useLocation()
  const param = location.search.split('=')[1]
  const { data: dataLow, loading } = useQuery<{
    lowCostVoucher: [Voucher]
    lowCostApartment: [Apartments]
  }>(SORT_LOW_COST, {
    skip: param === 'higherCost',
  })

  const { data: dataHight } = useQuery<{
    higherCostVoucher: [Voucher]
    higherCostApartment: [Apartments]
  }>(SORT_HIGHT_COST, {
    skip: param === 'lessCost',
  })

  return (
    <div className="filter__info">
      <Select />
      <SortCard dataLow={dataLow} loading={loading} />
      <SortCard dataHight={dataHight} loading={loading} />
    </div>
  )
}

export default FilterCost
