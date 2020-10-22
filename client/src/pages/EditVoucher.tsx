import React from 'react'
import { GET_VOUCHER } from '../graphql/voucher/GetVoucher'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import EditVoucherCard from '../components/EditForm/EditVoucherCard'
interface IParam {
  id: string
}

export interface IVoucherEdit {
  title: string
  description: string
  cost: number
  img: string
  variant: string
}
const EditVoucher = () => {
  let { id } = useParams<IParam>()

  const { data: voucher } = useQuery<{ getVoucher: IVoucherEdit }, IParam>(
    GET_VOUCHER,
    {
      variables: { id },
    }
  )
  return <>{voucher && <EditVoucherCard id={id} voucher={voucher} />}</>
}

export default EditVoucher
