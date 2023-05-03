import React,{useState} from 'react'
import Layout from '../components/Layout';
import {toast} from 'react-hot-toast';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import videoBg from "../video/v1.mp4";

const Register = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [cpassword,setcPassword] = useState("")
  const [profile,setProfile] = useState("")
  const navigate = useNavigate();
  //form function

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("/api/v1/auth/register",{name,email,password,cpassword,profile});
      if(res.data.success){
        navigate('/login')
      
        toast.success(res.data.message)
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
    <Layout title={'E-Shiksha SignUp'}>
      
      <div className='register common'>    

      <div className='main'>
          <video src={videoBg} autoPlay loop muted/>
        </div>
            <div className="container-r">
              <div className="drop">
                <div className="content">
                  <form onSubmit={handleSubmit}>
                    <div className="input-box">
                      <input 
                        type="text" 
                        placeholder="Full Name"  
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                    </div>
                    <div className="input-box">
                      <input 
                        type="email" 
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    </div>
                    {/* <div class="input-box">
                            <input type="text" name="username" placeholder="Username">
                        </div> */}
                    <div className="input-box">
                      <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    </div>
                    <div className="input-box">
                      <input 
                        type="text"  
                        placeholder="Confirm Password"
                        value={cpassword}
                        onChange={(e) => setcPassword(e.target.value)}
                        required />
                    </div>
                    
                    <div className="input-box">
                      <input 
                        type="text"  
                        placeholder="Student/Teacher"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        required />
                    </div>

             


                    <div className="input-box">
                      <input type="submit" defaultValue="Sign Up"/>
                    </div>
                  </form>
                </div>
            </div>
            <Link to="/login" className="btn-r">Already Have an Account?</Link>
        </div>
      </div>
      
    </Layout>
    
  )
}


export default Register