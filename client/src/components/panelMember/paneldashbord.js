import React, { useState } from 'react'

export default function PdashBoard() {
  const [data, setData] = useState([])

  const loadData = () => {
    let name = localStorage.getItem(UserN)
    axios
      .get(`http://localhost:5000/group/panel/${name}`)
      .then(function (response) {
        setData(response.data)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <card>
        <h2>Group ID:</h2>
        <h3>evaluation 1</h3>
        <button>View</button>
      </card>
    </div>
  )
}
