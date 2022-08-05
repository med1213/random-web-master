import React from 'react'
import { Link } from 'react-router-dom'
import Users from '../../jsondata/user.json'

const User = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary float-end"><Link to='/add-user'>add new User</Link></button>
            <table className="table table-responsive table-sm table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">User Role</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.fullname}</td>
                            <td>{item.username}</td>
                            <td>{item.phone}</td>
                            <td>{item.role}</td>
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

export default User