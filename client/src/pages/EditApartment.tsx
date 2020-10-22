import React from 'react'
import EditApartmentCard from '../components/EditForm/EditApartmentCard'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_APARTMENT } from '../graphql/apartment/GetApartment'

interface IParam {
  id: string
}
export interface IApartmentEdit {
  title: string
  description: string
  cost: number
  img: string
  rooms: number
}

const EditCard: React.FC = () => {
  let { id } = useParams<IParam>()
  const { data: apartment } = useQuery<
    { getApartment: IApartmentEdit },
    IParam
  >(GET_APARTMENT, {
    variables: { id },
  })

  return <>{apartment && <EditApartmentCard id={id} apartment={apartment} />}</>
}

export default EditCard
