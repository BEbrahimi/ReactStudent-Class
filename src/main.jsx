import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductCartItem from './components/ProductCartItem'

createRoot(document.getElementById('root')).render(

  <div>
    <ProductCartItem/>
    <ProductCartItem/>
    <ProductCartItem/>
    <ProductCartItem/>
  </div>
)
