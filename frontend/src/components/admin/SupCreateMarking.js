import { useState } from 'react';

export default function SupCreateMarkingSchemes() {
  const [formFields, setFormFields] = useState([
    { citerion: '', vgood: '',avg:'',poor:'',mark:'' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }


  async function Submit(e){
    e.preventDefault();
  
  const newItem = { ...formFields};

  await fetch("http://localhost:5000/markingScheme/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  }).catch((error) => {
    window.alert(error);
    return;
  });

}

  const addFields = () => {
    let object = {
      citerion: '', 
      vgood: '',
      avg:'',
      poor:'',
      mark:''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="App">
      <form onSubmit={Submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='citerion'
                placeholder='Citerion'
                onChange={event => handleFormChange(event, index)}
                value={form.citerion}
              />
              <input
                name='vgood'
                placeholder='Very good'
                onChange={event => handleFormChange(event, index)}
                value={form.vgood}
              />
              <input
                name='avg'
                placeholder='Average'
                onChange={event => handleFormChange(event, index)}
                value={form.avg}
              />
              <input
                name='poor'
                placeholder='Poor'
                onChange={event => handleFormChange(event, index)}
                value={form.poor}
              />
              <input
                name='mark'
                placeholder='Total mark'
                onChange={event => handleFormChange(event, index)}
                value={form.mark}
              />



              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={Submit}>Submit</button>
    </div>
  );
}
