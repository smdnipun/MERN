import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function DisfilesAdmin(){

   const [data , setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/adminfile/get`)
            .then((res) => {
                setData(res.data)
            })
            .catch(function(error) {
                console.log(err)
            })
        }, [])

        return (
           <center>
               <h3>ADD New Assignments</h3>
            <div>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>File</th>
                </tr>

                {data.map((row) => {
                    return(
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.description}</td>
                            <td>{row.filepdf}</td>
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