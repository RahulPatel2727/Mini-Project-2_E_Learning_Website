import React, { useRef, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'
const Verify = ({email}) => {
  
    const [otp,setOtp] = useState('');
   
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{      
     e.preventDefault();
     
      try{

        const res = await axios.post("/api/v1/auth/otpVerify",{email,otp});

        if(res.data.success)
        {
            toast.success(res.data.message)
            navigate("/reset",{ state: { email} });

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
    

                    <form onSubmit={handleSubmit} >     
                            <div className="input-box">
                              <input 
                                type="text"  
                                placeholder="OTP"
                                
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength={4}
                                required />
                            </div>

                            <div className="input-box">
                              <input type="submit"  value="Verify OTP" />
                            </div>

                    </form>
                    
         
          
      
    
  )
}

export default Verify