import React, { Fragment } from 'react'
import { ApartmentsData, VouchersData } from '../../pages/BookingPage'
import CardItem from './CardItem'

interface TitleProps {
  dataApartment?: ApartmentsData
  dataVoucher?: VouchersData
  loading: boolean
}
const Card = ({ dataApartment, loading, dataVoucher }: TitleProps) => {
  return (
    <Fragment>
      <div className="container">
        <div className="card__container">
          {loading ? (
            <h1 style={{ textAlign: 'center' }}>Loading........</h1>
          ) : (
            dataApartment?.apartments.map((apartment) => (
              <CardItem key={apartment._id} apartment={apartment} />
            ))
          )}
          {dataVoucher?.vouchers.map((voucher) => (
            <CardItem key={voucher._id} voucher={voucher} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Card
