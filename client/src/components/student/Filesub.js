import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../common/navBar";

export default function Filesub() {

    const [data, setData] = useState([]);
    const [ev1doc, setEv1doc] = useState([]);
    const [ev2doc, setEv2doc] = useState([]);
    const [ev3doc, setEv3doc] = useState('');

    const sp = localStorage.getItem('userS')

    const onChangeFile = e => {
        setEv1doc(e.target.files[0]);
        setEv2doc(e.target.files[0]);
        setEv3doc(e.target.files[0]);
    }

    const changeonClickev1 = (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("ev1doc", ev1doc);

        axios
            .post("/ev1/add", formData)
            .then((res) => {
                setMessage(res.data);
                navi("/addfiles");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const changeonClickev2 = (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("ev2doc", ev2doc);

        axios
            .post("/ev2/add", formData)
            .then((res) => {
                setMessage(res.data);
                navi("/addfiles");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const changeonClickev3 = (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("ev3doc", ev3doc);

        axios
            .post("/ev3/add", formData)
            .then((res) => {
                setMessage(res.data);
                navi("/addfiles");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/adminfile/get/${sp}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div >
            <NavBar />
            <div className='bod' style={{ maxWidth: 800, margin: "auto" }}>
                <br></br>
                <h3>Submition</h3>
                {data.map((row) => {
                    return (
                        <div>
                            <form onSubmit={changeonClickev1} encType="multipart/form-data" >

                                    {/* Evalution 1 */}
                                    <div className="form-group">
                                        <label>Evaluation 1 :</label><br />
                                        <div style={{ maxWidth: 700, margin: "auto" }}>
                                            <label>Document Submition:</label><br />
                                            <label>Deadline befor:{row.ev1doc}</label>
                                            <input
                                                type="file" multiple
                                                filename="ev1doc"
                                                onChange={onChangeFile}
                                                className="form-control" />
                                    </div>
                                      <button className="btn" 
                                              type="submit" 
                                              variant="primary"
                                              size="lg"
                                                        > 
                                                ADD
                                        </button>  
                                    </div><br></br>
                            </form>
                            <form onSubmit={changeonClickev2} encType="multipart/form-data" >
                                   {/* Evalution 2 */}
                                <div className="form-group"> 
                                    <label>Evaluation 2 :</label><br/>
                                    <div style={{ maxWidth: 700, margin: "auto" }}>
                                        <label>Document Submition:</label><br/>
                                        <label>Deadline befor:{row.ev2doc}</label>
                                        <input 
                                            type="file"  multiple
                                            filename="ev2doc"
                                            onChange={onChangeFile}
                                            className="form-control"/>
                                    </div>
                                    <button className="btn" 
                                              type="submit" 
                                              variant="primary"
                                              size="lg"
                                                        > 
                                                ADD
                                        </button>  
                                </div><br></br>
                            </form>
                            <form onSubmit={changeonClickev3} encType="multipart/form-data" >
                                  {/* Evalution 3 */}
                                <div className="form-group"> 
                                    <label>Evaluation 3 :</label><br/>
                                    <div style={{ maxWidth: 700, margin: "auto" }}>
                                        <label>Document Submition:</label><br/>
                                        <label>Deadline befor:{row.ev3doc}</label>
                                        <input 
                                            type="file"  multiple
                                            filename="ev3doc"
                                            onChange={onChangeFile}
                                            className="form-control"/>
                                    </div>
                                    <button className="btn" 
                                              type="submit" 
                                              variant="primary"
                                              size="lg"
                                                        > 
                                                ADD
                                        </button>  
                                </div><br></br>
                            </form>
                        </div>
                    )
                })}
            </div>
            <br /><br />
        </div>
    )
}