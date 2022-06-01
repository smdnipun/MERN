import React, { useState, useEffect } from 'react'
import NavBar from '../common/navBar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import Table from 'react-bootstrap/Table'

export default function ViewMarkingSchemes() {
  let params=useParams()
  const [data, setData] = useState([])
  const [scheudle,setSchedule]=useState([])
  const [test, setTest] = useState([])
  const [values, setValues] = useState({ val: [] })
  const [selectEvaluType,setEvaluType]=useState();
  // const [Comment, setComment]=useState({comm:[]});
  const [group, setGroupNo] = useState('')
  const [total, setTotal] = useState(0)
  let p = localStorage.getItem('userP')
  let s = localStorage.getItem('userS')
  const navigate = useNavigate()
  // console.log(group)
  const setVal = (e, i) => {
    let items = [data]
    let tot = 0

    if (Number.isNaN(e.target.value)) {
      items[0][i].mark = 0
      console.log(e.target.value)
    } else {
      items[0][i].mark = parseInt(e.target.value)
    }

    items[0].forEach((e) => {
      if (Number.isNaN(items[0][i].mark)) {
        items[0][i].mark = 0
        console.log(e.target.value)
      }
      tot += e.mark
    })

    if (tot > 50) {
      alert('please enter marks correctly')
      window.location('/')
    }
    // console.log(total)
    setTotal(tot)
  }

  // function handleChange(event) {
  //   let vals = [...values.val]
  //   vals[this] = event.target.value
  //   setValues({ val: [...values.val, ''] })
  // }

  //add marks into the marks 
  async function Submit(e) {
    e.preventDefault()
    
    if(e === 'Evaluation 1'){
      axios.put(`/mark/update/ev1/${params.gid}`, {
          total
       
  })
}

  else if (e ==='Evaluation 2') {

     
    }
    else if(e==="Document 1"){
     
  }
  else if(e==="Document 2"){
   
}
else if(e==="Final Document"){
    
  }
  }
  const handleFilterInput = (event) => {
    let value = event.target.va;
    setSelectedValue(value);
    props.handleRegionSearch(value);  
};
  //using loged users specalization and position filter the markingSceheme
  const loadData = () => {



   
      let id=params.gid
      axios.get(`http://localhost:5000/schedule/get/${id}`)
      .then(function (response) {
        setSchedule(response.data)
        console.log(response.data)
        
      })

  }

  const filter =(e)=>{
    if(e === 'Evaluation 1'){
      axios
      .post('http://localhost:5000/markingScheme/check', {
        specalization: s,
        position: p,
        evaluation:'Evaluation 1'
      })
      .then((res) => {
        setData(res.data)
        console.log(res.data)
        console.log(s, p)
      });

    }else if (e ==='Evaluation 2') {

      axios
      .post('http://localhost:5000/markingScheme/check', {
        specalization: s,
        position: p,
        evaluation:'Evaluation 2'
      })
      .then((res) => {
        setData(res.data)
        console.log(res.data)
        console.log(s, p)
      });

    }

      else if(e==="Final Evaluation"){
        axios
        .post('http://localhost:5000/markingScheme/check', {
          specalization: s,
          position: p,
          evaluation:'Final Evaluation'
        })
        .then((res) => {
          setData(res.data)
          console.log(res.data)
          console.log(s, p)
        });    
    }
    else if(e==="Document 1"){
      axios
      .post('http://localhost:5000/markingScheme/check', {
        specalization: s,
        position: p,
        evaluation:'Document 1'
      })
      .then((res) => {
        setData(res.data)
        console.log(res.data)
        console.log(s, p)
      });    
  }
  else if(e==="Document 2"){
    axios
    .post('http://localhost:5000/markingScheme/check', {
      specalization: s,
      position: p,
      evaluation:'Document 2'
    })
    .then((res) => {
      setData(res.data)
      console.log(res.data)
      console.log(s, p)
    });    
}
else if(e==="Final Document"){
  axios
  .post('http://localhost:5000/markingScheme/check', {
    specalization: s,
    position: p,
    evaluation:'Final Document'
  })
  .then((res) => {
    setData(res.data)
    console.log(res.data)
    console.log(s, p)
  });    
}

    


  }
  useEffect(() => {
    loadData()
    filter();
  }, [])

  

  function Marking(){

    return(
            <><Table>
        <tbody>
          <tr>
            <th>Criterion</th>
            <th>Very good</th>
            <th>Average</th>
            <th>Poor</th>
            <th>Mark</th>
          </tr>
    
          {data.map((markingScheme) => {
    
            return (
    
    
    
    
              <>
                <tr>
                  <td>{markingScheme.citerion}</td>
                  <td>{markingScheme.vgood}</td>
                  <td>{markingScheme.avg}</td>
                  <td>{markingScheme.poor}</td>
                  <td>{markingScheme.totMark}</td>
                </tr>
              </>
    
    
            )
          })}
        </tbody>
      </Table><form onSubmit={Submit}>
          {/* striped bordered hover variant="dark" */}
          <label>Group Number :</label>
          <input
            type='text'
            id='groupNo'
            value={params.gid}
            onChange={(e) => setGroupNo(e.target.value)} />
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
                          type='number'
                          onChange={(e) => setVal(e, index)} />
                      </td>
                    </tr>
                  </>
                )
              })}
              <tr>
                <td>Total Mark :</td>
                <td>
                  <input        
                    type='text'
                    value={total} />
                </td>
              </tr>
            </tbody>
          </Table>
          <button type='submit'>Submit marks</button>
        </form></>
          
        
      )
                }

  return (
    <>
    
      <NavBar />

      <div className='container'>
        <card>
          {scheudle.map((sch)=>{
            return(
              <>
                <ul>
              <li>Evaluation 1 :{sch.evaluation1} :<a href={sch.link1}/> 
              </li>
              <li>Evaluation 2 :{sch.evaluation2} : <a href={sch.link2}/>
              </li>
              <li>Final evaluation  :{sch.final_evaluation} : <a href={sch.linkF}/>
              </li>
            </ul>
              
              </>
            )
          })}
          
          
        </card>
      </div>
      <div className='container'>
     
     { localStorage.getItem('userP')=="Panel Member" ?(
       <>
            <div className="form-group">
      
      <select  value={selectEvaluType} onChange={e=>filter(e.target.value)} >
     {/* <select  class="form-select" value={specialization} onChange={(e) => setSpecialization(e.target.value)}> */}
     <option value="Evaluation 1">Evaluation 1</option>
     <option value="Evaluation 2">Evaluation 2</option>
     <option value="Final Evaluation">Final Evaluation</option>
     </select>
     </div>
       
       
       </>


     ):localStorage.getItem('userP')=="Supervisor" ?(
        <>
            <div className="form-group">
      
      <select  value={selectEvaluType} onChange={e=>filter(e.target.value)} >
     {/* <select  class="form-select" value={specialization} onChange={(e) => setSpecialization(e.target.value)}> */}
     <option value="Document 1">Document 1</option>
     <option value="Document 2">Document 2</option>
     <option value="Final Document">Final Document</option>
     </select>
     </div>
        </>
     ):(
       ""
     )  
}
 <br/><br/>

          <Marking/>
    </div>
    </>
  )
  
   
}


  
  
  

