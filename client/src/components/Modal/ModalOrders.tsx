import { useMutation } from '@apollo/react-hooks'
import React, { Fragment, useState } from 'react'
import { Apartments, Voucher } from '../../pages/BookingPage'
import { ADD_ORDER } from '../../graphql/orders/AddOrder'
import './Modal.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'

interface IProp {
  orderModalWindow(): void
  apartment?: Apartments
  voucher?: Voucher
}

interface IOrder {
  id: string
  email: string
  fullName: string
  apartments?: string
  vouchers?: string
}

interface INewOrder {
  id: string
  email: string
  fullName: string
  apartments?: string
  vouchers?: string
}

const ModalOrders: React.FC<IProp> = ({
  orderModalWindow,
  apartment,
  voucher,
}) => {
  const [email, setEmail] = useState<string>('')
  const [fullName, setFullName] = useState<string>('')
  const userId = useSelector<RootState>((state) => state.auth.userId)

  const [addOrder, { error }] = useMutation<{ addOrder: IOrder }, INewOrder>(
    ADD_ORDER
  )

  const handleOrder = () => {
    if (apartment) {
      addOrder({
        variables: {
          id: String(userId),
          email,
          fullName,
          apartments: apartment._id,
        },
      })
      setEmail('')
      setFullName('')
    }
    if (voucher) {
      addOrder({
        variables: {
          id: String(userId),
          email,
          fullName,
          vouchers: voucher._id,
        },
      })
      setEmail('')
      setFullName('')
    }
    if (error) {
      throw new Error(error.message)
    }
  }

  return (
    <Fragment>
      <div className="modal">
        <div className="modal-content">
          {apartment ? (
            <>
              <img src={apartment?.img} alt="" />
              <h1 className="modal__title">{apartment?.title}</h1>
              <p>{apartment?.description}</p>
              <p>Rooms: {apartment?.rooms} </p>
              <p>Cost {apartment?.cost}$</p>

              <div className="modal__order">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
                <label htmlFor="fullName">First name and Last name:</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullName(e.target.value)
                  }
                />
              </div>
            </>
          ) : (
            <>
              <img src={voucher?.img} alt="" />
              <h1 className="modal__title">{voucher?.title}</h1>
              <p>{voucher?.description}</p>
              <p>Type: {voucher?.variant}</p>
              <p>Cost {voucher?.cost}$</p>

              <div className="modal__order">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
                <label htmlFor="fullName">First name and Last name:</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullName(e.target.value)
                  }
                />
                {/* <label htmlFor="quantity">Quantity:</label>
                <input type="number" name="quantity" id="quantity" /> */}
              </div>
            </>
          )}

          <div className="modal__action">
            <button
              className="btn btn--modal"
              onClick={() => orderModalWindow()}
            >
              Close
            </button>

            <button className="btn btn--modal" onClick={handleOrder}>
              Order
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ModalOrders
