import React from 'react'

const Adduser = () => {
  return (
    <div>Adduser
      <form>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <label className="form-label">fullname</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <label className="form-label">username</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <label className="form-label">password</label>
              <input type="password" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <label className="form-label">confirm password</label>
              <input type="password" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <label className="form-label">phone number</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <label className="form-label">select user role</label>
              <select className="form-select form-select-sm">
                <option selected>select role</option>
                <option value="1">admin</option>
                <option value="2">employee</option>
                <option value="3">editor</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Create new user</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Adduser