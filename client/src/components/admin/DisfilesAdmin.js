import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DisfilesAdmin() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/adminfile/get`)
      .then((res) => {
        setData(res.data)
      })
      .catch(function (error) {
        console.log(err)
      })
  }, [])

  return (
    <center>
      <h3>ADD New Assignments</h3>
      <div>
        <tr>
          <th>Specialization</th>
          <th>Description</th>
          <th>File</th>
          <th>File</th>
          <th>File</th>
          <th>File</th>
          <th>File</th>
          <th>File</th>
          <th>File</th>
          <th>File</th>
          <th>File</th>
          <th>File</th>
        </tr>

        {data.map((row) => {
          0
          return (
            <tr>
              <td>{row.specialization}</td>
              <td>{row.description}</td>
              <td>{row.ev1doc}</td>
              <td>{row.ev1pre_start}</td>
              <td>{row.ev1pre_end}</td>
              <td>{row.ev2doc}</td>
              <td>{row.ev2pre_start}</td>
              <td>{row.ev2pre_end}</td>
              <td>{row.ev3doc}</td>
              <td>{row.ev3pre_start}</td>
              <td>{row.ev3pre_end}</td>
              <td>{row.filepdf}</td>
              <td>
                <button>update</button>
                <br />
                <button>delete</button>
              </td>
            </tr>

            // <tr >
            //     name : {row.nmae}
            //     description:{row.description}
            // </tr>
          )
        })}
      </div>
    </center>
  )
}
