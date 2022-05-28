import { useState } from 'react';
import axios from 'axios'
import NavBar from '../common/navBar';
export default function SupCreateMarkingSchemes() {
  const [selectSub,setSelectSub]=useState();
  const [selectPosition,setPosition]=useState();
  const [formFields, setFormFields] = useState([
    { citerion: '', vgood: '',avg:'',poor:'',totMark:'',mark:"",specalization:(selectSub),position:(selectPosition) }
  ])

 
  const addFields = () => {
    let object = {
      citerion: '', 
      vgood: '',
      avg:'',
      poor:'',
      totMark:'',
      mark:'',
      specalization:(selectSub),
      position:(selectPosition)
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }
 const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }
  async function Submit(e){
    e.preventDefault();
  console.log(formFields)
  

  axios

    .post('http://localhost:5000/markingScheme/add/', formFields)

    .then((res) => console.log(res.data))

}

  return (
    <div>
      <NavBar/>
    <div className="container">
    <h1>Create Marking Scehme</h1>
<select value={selectSub} 
       onChange={e=>setSelectSub(e.target.value)}>
    <option  selected="selected">Information technology</option>
    <option  selected="selected">Software engineering</option>
    <option  selected="selected">Data science</option>
    <option  selected="selected">Cyber security</option>
    <option  selected="selected">Intractive media</option>
    <option  selected="selected">Network engineering</option>
  </select><br/><br/>
      <form onSubmit={Submit}>
   

  <select  value={selectPosition}
  onChange={e=>setPosition(e.target.value)} 

  >
    <option  selected="selected">Panel member</option>
    <option  selected="selected">Supervisour</option>
 
  </select><br/><br/>

        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <textarea
                name='citerion'
                placeholder='Citerion'
                onChange={event => handleFormChange(event, index)}
                value={form.citerion}
              />
              <textarea
                name='vgood'
                placeholder='Very good'
                onChange={event => handleFormChange(event, index)}
                value={form.vgood}
              />
              <textarea
                name='avg'
                placeholder='Average'
                onChange={event => handleFormChange(event, index)}
                value={form.avg}
              />
              <textarea
                name='poor'
                placeholder='Poor'
                onChange={event => handleFormChange(event, index)}
                value={form.poor}
              />
              <input
                name='totMark'
                placeholder='Total mark'
                onChange={event => handleFormChange(event, index)}
                value={form.totMark}
              />



              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <br/><br/>
      <button className='center col-2' onClick={Submit}>Submit</button>
    </div>
    </div>
  );
}