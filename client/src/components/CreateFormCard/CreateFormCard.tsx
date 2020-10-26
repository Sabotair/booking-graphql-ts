import React, { useState } from 'react'
import './CreateFormCard.css'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_APARTMENT } from '../../graphql/apartment/CreateApartment'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { CREATE_VOUCHER } from '../../graphql/voucher/CreateVoucher'
import { GET_APARTMENTS } from '../../graphql/apartment/GetApartments'
import { GET_VOUCHERS } from '../../graphql/voucher/GetVouchers'
import { SORT_INTERVAL_DAY } from '../../graphql/filters/SortIntervalDay'
import { SORT_LOW_COST } from '../../graphql/filters/SortLowCostCard'
import { SORT_HIGHT_COST } from '../../graphql/filters/SortHigthCostCard'

interface IApartment {
  id: number
  title: string
  description: string
  rooms: number
  cost: number
  img: string
  interval: number
  attachment: string
}
interface IVoucher {
  id: number
  title: string
  description: string
  variant: string
  cost: number
  img: string
  quantity: number
  attachment: string
}

interface INewApartment {
  title: string
  description: string
  rooms: number
  cost: number
  img: string
  interval: number
  attachment: string
}

interface INewVoucher {
  title: string
  description: string
  variant: string
  cost: number
  img: string
  quantity: number
  attachment: string
}

const Apartment: React.FC = () => {
  const [isApartment, setApartment] = useState<boolean>(true)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [rooms, setRooms] = useState<number>(Number)
  const [cost, setCost] = useState<number>(Number)
  const [img, setImage] = useState<string>('')
  const [variant, setVariant] = useState<string>('')
  const [interval, setInterval] = useState<number>(Number)
  const [quantity, setQuantity] = useState<number>(Number)

  const userId = useSelector<RootState>((state) => state.auth.userId)

  const [saveApartment, { error }] = useMutation<
    { createApartments: IApartment },
    INewApartment
  >(CREATE_APARTMENT, {
    refetchQueries: [
      { query: GET_APARTMENTS },
      { query: SORT_INTERVAL_DAY },
      { query: SORT_LOW_COST },
      { query: SORT_HIGHT_COST },
    ],
  })

  const [saveVoucher] = useMutation<{ createVoucher: IVoucher }, INewVoucher>(
    CREATE_VOUCHER,
    {
      refetchQueries: [
        { query: GET_VOUCHERS },
        { query: SORT_INTERVAL_DAY },
        { query: SORT_LOW_COST },
        { query: SORT_HIGHT_COST },
      ],
    }
  )
  const defaultValue = (): void => {
    setTitle('')
    setDescription('')
    setRooms(Number)
    setCost(Number)
    setImage('')
    setVariant('')
    setInterval(Number)
    setQuantity(Number)
  }

  const createCard = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (error) {
      console.log(error)
    }
    if (isApartment) {
      saveApartment({
        variables: {
          title,
          cost,
          description,
          img,
          interval,
          rooms,
          attachment: String(userId),
        },
      })
      defaultValue()
    }
    if (!isApartment) {
      saveVoucher({
        variables: {
          title,
          cost,
          description,
          img,
          variant,
          quantity,
          attachment: String(userId),
        },
      })
      defaultValue()
    }
  }
  return (
    <div className="form__container">
      <h2 className="form__title">
        Create {isApartment ? 'Apartment' : 'Voucher'}
      </h2>
      <hr />
      <form onSubmit={createCard} className="form__inner">
        <label className="form__label" htmlFor="title">
          Title:
        </label>
        <input
          className="form__input"
          type="text"
          id="title"
          name="title"
          required
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <label className="form__label" htmlFor="price">
          Price:
        </label>
        <input
          className="form__input"
          type="text"
          id="price"
          required
          name="price"
          value={cost}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCost(+e.target.value)
          }
        />
        {isApartment ? (
          <>
            <label className="form__label" htmlFor="room">
              Rooms:
            </label>
            <input
              className="form__input"
              type="text"
              id="room"
              required
              name="room"
              value={rooms}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRooms(+e.target.value)
              }
            />
            <label className="form__label" htmlFor="interval">
              Interval Days:
            </label>
            <input
              className="form__input"
              type="text"
              id="interval"
              required
              name="interval"
              value={interval}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInterval(+e.target.value)
              }
            />
          </>
        ) : (
          <>
            <label className="form__label" htmlFor="variant">
              Variant:
            </label>
            <select
              className="form__select"
              id="variant"
              value={variant}
              required
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setVariant(e.target.value)
              }
            >
              <option value="">.....</option>
              <option value="restaurant">Restaurant</option>
              <option value="club">Club</option>
              <option value="museum">Museum</option>
              <option value="cinema">Сinema</option>
            </select>

            <label className="form__label" htmlFor="quantity">
              Quantity:
            </label>
            <input
              className="form__input"
              type="text"
              id="Quantity"
              name="Quantity"
              required
              value={quantity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuantity(+e.target.value)
              }
            />
          </>
        )}
        <label className="form__label" htmlFor="descriptions">
          Descriptions:
        </label>
        <input
          className="form__input"
          type="text"
          id="descriptions"
          name="descriptions"
          required
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />

        <label className="form__label" htmlFor="img">
          Image URL:
        </label>
        <input
          className="form__input"
          type="text"
          id="img"
          name="img"
          required
          value={img}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImage(e.target.value)
          }
        />

        <button className="btn btn--yellow" type="submit">
          Submit
        </button>
        <button
          className="btn btn--red"
          type="button"
          onClick={() => setApartment(!isApartment)}
        >
          Switch to {isApartment ? 'Voucher' : 'Apartment'}
        </button>
      </form>
    </div>
  )
}

export default Apartment
