import { useState } from "react"

export const AddProductModal = ({ handleClose, handleAddProduct }) => {

    const [data, setdata] = useState({
        productCode: '',
        productName: '',
        price:''
    })

    const handleInputChange = (e) => {
        setdata((prev) => ({...prev,[e.target.name] : e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddProduct(data);
        handleClose(); // Close the modal after submission
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="opacity-70 fixed inset-0 bg-black" />

            <div className="relative w-full max-w-xl bg-white rounded-lg p-10 shadow-lg">
                <button type="button" className="absolute top-2 right-5 text-3xl p-0 text-gray-400 cursor-pointer" onClick={handleClose}>&times;</button>
                <h1 className="font-semibold text-4xl mb-6">Add Product</h1>
                <form className="grid gap-5">
                    <div>
                        <label className="font-medium">Product name</label>
                        <input className="w-full border rounded px-2 py-1" name = "productName" onChange= {handleInputChange} placeholder="Enter Product Name..." type='text' />
                    </div>
                    <div>
                        <label className="font-medium">Product code</label>
                        <input className="w-full border rounded px-2 py-1" name = "productCode" onChange= {handleInputChange} placeholder="Enter Product Code..." type='text' />
                    </div>
                    <div>
                        <label className="font-medium">Product price</label>
                        <input className="w-full border rounded px-2 py-1" name = "price" onChange= {handleInputChange} placeholder="Enter Product Price..." type='number' />
                    </div>
                    <button type="submit" onClick = {handleSubmit} className="font-semibold bg-blue-500 text-white py-2 px-4 rounded-md text-l cursor-pointer mt-6">Submit</button>
                </form>
            </div>
        </div>
    )
}