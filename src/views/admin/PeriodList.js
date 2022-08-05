import React from 'react'
import { Link } from 'react-router-dom'
import Periods from '../../jsondata/period.json'

const PeriodList = () => {
  return (
    <div>
      {/* {new Date().getFullYear()} */}
      <button type="button" className="btn btn-primary float-end mb-3"><Link to='/add-period'>add new period</Link></button>
      <table className="table table-responsive table-sm table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Period</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {Periods.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.period}</td>
              <td>{item.start_date}</td>
              <td>{item.end_date}</td>
              <td className=''>
                <button className='btn btn-info btn-sm me-2 py-0 px-1 text-white'>edit</button>
                <button className='btn btn-danger btn-sm py-0 px-1'>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PeriodList