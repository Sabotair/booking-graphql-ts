import React from 'react'
import './Modal.css'
import { Apartments, Voucher } from '../../pages/BookingPage'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_APARTMENT } from '../../graphql/deleteCard/DeleteApartment'
import { DELETE_VOUCHER } from '../../graphql/deleteCard/DeleteVoucher'
import { GET_VOUCHERS } from '../../graphql/voucher/GetVouchers'
import { GET_APARTMENTS } from '../../graphql/apartment/GetApartments'
import { SORT_INTERVAL_DAY } from '../../graphql/filters/SortIntervalDay'
import { SORT_LOW_COST } from '../../graphql/filters/SortLowCostCard'
import { SORT_HIGHT_COST } from '../../graphql/filters/SortHigthCostCard'

interface IProps {
  apartment?: Apartments
  showModalWindow(): void
  voucher?: Voucher
}
interface IDelete {
  id: string
  userId?: string
}
interface IData {
  title: string
}
const Modal: React.FC<IProps> = ({ apartment, showModalWindow, voucher }) => {
  const token = useSelector<RootState>((state) => state.auth.token)
  const [deleteApartment] = useMutation<IData, IDelete>(DELETE_APARTMENT, {
    refetchQueries: [
      { query: GET_APARTMENTS },
      { query: SORT_INTERVAL_DAY },
      { query: SORT_LOW_COST },
      { query: SORT_HIGHT_COST },
    ],
  })
  const [deleteVoucher] = useMutation<IData, IDelete>(DELETE_VOUCHER, {
    refetchQueries: [{ query: GET_VOUCHERS }],
  })
  const userId = useSelector<RootState>((state) => state.auth.userId)

  const deleteApartmentCard = (
    e: React.MouseEvent<HTMLElement>,
    id: string
  ): void => {
    deleteApartment({ variables: { id, userId: String(userId) } })
    showModalWindow()
  }
  const deleteVoucherCard = (
    e: React.MouseEvent<HTMLElement>,
    id: string
  ): void => {
    deleteVoucher({
      variables: { id, userId: String(userId) },
    })
    showModalWindow()
  }

  return (
    <>
      {apartment && (
        <div className="modal">
          <div className="modal-content" key={apartment._id}>
            <img src={apartment.img} alt="" />
            <h1 className="modal__title">{apartment.title}</h1>
            <p>{apartment.description}</p>
            <p>Rooms: {apartment.rooms}</p>
            <p>Cost: {apartment.cost}$</p>
            <p>Interval: {apartment.interval}day</p>
            <div className="modal__action">
              <button
                className="btn btn--modal"
                onClick={() => showModalWindow()}
              >
                Close
              </button>
              {token && (
                <button
                  className="btn btn--modal"
                  onClick={(e) => deleteApartmentCard(e, apartment._id)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {voucher && (
        <div className="modal">
          <div className="modal-content" key={voucher._id}>
            <img src={voucher.img} alt="" />
            <h1 className="modal__title">{voucher.title}</h1>
            <p>{voucher.description}</p>
            <p>Variant: {voucher.variant}</p>
            <p>Cost: {voucher.cost}$</p>
            <p>Quantity: {voucher.quantity}</p>
            <div className="modal__action">
              <button
                className="btn btn--modal"
                onClick={() => showModalWindow()}
              >
                Close
              </button>
              {token && (
                <button
                  className="btn btn--modal"
                  onClick={(e) => deleteVoucherCard(e, voucher._id)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
