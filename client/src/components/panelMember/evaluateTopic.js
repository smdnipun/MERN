import React, { useState } from 'react'
import NavBar from '../common/navBar'

const EvaluateTopice = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <card>
          <h3>Group ID :</h3>
          <p>topic :</p>
          <p>document</p>
          <textarea placeholder='Feedback' /> <br />
          <br />
          <button>Accept</button>
          <button>Reject</button>
        </card>
      </div>
    </>
  )
}

export default EvaluateTopice
