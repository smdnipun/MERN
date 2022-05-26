import React, {useState} from 'react'
import axios from 'axios';

const Addfiles = () => {

    const [newFile, setFile] = useState(
        {
            name: '',
            description: '',
        }
    )

    const formchange = (value) =>{
        return setFile((prev)=>{
            return{...prev, ...value }
        })
    }


    const onSubmit = (e) => {
        e.preventDefault();

            const newitem = {...newFile};

        //   const exercise = {
        //     name: this.useState.name,
        //     description: this.useState.description,
        //     }

        axios.post('http://localhost:5000/adminfile/add', newitem)
             .then(res => {
                console.log(res);
             })
             .catch(err =>{
                 console.log(err);
             })
    }

  return (
    <div>
        <h2>Addfiles</h2>
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input
                type='text'
                placeholder='name'
                id='name'
                value= {newFile.name}
                onChange={(e)=>formchange({name:e.target.value})}
                />
                <br/>
            <label>description</label>
            <input
                type='description'
                id = 'description'
                placeholder='description'
                value= {newFile.description}
                onChange={(e)=>formchange({description:e.target.value})}
                />
                <br/>
            <input type='submit'/>    
        </form>

    </div>
  )
}

export default Addfiles
