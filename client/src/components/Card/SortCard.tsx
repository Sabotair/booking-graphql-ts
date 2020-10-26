import React, { Fragment } from 'react'
import { Apartments, Voucher } from '../../pages/BookingPage'
import CardItem from './CardItem'

interface ILowCost {
  lowCostApartment: [Apartments]
  lowCostVoucher: [Voucher]
}

interface IHightCost {
  higherCostApartment: [Apartments]
  higherCostVoucher: [Voucher]
}

interface TitleProps {
  dataLow?: ILowCost
  dataHight?: IHightCost
  dataInterval?: [Apartments]
  loading: boolean
}
const SortCard = ({ dataLow, dataHight, dataInterval }: TitleProps) => {
  return (
    <Fragment>
      <div className="container">
        <div className="card__container">
          {dataLow?.lowCostApartment.map((apartment) => (
            <CardItem key={apartment._id} apartment={apartment} />
          ))}

          {dataLow?.lowCostVoucher.map((voucher) => (
            <CardItem key={voucher._id} voucher={voucher} />
          ))}
        </div>
        <div className="card__container">
          {dataHight?.higherCostApartment.map((apartment) => (
            <CardItem key={apartment._id} apartment={apartment} />
          ))}

          {dataHight?.higherCostVoucher.map((voucher) => (
            <CardItem key={voucher._id} voucher={voucher} />
          ))}
        </div>
        <div className="card__container">
          {dataInterval?.map((apartment) => (
            <CardItem key={apartment._id} apartment={apartment} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default SortCard
