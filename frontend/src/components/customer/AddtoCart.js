import React ,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {v4 as uuid} from 'uuid';

export default function addToCart(){

  
    const [iname, setIname] = useState('')
    const [uprice, setUprice] = useState('')

    

    const[item_id,setID]=useState(null);

    useEffect(() => {
            setID(localStorage.getItem('item_id'))
            setIname(localStorage.getItem('iname'));
            setUprice(localStorage.getItem('uprice'));
            setQuantity(localStorage.getItem('quantity'));
            
    }, []);

   

    const cart_id=uuid();
    const [quantity,setQuantity]=useState('')
    

         let total=quantity*uprice;
         
        // let quantit=-quantity


        console.log();




    const newCart={
        cart_id,iname,uprice,quantity,total
    }

    const sendPostReq = async () => {
        try {
          const resp = await axios.post('cart/add', newCart)
          console.log(resp.data)
          alert('Sucessfully added to Cart')
          localStorage.clear();
        } catch (err) {
          // Handle Error Here
          console.error(err)
        }
      }
        
    //   const updateItem = () => {
    //     axios.put(`/item/update/${item_id}`, {
          
    //        quantity
         
    //   })
    // }

  const [cart,setCart]=useState([])

    useEffect(() => {
        axios.get(`/cart/getData`)
            .then((response) => {
                setCart(response.data);
              
            })
    }, [])



    
    return(
        <div>
            <ul>
            <li><a href="/view">Home</a></li>
             <li><a href="/addToCart">Cart</a></li>
             <li><a href="/addToWishlist">Wish List</a></li>
            <li><a href="">About</a></li>
            </ul>
        <div>

            <h1>Add to Cart</h1>
          <form>

         
                    <div>
                    <label>Item Name</label>
            <input value={iname} onChange={(e) => setIname(e.target.value)} disabled/>
        <br /><br />


        <label>Unit price</label>
        <input value={uprice}  onChange={(e) => setUprice(e.target.value)} disabled/>
        <br /><br />

        <label>Quantity</label>
        <input  onChange={(e) => setQuantity(e.target.value)} />
        <br /><br />


                </div>
             
              
             
              <br /><br />


              <Link to='/view'>
               <button onClick={sendPostReq} type="submit" >Add</button>
               </Link>

          </form>
          </div>

          <div>
                    <h1>Cart</h1>
                <table>
                    <tr>
                    <th>Item name</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                    {cart.map((data)=>{
                        return(
                            <tr>
                                <td>{data.iname}</td>
                                <td>{data.quantity}</td>
                                <td>{data.total}</td>
                                <Link to='/buy'>
               <button type="submit" >Buy</button>
               </Link>

                            </tr>
                        )

                    })}
                </table>

          </div>

        
        </div>
    )



}