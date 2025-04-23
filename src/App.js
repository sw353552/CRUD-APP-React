
import './App.css';
import ProductCard from './components/ProductCard';
import { AddProductModal } from './components/AddProductModal';
import { useState } from 'react';
function App() {

const [isOpen, setIsOpen] = useState(false);
const [productList, setProductList] = useState([]);

const addProducts = () => {
  setIsOpen(true)
}

const handleClose = () => {
  setIsOpen(false)
}

const handleAddProduct = (product) => {
  console.log(product )
  setProductList((prev) => [...prev, product])
  handleClose();
}

const handleDeleteProduct = (prodCode) => {
  setProductList((prev) => prev.filter(prods => prods.productCode === prodCode))
}
  return (
    <>
    <div className='w-full max-w-5xl mx-auto'>
      <div className='flex justify-between items-center my-10'>
        <h1 className='text-5xl font-bold'>Products</h1>
        <button type='button' className='font-semibold bg-blue-500 text-white py-2 px-4 rounded-md text-l cursor-pointer' onClick={addProducts}>Add Products </button>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {productList.length>0 ? 
      <ProductCard products={productList}/> : (
        <h1 className='font-semibold col-span-6 flex justify-center'>No Products found</h1>
      )
    }
      </div>
      </div>
    {isOpen && <AddProductModal handleAddProduct={handleAddProduct} handleDeleteProduct = {handleDeleteProduct} handleClose={handleClose}/>}
    </>
  )
}

export default App;
