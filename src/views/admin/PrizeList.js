import React from 'react'
import { Link } from 'react-router-dom'
import Prizes from '../../jsondata/prize.json'

const PrizeList = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary float-end my-3"><Link to='/add-prize'>add new Prize</Link></button>
      <table className="table table-responsive table-sm table-striped table-hover">
        <thead className='table-dark'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Images</th>
            <th scope="col">type</th>
            <th scope="col">Amounts</th>
          </tr>
        </thead>
        <tbody>
          {Prizes.map((item) => (
            <tr key={item.id}>
              <td className='text-center'>{item.id}</td>
              <td>{item.prizename}</td>
              {/* <td><img src={item.image} alt="" /></td> */}
              <td>{item.image}</td>
              <td>{item.prizetype}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PrizeList