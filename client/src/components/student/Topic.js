import React, { useEffect, useState } from "react";
import axios from 'axios';
import NavBar from '../common/navBar';

export default function Topics(){

   const [data , setData] = useState([]);
   const sp = localStorage.getItem('userS')

    useEffect(() => {
        axios
            .get(`http://localhost:5000/adminfile/get/${sp}`)
            .then((res) => {
                setData(res.data)
            })
            .catch(function(error) {
                console.log(err)
            })
        }, [])

        return (
           
             <div>
                 <NavBar />
                <div className = 'bod' style={{ maxWidth: 800, margin: "auto" }}>
                    <h2 style={{margin : "auto"}}>Research Topic</h2>

                    {data.map((row) => {
                        return(
                        <div>
                            <tr >
                                 {row.specialization}<br/>
                                description:{row.description}<br /><br />
                                    
                                <div>
                                    Document: {row.filepdf}
                                    <form method="get" action={"http://localhost:5000/upload/"+row.filepdf}>
                                        <button type = "submit">Download</button>
                                    </form>
                                    <br/>
                                </div>
                                    
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

                            </tr>
                            <br/>
                        </div>
                        )
                    })}
                    
                </div>
            </div>
           
        )
}
