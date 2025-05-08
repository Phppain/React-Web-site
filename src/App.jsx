import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Auth/Login"
import { Registration } from "./components/Auth/Registration"
import { Main } from "./components/Main/Main"
import { Header } from './components/Main/Header';
import { ProductPage } from './components/Main/ProductPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { About } from './components/About/About';
import { Shop } from './components/Shop/Shop';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Main/Footer';

const App = () => {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
           <Main />
        }/>
        <Route path='/shop' element={
           <Shop />
        }/>
        <Route path='/login' element={
          <Login />
        }/>
        <Route path='/about' element={
            <About />
        }/>
        <Route path='/registr' element={
          <Registration />
        }/>
        <Route path='/product/:id' element={
            <ProductPage />
        } />
        <Route path='/cart' element={
          <ProtectedRoute>
            <Cart/>
          </ProtectedRoute>
        }/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;