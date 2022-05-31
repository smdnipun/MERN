import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NavBar from '../common/navBar';


const GroupSchedule = () => {

let params = useParams();
  const [data, setData] = useState([ ] );
  const [evaluation1,setEv1]=useState('');
  const [evaluation2,setEv2]=useState('');
  const [final_evaluation,setFinalEv]=useState('');
  const [groupID,setGroupID]=useState('')

  const loadData=()=>{

    axios.get(`http://localhost:5000/group/${params._id}`)
    .then(function (response) {
      setData(response.data)
      
    })

  }

  useEffect(() => {
   loadData()
  }, []);




  async function Submit(e){
    e.preventDefault();
    const Obj={

      groupID,
      evaluation1,
      evaluation2,
      final_evaluation


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
            <form onSubmit={Submit}>
              <label>Group ID :</label>
            <input type="text" value={group.gid} 
            onFocus={e=>setGroupID(e.target.value)}
            /><br/><br/>
            <label>Evaluation 1 :</label>
            <input type='date'
            value={evaluation1}
            onChange={e=>setEv1(e.target.value)}
            /><br/><br/>
            <label>Evaluation 2 :</label>
            <input type='date'
             value={evaluation2}
             onChange={e=>setEv2(e.target.value)}
            /><br/><br/>
            <label>Final Evaluation :</label>
            <input type='date'
               value={final_evaluation}
               onChange={e=>setFinalEv(e.target.value)}
            
            /><br/><br/>
            <button type="submit">Schedule dates</button>
            </form>
            </>
          )

})}
        
       
      </div>
      </>
    )
  }


export default GroupSchedule