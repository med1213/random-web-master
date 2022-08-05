import React from 'react'

const AddPrize = () => {
  return (
    <div>AddPrize

      <form>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <label className="form-label">prize name</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <label className="form-label">prize type</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <label className="form-label">prize amount</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="formFile" className="form-label">prize image</label>
              <input className="form-control form-control-sm" type="file"/>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Add new prize</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddPrize