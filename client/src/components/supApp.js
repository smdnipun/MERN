import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AcceptTopic from './supervisour/acceptTopic'
import CoSupAcceptTopic from './supervisour/cAcceptTopic'
import SuppervisorDash from './supervisour/SuppervisorDash'

const SupApp = () => {
  return (
    <>
      <div>
        <Routes>
          <Route exact path={'/supDash'} element={<SuppervisorDash />} />
          <Route exact path={'/acceptTopic'} element={<AcceptTopic />} />
          <Route
            exact
            path={'/coSupAcceptTopic'}
            element={<CoSupAcceptTopic />}
          />
        </Routes>
      </div>
    </>
  )
}
export default SupApp
