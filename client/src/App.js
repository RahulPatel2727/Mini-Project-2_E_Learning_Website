import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/routes/Private'
import Forget from './pages/Forget';
import ResetPassword from './pages/ResetPassword';
import AdminRoute from './components/routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import MyCourses from './pages/user/MyCourses';
import Profile from './pages/user/Profile';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CartPage from './pages/CartPage';
import CreateProduct from './pages/Admin/CreateProduct';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Products from './pages/Admin/Products';
// import Users from './pages/Admin/Users'
import AdminUsers from './pages/Admin/AdminUsers';
import View from './pages/user/View';
import AllCourses from './pages/AllCourse';
import { LuckyApp } from './lucky/LuckyApp';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/search" element={<Search />} />
      <Route path="/product/:slug" element={<ProductDetails/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/dashboard" element={<PrivateRoute/>} >
          <Route path="user" element={<Dashboard/>} />
          <Route path="user/mycourses" element={<MyCourses/>} />
          <Route path="user/profile" element={<Profile/>} />
          <Route path="user/view/:slug" element={<View/>} />
      </Route>

      {/* <Route path="/dashboard" element={<AdminRoute/>} >
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="admin/create-category" element={<CreateCategory/>} />
          <Route path="admin/create-course" element={<CreateCourse/>} />
          <Route path="admin/courses" element={<Courses/>} />
          <Route path="admin/purchased" element={<Purchased/>} />
      </Route> */}

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/purchased" element={<AdminUsers/>} />
          {/* <Route path="admin/orders" element={<AdminOrders />} /> */}
        </Route>
      
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forget" element={<Forget/>} />
      <Route path="/reset" element={<ResetPassword/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/courses" element={<AllCourses/>} />
      <Route path="/lucky" element={<LuckyApp/>} />
     
      <Route path="*" element={<PageNotFound  />  } />
    </Routes>
     
  );
}

export default App;