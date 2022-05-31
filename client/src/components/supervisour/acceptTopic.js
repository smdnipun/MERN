import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../common/navBar'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'

export default function AcceptTopic() {
  const [data, setData] = useState([])
  let sp = localStorage.getItem('userS')
  let sname = localStorage.getItem('userN')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/topic/${sp}`)
      .then((response) => {
        // console.log(data.length);
        setData(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const Update = (top) => {
    axios.post(`http://localhost:5000/topic/update/${top._id}`, {
      gid: top.gid,
      topic: top.topic,
      specialization: top.specialization,
      status: 'Accepted',
    })
  }

  return (
    <div>
      <NavBar />
      <div className='container'>
        <Table>
          <tbody>
            <tr>
              <th>Group ID</th>
              <th>Topic</th>
              <th>Accept/Reject</th>
            </tr>

            {data.map((topic) => {
              return (
                <>
                  {topic.status == 'pending' ? (
                    <tr>
                      <td>{topic.gid}</td>
                      <td>{topic.topic}</td>
                      <td>
                        <button
                          type='submit'
                          className='btn btn-primary'
                          onClick={Update(topic)}
                        >
                          Accept
                        </button>
                      </td>
                    </tr>
                  ) : (
                    ''
                  )}
                </>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}
