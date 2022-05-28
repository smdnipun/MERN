import React, { useState, useEffect } from "react";
import NavBar from "../common/navBar";
import axios from "axios";
import { useNavigate } from "react-router";
import Table from "react-bootstrap/Table";


export default function ViewMarkingSchemes() {
  const [data, setData] = useState([]);
  const [values, setValues] = useState({ val: [] });
  // const [Comment, setComment]=useState({comm:[]});
  const [group,setGroupNo]=useState('');
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  console.log(group)
  const setVal = (e, i) => {
    let items = [data];
    let tot = 0;
    if (e.target.value == "") {
      items[0][i].mark = 0;
    } else {
      items[0][i].mark = parseInt(e.target.value);
    }

    items[0].forEach((e) => {
      tot += e.mark;
    });

    if(tot>50){
      alert('please enter marks correctly')
      window.location('/')
    }
    console.log(total)
    setTotal(tot);
  };
  
  function handleChange(event) {
    let vals = [...values.val];
    vals[this] = event.target.value;
    setValues({ val: [...values.val, ""] });

  }



    async function Submit(e){
      e.preventDefault();
    

    const newItem={
      group,
      total,
    

    }
    axios

      .post('http://localhost:5000/marks/add', newItem)

      .then((res) => console.log(res.data))

  }

  const loadData = () => {
    axios
      .get("http://localhost:5000/markingScheme/")
      .then((response) => {
        // console.log(response.data);
        // console.log(data.length);
        if (data.length == 0) {
          setData(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <Table>
          <tbody>
            <tr>
              <th>Criterion</th>
              <th>Very good</th>
              <th>Average</th>
              <th>Poor</th>
              <th>Mark</th>
            </tr>

            {data.map((markingScheme,index) => {
              return (
                <tr>
                  <td>{markingScheme.citerion}</td>
                  <td>{markingScheme.vgood}</td>
                  <td>{markingScheme.avg}</td>
                  <td>{markingScheme.poor}</td>
                  <td>{markingScheme.totMark}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <form onSubmit={Submit}>
          {/* striped bordered hover variant="dark" */}
          <label>Group Number :</label>
          <input type='text' id="groupNo" 
          onChange={(e)=>setGroupNo(e.target.value)}/>
          <Table>
            <thead>
              <tr>
                <th>Citerion</th>
                {/* <th>Comment</th> */}
                <th>Mark</th>
              </tr>
            </thead>
            <tbody>
              {/* here */}
              {data.map((markingScheme, index) => {
                return (
                  <>
                    <tr>
                      <td>{markingScheme.citerion}</td>
                      {/* <td>
                        <input type='text'
                         onChange={(e)=>setComm(e,index)} />
                      </td> */}
                      <td>
                        <input
                          type="number"
                          onChange={(e) => setVal(e, index)}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
              <tr>
               
                <td>Total Mark    :</td>
                <td>
                  <input
                    type="text"
                    value={total}
                    onChange={(e) => setData(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <button type="submit">Submit marks</button>
        </form>
      </div>
    </div>
  );
}