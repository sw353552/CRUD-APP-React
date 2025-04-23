const ProductCard = ({products}) => {
const handleDelete = () => {
    
}
    return (
        products.map((prod) => (
        <div key={prod.productCode} className="border rounded-lg p-5 flex flex-col gap-2 w-[240px] font-semibold shadow-md">
            <span>{prod.productName}</span>
            <span>{prod.productCode}</span>
            <span>{prod.price}</span>
            <div className="flex gap-2 mt-6 text-lg">
                <button type = "button" className="border rounded-md px-2 py-1 w-full font-semibold">Edit</button>
                <button type = "button" className="border rounded-md px-2 py-1 font-semibold bg-red-500 text-white w-full" onClick={handleDelete}>Delete</button>
            </div>
        </div>
        ))
    )
}

export default ProductCard;