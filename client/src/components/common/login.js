import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'




export default function Login(props) {
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
   
   
    if (loggedInUser != null) {
      
     
    }
  }, [])

  //  const [details, setDetails]=useState({email:"",password:""});
  const [email, setEmail] = useState('')
  const [data, setData] = useState('')
  const [password, setPassword] = useState('')


  if (props.logout) {
    
    localStorage.removeItem('user')
    localStorage.removeItem('userP')
    localStorage.removeItem('userS')
    localStorage.RemoveItem('userN',response.data.name)
    localStorage.RemoveItem('userI',response.data.id)
    window.location = '/'
  }

  const submitHandler = (e) => {
    e.preventDefault()

   
      axios
        .post('http://localhost:5000/user/login', {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data == 'granted') {
              console.log("success")
            localStorage.setItem('user', email)
         
           
          } else {
            
            alert("Invalid Credntials")
          }
        })
        axios.get(`http://localhost:5000/user/${email}`, {
            params: {
              email:(email),
              
            }
          })
          .then(function (response) {
              setData(response.data)
              console.log(response.data)
              console.log(data)
              localStorage.setItem('userS',response.data.specialization)
              localStorage.setItem('userP',response.data.position)
              localStorage.setItem('userN',response.data.name)
              localStorage.setItem('userI',response.data.id)

              window.location='/viewMarking'
    
          })
        


    }
 
  

  return (
    <div>
      <div className='center'>
        <div className='form-toggle'></div>
        <div className='form-panel one'>
          <div className='form-header'>
            <h1>Account Login</h1>
         
          </div>
          <div className='form-content'>
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                <label for='username'>Username</label>
                <input
                  classNameName='center'
                  type='text'
                  id='email'
                  name='email'
                  required='required'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className='form-group'>
                <label for='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  required='required'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div className='center'>
                <button type='submit'>Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
