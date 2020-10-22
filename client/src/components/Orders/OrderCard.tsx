import React from 'react'
import { IApartmentsData, IVouchersData } from '../../pages/OrderList'
import './OrderCard.css'

interface IGetOrderApartment {
  email: string
  fullName: string
  apartments: IApartmentsData[]
  vouchers: IVouchersData[]
}

interface IProp {
  apartment?: IGetOrderApartment[]
  voucher?: string
}

const OrderCard: React.FC<IProp> = ({ apartment }) => {
  return (
    <div className="container">
      <ul className="order__card">
        {apartment?.map((item) => (
          <div key={item.email + item.email}>
            {item.apartments.map((elem) => (
              <li
                className="order__info__card"
                key={elem.cost + elem.description}
              >
                <div className="order__info--elem">
                  <div className="order___image">
                    <img src={elem.img} alt="" />
                  </div>
                  <div className="order__text">
                    <h3>Apartment:</h3>
                    <p>
                      <b> Title:</b> {elem.title}
                    </p>
                    <p>
                      <b>Description:</b> {elem.description}
                    </p>
                    <p>
                      <b>Rooms:</b> {elem.rooms}
                    </p>
                    <p>
                      <b>Cost:</b> {elem.cost}
                    </p>
                    <p>
                      <b>Interval:</b> {elem.interval} day
                    </p>
                  </div>
                </div>

                <div
                  className="order__info__contact"
                  key={elem.cost + elem.description}
                >
                  <h3>Client contact</h3>
                  <p>
                    <b>Email:</b> {item.email}
                  </p>
                  <p>
                    <b>Full name:</b> {item.fullName}
                  </p>
                </div>
              </li>
            ))}

            {item.vouchers.map((elem) => (
              <li
                className="order__info__card"
                key={elem.cost + elem.description}
              >
                <div className="order__info--elem">
                  <div className="order___image">
                    <img src={elem.img} alt="" />
                  </div>
                  <div className="order__text">
                    <h3>Voucher:</h3>
                    <p>
                      <b> Title:</b> {elem.title}
                    </p>
                    <p>
                      <b>Description:</b> {elem.description}
                    </p>
                    <p>
                      <b>Variant:</b> {elem.variant}
                    </p>
                    <p>
                      <b>Cost:</b> {elem.cost}
                    </p>
                    <p>
                      <b>Quantity:</b> {elem.quantity}
                    </p>
                  </div>
                </div>

                <div
                  className="order__info__contact"
                  key={elem.cost + elem.description}
                >
                  <h3>Client contact</h3>
                  <p>
                    <b>Email:</b> {item.email}
                  </p>
                  <p>
                    <b>Full name:</b> {item.fullName}
                  </p>
                </div>
              </li>
            ))}
            <hr />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default OrderCard
