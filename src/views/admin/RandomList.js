import React from 'react'
import { Link } from 'react-router-dom'
import Randoms from '../../jsondata/random.json'

const RandomList = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary float-end"><Link to='/add-random'>add new Random</Link></button>
      <table className="table table-responsive table-sm table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">bill number</th>
            <th scope="col">bill price</th>
            <th scope="col">phone number</th>
            <th scope="col">village</th>
            <th scope="col">district</th>
            <th scope="col">province</th>
          </tr>
        </thead>
        <tbody>
          {Randoms.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.bill_number}</td>
              <td>{item.bill_price}</td>
              <td>{item.phone}</td>
              <td>{item.village}</td>
              <td>{item.district}</td>
              <td>{item.province}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default RandomList