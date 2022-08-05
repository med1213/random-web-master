import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddPeriod = () => {
    const [startDate, setStartDate]=useState()
    const [endDate, setEndDate]=useState()
    return (
        <div>AddPeriod

            <form>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">Period</label>
                            <input type="text" className="form-control form-control-sm"  />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">Start Date</label>
                            {/* <input type="password" className="form-control form-control-sm" /> */}
                            <DatePicker className="form-control form-control-sm" selected={startDate} dateFormat="MM-dd-yyyy" onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">End Date</label>
                            {/* <input type="password" className="form-control form-control-sm" /> */}
                            <DatePicker className="form-control form-control-sm" selected={endDate} dateFormat="MM-dd-yyyy" onChange={(date) => setEndDate(date)} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary float-end">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddPeriod