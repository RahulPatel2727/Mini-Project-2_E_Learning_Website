import React, { useState,useRef } from 'react'
import Layout from '../components/Layout'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import Verify from './Verify'
import videoBg from "../video/v1.mp4";

const Forget = () => {
  const emailRef = useRef();
  const [otpForm,showForm] = useState(true);
  const handleSubmit = async (e) =>{      
    e.preventDefault();
    try{  
      const res = await axios.post("/api/v1/auth/sendEmail",{email:emailRef.current.value});
      console.log(res);
      if(res.data.success)
      {
        toast.success(res.data.message);
        showForm(false);
      }
      else
      {
        toast.error(res.data.message);
      }
    }
    catch(err)
    {
      console.log(err);
      toast.error('Something went wrong');
    }
    }
     
  return (
  
    <Layout title={'E-Shiksha Reset Password'}>
      <div className='forget common'>

      <div className='main'>
          <video src={videoBg} autoPlay loop muted/>
        </div>
      <div className="container-f">
          <div className="drop">
            <div className="content">
              
               {
                  otpForm ? 

                  
                  <form >
                           
                  <div className="input-box">
                   <input 
                     type="email" 
                     placeholder="Email address"
           
                     ref={emailRef}
                    
                     autoComplete='off'
                     required />
                 </div>

                  

                 <div className="input-box">
                   <input type="submit" value="Get OTP" onClick={handleSubmit} />
                 </div>
                 
                
         </form> :
         
        <Verify email={emailRef.current.value}/>
               }
                
                  
            </div>
            </div>

            <Link to="/login" className="btn-f">Already Have an Account?</Link>
          </div>
          
          
        </div>
       </Layout>
  )
}

export default Forget