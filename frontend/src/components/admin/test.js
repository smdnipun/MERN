import React from 'react';
import { useState } from 'react';

function DynamicInput() {

    const [values, setValues] = useState({ val: []});

      function createInputs() {
        return values.val.map((el, i) =>
          <div key={i}>
            <input type="text" value={el||''} onChange={handleChange.bind(i)} />
            <input type='button' value='remove' name={i} onClick={removeClick.bind(i)} />
          </div>
        );
      }

    function handleChange(event) {
      let vals = [...values.val];
      vals[this] = event.target.value;
      setValues({ val: vals });
    }

    const addClick = () => {
      setValues({ val: [...values.val, '']})
    }

    const removeClick = (event) => {
      let vals = [...values.val];
      let index = Number(event.target.name);
      vals.splice(index, 1);
      setValues({ val: vals });
    }

    const handleSubmit = event => {
        event.preventDefault();
        for(let v in values){
            console.log(v);
        }
      alert('A name was submitted: ' );
    
    }

    return (
      <form onSubmit={handleSubmit}>
          {createInputs()}
          
          <input type='button' value='add more' onClick={addClick} />
          <input type="submit" value="Submit" />
      </form>
    );

}

export default DynamicInput;
