import React,{useState}  from 'react'
import Layout from '../components/Layout'
import { Link,useNavigate ,useLocation} from 'react-router-dom'
import {toast} from 'react-hot-toast';
import axios from 'axios'
import { useAuth } from '../context/auth';
const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [auth,setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("/api/v1/auth/login",{email,password});
      if(res.data.success){
       
        toast.success(res.data.message)
        setAuth({
          ...auth,
          user:res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate(location.state || '/')
      
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
    <Layout  title={'E-Shiksha SignIn'}>    
    <div className='login'>
    <div className="container-login">
          <div className="drop">
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="input-box">
                  <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required  />
                </div>
                <div className="input-box">
                  <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required  />
                </div>
                <div className="input-box">
                  <input type="submit" defaultValue="Login"/>
                </div>
              </form>
            </div>
          </div>
          <Link to="/forget" className="btn-login">Forgot Password</Link>
          <Link to="/register" className="btn-login signup">Signup</Link>
        </div>
    </div>
        
          
    </Layout>
    
  )
}

export default Login