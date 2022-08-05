import React from 'react'

const AddRandom = () => {
  return (
    <div>
        AddRandom
        <form>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control form-control-sm"  />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">Bill number</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">Bill price</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">phone number</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">village</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">district</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">province</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary float-end">SAVE</button>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default AddRandom