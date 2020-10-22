import React from 'react'
import { useHistory } from 'react-router-dom'
import './Select.css'

const Select: React.FC = () => {
  let history = useHistory()
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    history.push(`/filter?category=${e.target.value}`)
  }
  const handleCost = (e: React.ChangeEvent<HTMLSelectElement>) => {
    history.push(`/filter?cost=${e.target.value}`)
  }
  return (
    <div className="container">
      <div className="select__inner">
        <div className="select__item">
          <select
            name="category"
            id="category"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleFilter(e)
            }
          >
            <option value="*">Category</option>
            <option value="apartments">Apartments</option>
            <option value="vouchers">Vouchers</option>
          </select>
        </div>
        <div className="select__item">
          <select
            name="category"
            id="category"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleCost(e)
            }
          >
            <option value="*">Cost</option>
            <option value="higherCost">Higher cost</option>
            <option value="lessCost">Less cost</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Select
