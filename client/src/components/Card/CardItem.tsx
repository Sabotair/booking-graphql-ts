import React, { Fragment, useState } from 'react'
import { Apartments, Voucher } from '../../pages/BookingPage'
import Modal from '../Modal/Modal'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import ModalOrders from '../Modal/ModalOrders'
import { Link } from 'react-router-dom'

interface IProps {
  apartment?: Apartments
  voucher?: Voucher
}

const CardItem: React.FC<IProps> = ({ apartment, voucher }) => {
  const [isShowModal, setShowModal] = useState<boolean>(false)
  const [isOrderModal, setOrderModal] = useState<boolean>(false)
  const showModalWindow = (): void => {
    setShowModal(!isShowModal)
  }
  const orderModalWindow = (): void => {
    setOrderModal(!isOrderModal)
  }
  const token = useSelector<RootState>((state) => state.auth.token)

  return (
    <Fragment>
      {apartment && (
        <div className="card__item" key={apartment._id}>
          {isShowModal ? (
            <Modal showModalWindow={showModalWindow} apartment={apartment} />
          ) : null}
          {isOrderModal ? (
            <ModalOrders
              orderModalWindow={orderModalWindow}
              apartment={apartment}
            />
          ) : null}

          <div className="card__logo">
            <img
              src={apartment.img}
              aria-hidden
              alt="Picture of me taking a photo of an image"
            />
          </div>
          <div className="card__info">
            <div className="card__title">
              <h2>{apartment.title}</h2>
            </div>
            <div className="card__rooms">Rooms: {apartment.rooms} </div>
            <div className="card__interval">
              Interval: {apartment.interval} day
            </div>
            <div className="card__cost">
              <b>{apartment.cost}$</b>
            </div>
            <div className="card__description">{apartment.description}</div>
            <div className="card__bottons">
              <button className="btn btn--succes" onClick={showModalWindow}>
                Detail{token && '/Delete'}
              </button>
              {!token && (
                <button className="btn btn--red" onClick={orderModalWindow}>
                  Reserve
                </button>
              )}
              {token && (
                <Link to={`/apartment/${apartment._id}`}>
                  <button className="btn btn--yellow">Edit</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {voucher && (
        <div className="card__item" key={voucher._id}>
          {isShowModal ? (
            <Modal showModalWindow={showModalWindow} voucher={voucher} />
          ) : null}
          {isOrderModal ? (
            <ModalOrders
              orderModalWindow={orderModalWindow}
              voucher={voucher}
            />
          ) : null}
          <div className="card__logo">
            <img
              src={voucher.img}
              aria-hidden
              alt="Picture of me taking a photo of an image"
            />
          </div>
          <div className="card__info">
            <div className="card__title">
              <h2>{voucher.title}</h2>
            </div>
            <div className="card__rooms"> Type: {voucher.variant}</div>
            <div className="card__quantity">Quantity: {voucher.quantity}</div>
            <div className="card__cost">
              <b>{voucher.cost}$</b>
            </div>
            <div className="card__description">{voucher.description}</div>
            <div className="card__bottons">
              <button className="btn btn--succes" onClick={showModalWindow}>
                Detail{token && '/Delete'}
              </button>
              {!token && (
                <button className="btn btn--red" onClick={orderModalWindow}>
                  Reserve
                </button>
              )}
              {token && (
                <Link to={`/voucher/${voucher._id}`}>
                  <button className="btn btn--yellow">Edit</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default CardItem
