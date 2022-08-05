import React from 'react'
import winners from '../../jsondata/winner.json'

const WinnerList = () => {
  return (
    <div>
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
          {winners.map((item) => (
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

export default WinnerList