import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GET_VOUCHERS } from '../../graphql/voucher/GetVouchers'
import { UPDATE_VOUCHER } from '../../graphql/voucher/UpdateVoucher'
import { IVoucherEdit } from '../../pages/EditVoucher'
import './EditFormCard.css'

interface IProp {
  voucher: { getVoucher: IVoucherEdit }
  id: string
}
interface IUpdateVoucher extends IVoucherEdit {
  id: string
  title: string
  description: string
  cost: number
  img: string
  variant: string
}

const EditFormCard: React.FC<IProp> = ({ voucher, id }) => {
  const [title, setTitle] = useState<string>(voucher.getVoucher.title)
  const [description, setDescription] = useState<string>(
    voucher.getVoucher.description
  )
  const [cost, setCost] = useState<number>(voucher.getVoucher.cost)
  const [img, setImage] = useState<string>(voucher.getVoucher.img)
  const [variant, setVariant] = useState<string>(voucher.getVoucher.variant)

  const [updateVoucher] = useMutation<IVoucherEdit, IUpdateVoucher>(
    UPDATE_VOUCHER
  )
  const history = useHistory()

  const handleEditCard = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    updateVoucher({
      variables: {
        id,
        title,
        cost,
        img,
        variant,
        description,
      },
      refetchQueries: [{ query: GET_VOUCHERS }],
    })
    history.goBack()
  }
  return (
    <div className="form__edit__container">
      <div className="form__edit">
        <h2>Edit Apartment</h2>
        <form onSubmit={handleEditCard}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            name="cost"
            id="cost"
            value={cost}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCost(+e.target.value)
            }
          />
          <label htmlFor="img">Image</label>
          <input
            type="text"
            name="img"
            id="img"
            value={img}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.value)
            }
          />
          <label htmlFor="variant">Variant</label>
          <select
            className="form__select"
            id="variant"
            value={variant}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setVariant(e.target.value)
            }
          >
            <option value="restaurant">Restaurant</option>
            <option value="club">Club</option>
            <option value="museum">Museum</option>
            <option value="cinema">Сinema</option>
          </select>
          <button type="submit" className="btn btn--modal">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditFormCard
