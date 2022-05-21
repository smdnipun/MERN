import React ,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {v4 as uuid} from 'uuid';

export default function Buy(){

    const [iname, setIname] = useState('')
    const [uprice, setUprice] = useState('')
    const [discountP,setDiscountP]=useState('')


    const[item_id,setID]=useState(null);

    useEffect(() => {
            setID(localStorage.getItem('item_id'))
            setIname(localStorage.getItem('iname'));
            setUprice(localStorage.getItem('uprice'));
            setQuantity(localStorage.getItem('quantity'));
            setDiscountP(localStorage.getItem('discountP'))
            
    }, []);

   

    const purchase_id=uuid();
    const [quantity,setQuantity]=useState('')

    let total=0;

      if(setDiscountP==0){

        total =quantity*uprice;
      }
      else{
        total=quantity*discountP;
      }
        // let quantit=-quantity


        console.log();




    const newPurchase={
        purchase_id,iname,uprice,quantity,discountP,total
    }

    const sendPostReq = async () => {
        try {
          const resp = await axios.post('purchase/add', newPurchase)
          console.log(resp.data)
          alert("Item successfully bought ");
        } catch (err) {
          // Handle Error Here
          console.error(err)
        }
      }

      const [item,setItem]=useState([]);
      useEffect(()=>{
          axios.get(`/item/getData/${item_id}`)
          .then((response)=>{
              setItem(response.data);
          })
      },[])

      item.map((data)=>{
          q=data.quantity
          console.log(q)
        
      })
    
      const updateItem = () => {
        axios.put(`/item/update/${item_id}`, {
          
           quantity
         
      })
    }
    
    return(

        <div>

            <h1>Purchase a Item</h1>
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
               <button onClick={sendPostReq} type="submit" >Buy</button>
               </Link>
          </form>

        </div>

    )



}