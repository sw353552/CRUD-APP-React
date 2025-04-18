
import './App.css';
import ProductCard from './components/ProductCard';
import { AddProductModal } from './components/AddProductModal';
import { useState } from 'react';
function App() {
  const products = [
    {
      prodId: '001',
      product: 'Apple',
      price: 'Rs. 300'
    },
    {
      prodId: '002',
      product: 'Banana',
      price: 'Rs. 100'
    },
    {
      prodId: '003',
      product: 'Pineapple',
      price: 'Rs. 300'
    },
    {
      prodId: '004',
      product: 'Cuckoo',
      price: 'Rs. 400'
    },
    {
      prodId: '005',
      product: 'Avocado',
      price: 'Rs. 300'
    },
    {
      prodId: '006',
      product: 'Guava',
      price: 'Rs. 200'
    },
    {
      prodId: '007',
      product: 'Orange',
      price: 'Rs. 300'
    }
]
const [isOpen, setIsOpen] = useState(false);

const addProducts = () => {
  setIsOpen(true)
}

const handleClose = () => {
  setIsOpen(false)
}
  return (
    <>
    <div className='w-full max-w-5xl mx-auto'>
      <div className='flex justify-between items-center my-10'>
        <h1 className='text-5xl font-bold'>Products</h1>
        <button type='button' className='font-semibold bg-blue-500 text-white py-2 px-4 rounded-md text-l cursor-pointer' onClick={addProducts}>Add Products </button>
      </div>
      <div className='grid grid-cols-4 gap-5'>
      <ProductCard products={products}/>
      </div>
    </div>
    {isOpen && <AddProductModal handleClose={handleClose}/>}
    </>
  )
}

export default App;
