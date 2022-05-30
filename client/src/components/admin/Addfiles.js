import React, {useState} from 'react'
import axios from 'axios';


const Add = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState([]);

    const onChangeFile = e => {
        setFile(e.target.files[0]);
    }

    const changeonClick = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("description", description);
        formData.append("file", file);

        setName("");
        setDescription("");

        axios
            .post("/adminfile/add", formData)
            .then((res) => setMessage(res.data))
            .catch((err) => {
                console.log(err);
            });
    };

  return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <form onSubmit={changeonClick} encType="multipart/form-data" >
                <div className="form-group">  
                    <label>Name</label>
                    <input 
                        type="text" 
                        value={name} required
                        onChange={(e)=> setName(e.target.value)}
                        className="form-control"/>
                </div>

                <div className="form-group">  
                    <input
                         type="text"  
                         placeholder="Description" 
                         value={description} required
                        onChange={(e)=>setDescription(e.target.value)}
                        className="form-control"/>
                </div>


                Upload Pdf

                <div className="form-group">
                    <input 
                        type="file" multiple  
                        filename="file"
                        className="form-control-file" 
                        onChange={onChangeFile}/>
                </div>

            <button className="mt-2" 
                type="submit" 
                variant="primary"
                size="lg">
                Upload
            </button>      
        </form>
    </div>
  )
}

export default Add