import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { useLocation } from 'react-router-dom'
import SortCard from '../../components/Card/SortCard'
import Select from '../../components/FilterNavigation/Select'
import { SORT_INTERVAL_DAY } from '../../graphql/filters/SortIntervalDay'
import { Apartments } from '../BookingPage'

const FilterIntervalDays = () => {
  const location = useLocation()
  const param = location.search.split('=')[1]
  const { data: dataInterval, loading, refetch } = useQuery<{
    higherInterval: [Apartments]
    lowInterval: [Apartments]
  }>(SORT_INTERVAL_DAY)

  const uptade = (): [Apartments] | undefined => {
    refetch()
    return param === 'higherInterval'
      ? dataInterval?.higherInterval
      : dataInterval?.lowInterval
  }

  return (
    <div className="filter__info">
      <Select />
      <SortCard dataInterval={uptade()} loading={loading} />
    </div>
  )
}

export default FilterIntervalDays
