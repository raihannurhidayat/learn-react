import LoginPage from "./Pages/login"
import ProductsPage from "./Pages/products"
import RegisterPage from "./Pages/register"
import {BrowserRouter, Routes, Route} from "react-router-dom"



const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />}/>
          <Route path="register" element={<RegisterPage />} />
          <Route path="product" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App