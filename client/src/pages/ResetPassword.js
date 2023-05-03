import {React, useState} from 'react'
import Layout from '../components/Layout'
import { useNavigate,useLocation} from 'react-router-dom'
import {toast} from 'react-hot-toast';
import axios from 'axios'
import videoBg from "../video/v1.mp4";

const ResetPassword = () => {
  const location = useLocation();
  
    const email = location.state.email;

  const [password,setPassword] = useState("")
  const [cpassword,setCpassword] = useState("")
  const navigate = useNavigate();
 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(email,password,cpassword);
    try{
      const res = await axios.post("/api/v1/auth/reset",{email,password,cpassword});
      if(res.data.success){
        toast.success(res.data.message)   
        navigate('/login')
      }
      else
      {
        toast.error(res.data.message)
      }
    
    }

    catch(err)
    {
      console.log(err);
      toast.error('Something went wrong');
    }
   
  }

  return (    
    <Layout title={"E-Shiksha Reset Password"}>
            <div className='forget common'>
                  <div className='main'>
                    <video src={videoBg} autoPlay loop muted />
                  </div>

                <div className="container-f">
                    <div className="drop">
                        <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="input-box">
                            <input 
                                type="password"  
                                placeholder="New Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            </div>
                            <div className="input-box">
                            <input 
                               type="password"  
                               placeholder="Confirm Password" 
                               value={cpassword}
                               onChange={(e) => setCpassword(e.target.value)}
                               required
                            />
                            </div>
                            <div className="input-box">
                            <input type="submit" value="Update"/>
                            </div>
                        </form>
                       </div>
                   </div>
                </div>
              </div>
    </Layout>
  )
}

export default ResetPassword