import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../views/admin/Home'
import RandomList from '../views/admin/RandomList'
import WinnerList from '../views/admin/WinnerList'
import PrizeList from '../views/admin/PrizeList'
import PeriodList from '../views/admin/PeriodList'
import PageNotFond from '../views/admin/pagenotfond/PageNotFond'
import User from '../views/admin/User'
import AddPeriod from '../views/admin/AddPeriod'
import AddRandom from '../views/admin/AddRandom'
import AddPrize from '../views/admin/AddPrize'
import AddUser from '../views/admin/Adduser'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/period' element={<PeriodList />} />
        <Route path='/random-list' element={<RandomList />} />
        <Route path='/winner-list' element={<WinnerList />} />
        <Route path='/prize' element={<PrizeList />} />
        <Route path='/user' element={<User />} />
        <Route path='/add-period' element={<AddPeriod />} />
        <Route path='/add-random' element={<AddRandom />} />
        <Route path='/add-prize' element={<AddPrize />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path='/404' element={<PageNotFond />} />
      </Routes>
    </div>
  )
}

export default Routers