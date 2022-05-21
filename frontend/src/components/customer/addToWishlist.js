import React ,{useState,useEffect} from "react";
import axios from "axios";
import {v4 as uuid} from 'uuid';

export default function AddtoWishlist(){


    const wishlist_id = uuid();
    const [iname, setIname] = useState('')
    const [uprice, setUprice] = useState('')
    const [description,setDescription]=useState('')


    const[item_id,setID]=useState(null);

useEffect(() => {
        setID(localStorage.getItem('item_id'))
        setIname(localStorage.getItem('iname'));
        setUprice(localStorage.getItem('uprice'));
        setDescription(localStorage.getItem('description'))
}, []);







const newWishlist={

    wishlist_id,iname,uprice,description

}

const sendPostReq = async () => {
    try {
      const resp = await axios.post('wishlist/add', newWishlist)
      console.log(resp.data)
     
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
    alert('Succesfully added to the Wishlist')
      localStorage.clear();
   
  }


  const [wishlist,setWishlsit]=useState([])

  useEffect(()=>{
        axios.get('wishlist/getData')
        .then((response) => {
            setWishlsit(response.data);

        })

  },[])


    return(

        <div>
                   <ul>
                      <li><a href="/view">Home</a></li>
                      <li><a href="/addToCart">Cart</a></li>
                     <li><a href="/addToWishlist">Wish List</a></li>
                     
                    </ul>
            <h1>Wish list</h1>
        <div>
            <form >
        <label>Item Name</label>
        <input value={iname} onChange={(e) => setIname(e.target.value)} disabled />
        <br /><br />

        <label>Unit price</label>
        <input value={uprice} onChange={(e) => setUprice(e.target.value)} disabled/>
        <br /><br />

        <label>Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} disabled />
        <br /><br />

        <button onClick={sendPostReq} type='submit'>
          Add
        </button>
      </form>

      </div>


    <div>
        <h1>Wish List</h1>
        
        <table>

            <tr>
                <th>Item name</th>
                <th>Unit price</th>
                <th>Description</th>
            </tr>

            {wishlist.map((data)=>{

                return(
                    <tr>
                        <td>{data.iname}</td>
                        <td>{data.uprice}</td>
                        <td>{data.description}</td>

                    </tr>
                )

            })}
        </table>
        
        
        </div>          
        </div>

    )



}