import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SdashBoard from './student/sDashBoard'
import Creategroups from './student/Creategroups'
import StudentDash from './student/sDashBoard'
import Registertopic from './student/Registertopic'
import ViewMyGroup from './student/ViewMyGroup'
import RequestCoSupervisor from './student/reqCoSupervisor'
import Topics from './student/Topic'

const StudentApp = () => {
  return (
    <>
      <div>
        <Routes>
          <Route exact path={'/sDash'} element={<SdashBoard />} />
          <Route exact path={'/addgrp'} element={<Creategroups />} />
          <Route exact path={'/regtop'} element={<Registertopic />} />
          <Route exact path={'/grp'} element={<ViewMyGroup />} />
          <Route exact path={'/reqCo'} element={<RequestCoSupervisor />} />
          <Route exact path={'/sDash'} element={<StudentDash />} />
          <Route exact path={'/topic'} element={<Topics />} />
        </Routes>
      </div>
    </>
  )
}
export default StudentApp

