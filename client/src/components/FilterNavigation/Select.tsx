import React from 'react'
import { useHistory } from 'react-router-dom'
import './Select.css'

const Select: React.FC = () => {
  let history = useHistory()

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    history.push(`/category?category=${e.target.value}`)
  }
  const handleCost = (e: React.ChangeEvent<HTMLSelectElement>) => {
    history.push(`/cost?cost=${e.target.value}`)
  }
  const handleInterval = (e: React.ChangeEvent<HTMLSelectElement>) => {
    history.push(`/interval?interval=${e.target.value}`)
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
            name="cost"
            id="cost"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleCost(e)
            }
          >
            <option value="*">Cost</option>
            <option value="higherCost">From more to less cost</option>
            <option value="lessCost">From less to more cost</option>
          </select>
        </div>
        <div className="select__item">
          <select
            name="interval"
            id="interval"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleInterval(e)
            }
          >
            <option value="*">Interval apartment day</option>
            <option value="higherInterval">From more to less days</option>
            <option value="lessInterval">From less to more days</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Select
