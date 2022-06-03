import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AcceptTopic from './supervisour/acceptTopic'
import CoSupAcceptTopic from './supervisour/cAcceptTopic'


const SupApp = () => {
  return (
    <>
      <div>
        <Routes>
         
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
