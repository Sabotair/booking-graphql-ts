import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GET_APARTMENTS } from '../../graphql/apartment/GetApartments'
import { UPDATE_APARTMENT } from '../../graphql/apartment/UpdateApartment'
import { IApartmentEdit } from '../../pages/EditApartment'
import './EditFormCard.css'

interface IProp {
  apartment: { getApartment: IApartmentEdit }
  id: string
}
interface IUpdateApartment extends IApartmentEdit {
  id: string
  title: string
  description: string
  cost: number
  img: string
  rooms: number
}

const EditFormCard: React.FC<IProp> = ({ apartment, id }) => {
  const [title, setTitle] = useState<string>(apartment.getApartment.title)
  const [description, setDescription] = useState<string>(
    apartment.getApartment.description
  )
  const [cost, setCost] = useState<number>(apartment.getApartment.cost)
  const [img, setImage] = useState<string>(apartment.getApartment.img)
  const [rooms, setRooms] = useState<number>(apartment.getApartment.rooms)

  const [updateApartment] = useMutation<IApartmentEdit, IUpdateApartment>(
    UPDATE_APARTMENT
  )
  const history = useHistory()
  const handleEditCard = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    updateApartment({
      variables: {
        id,
        title,
        description,
        cost,
        img,
        rooms,
      },
      refetchQueries: [{ query: GET_APARTMENTS }],
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
          <label htmlFor="rooms">Rooms</label>
          <input
            type="number"
            name="rooms"
            id="rooms"
            value={rooms}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRooms(+e.target.value)
            }
          />
          <button type="submit" className="btn btn--modal">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditFormCard
