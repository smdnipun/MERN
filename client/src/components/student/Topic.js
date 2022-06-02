import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Topics(){

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
           
             <div>
                <div className = 'bod' style={{ maxWidth: 800, margin: "auto" }}>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>File</th>
                    </tr>

                    {data.map((row) => {
                        return(
                            <div>

                            <tr >
                            
                                Specialization : {row.specialization}<br/>
                                description:{row.description}<br/><br/>
                                Evaluation 1<br/>
                                Document Submition Date: {row.ev1doc}<br/>
                                <div>
                                    Precentation Submition Start Date: {row.ev1pre_start}&emsp;&emsp;
                                    Precentation Submition end Date: {row.ev1pre_end}<br/><br/>
                                </div>
                               
                                Evaluation 2<br/>
                                Document Submition Date: {row.ev2doc}<br/>
                                <div>
                                    Precentation Submition Start Date: {row.ev1doc}&emsp;&emsp;
                                    Precentation Submition end Date: {row.ev1doc}<br/><br/>
                                </div>
                                
                                Evaluation 3<br/>
                                Document Submition Date: {row.ev3doc}<br/>
                                <div>
                                    Precentation Submition Start Date: {row.ev1doc}&emsp;&emsp;
                                    Precentation Submition end Date: {row.ev1doc}<br/><br/>
                                </div>
                                
                                Document: {row.filepdf}<br/>

                            </tr>
                            <br/>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
           
        )
}