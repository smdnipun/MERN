import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NavBar from '../common/navBar';


const GroupSchedule = () => {

let params = useParams();
  const [data, setData] = useState([ ] );
  const [evaluation1,setEv1]=useState('');
  const [evaluation2,setEv2]=useState('');
  const [link1,setLink1]=useState('');
  const [link2,setLink2]=useState('');
  const [linkF,setLinkF]=useState('');
  const [final_evaluation,setFinalEv]=useState('');
  

  const loadData=()=>{
    let p=(params.gid)
    axios.get(`http://localhost:5000/group/get/${p}`)
    .then(function (response) {
      setData(response.data)
      console.log(response.data)
      
    })

  }

  useEffect(() => {
   loadData()
  }, []);




  async function Submit(e){
    e.preventDefault();
    const Obj={

      groupID:(params.gid),
      evaluation1,
      evaluation2,
      final_evaluation,
      link1,
      link2,
      linkF


    }
  

  axios.post('http://localhost:5000/schedule/add',Obj)

    .then((res) => console.log(res.data))

    alert("Succesfully Scheduled")

}

  
    return (
      <>
      <NavBar/>
      <div className='container'>
        {data.map((group)=>{
          return(
            <>
            <form className='container' onSubmit={Submit}>
             

            <h3>Group Id:{group.gid}</h3>
            <br/><br/>
            <label>Evaluation 1 :</label>
            <input type='date'
            value={evaluation1}
            onChange={e=>setEv1(e.target.value)}
            /><br/><br/>
            <label>Link :</label>
              <input type='text' 
              value={link1}
              onChange={e=>setLink1(e.target.value)}
              />
            <br/><br/>
            <label>Evaluation 2 :</label>
            <input type='date'
             value={evaluation2}
             onChange={e=>setEv2(e.target.value)}
            /><br/><br/>
            <label>Link :</label>
            <input type='text'  
            value={link2}
            onChange={e=>setLink2(e.target.value)}
            />
            <br/><br/>
            <label>Final Evaluation :</label>
            <input type='date'
               value={final_evaluation}
               onChange={e=>setFinalEv(e.target.value)}
            
            /><br/><br/>
            <label>Link :</label>
            <input type='text'  
            value={linkF}
            onChange={e=>setLinkF(e.target.value)}
            />
            <br/><br/>
            <button className='btn btn-dark' type="submit">Schedule dates</button>
            </form>
            </>
          )

})}
        
       
      </div>
      </>
    )
  }


export default GroupSchedule