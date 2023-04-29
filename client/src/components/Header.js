import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { useAuth } from '../context/auth'
import { toast } from 'react-hot-toast'
import SearchInput from './Form/SearchInput'
import { useCart } from "../context/cart";
const Header = () =>{
    const [auth,setAuth] = useAuth();
    const [cart] = useCart();
    const handleLogout = () => {
        setAuth({
            ...auth, user:null,token:''
        })
        localStorage.removeItem('auth')
        toast.success('Logout successfully')
    }
    return(
        <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <NavLink to="/" className="navbar-brand" href="#">E-Shiksha</NavLink>

                          

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                            <NavLink className="btn dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Learn with Fun
                                            </NavLink>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="https://harsh-1000.github.io/Project-Algorithm-Visualizer/" target='blank' className="dropdown-item" >Algorithm Visualizer</NavLink></li>
                                                <li><NavLink className="dropdown-item"  to="https://scratch.mit.edu/" target='blank' >Scratch</NavLink></li>
                                              
                                            </ul>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/about" className="nav-link" href="#">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/cart" className="nav-link" href="#">Cart {cart?.length}</NavLink>
                                </li>
                                {
                                    !auth.user ? 
                                    (<> 
                                        <li className="nav-item">
                                            <NavLink to="/register" className="nav-link" >SignUp</NavLink>
                                         </li>
                                        <li className="nav-item">
                                            <NavLink to="/login" className="nav-link" >Login</NavLink>
                                        </li>
                                    </>) : 
                                    (<>
                                        {/* <li className="nav-item">
                                            <NavLink to="/login" onClick={handleLogout} className="nav-link" >Logout</NavLink>
                                        </li> */}
                                            <li className="nav-item dropdown">
                                            <NavLink className="btn dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {auth?.user?.name}
                                            </NavLink>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to={`/dashboard/${auth?.user?.profile==="teacher" ? 'admin' : 'user' }`} className="dropdown-item" >Dashboard</NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className="dropdown-item"  to="/login" onClick={handleLogout} >Logout</NavLink></li>
                                            </ul>
                                            </li>


                                    </>)
                                }
                                {/* <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" href="#">Conatct</NavLink>
                                </li> */}
                              
                            </ul>
                            <SearchInput/>
                        </div>
                    </div>
                </nav>
        </>
        
    )
}
export default Header