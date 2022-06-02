import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../common/navBar'

export default function Schedule() {
  const [data, setData] = useState([])

  const loadData = () => {
    axios.get('http://localhost:5000/group/').then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <NavBar />
      <table>
        <tr>
          <th>Group ID</th>
          <th>Leader</th>
          <th>specialization</th>
        </tr>
        {data.map((group, index) => {
          return (
            <tr>
              <td>{group.gid}</td>
              <td>{group.first}</td>
              <td></td>
              <NavLink
                to={`/groupSchedule/${group.gid}`}
                className='btn btn-outline-dark me-2'
              >
                Schedule
              </NavLink>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
