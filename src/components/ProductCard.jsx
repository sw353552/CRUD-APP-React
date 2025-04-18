const ProductCard = ({products}) => {

    return (
        products.map((prod, index) => (
        <div key= {index} className="border rounded-lg p-5 flex flex-col gap-2 w-[240px] font-semibold shadow-md">
            <span>{prod.product}</span>
            <span>{prod.prodId}</span>
            <span>{prod.price}</span>
            <div className="flex gap-2 mt-6 text-lg">
                <button type = "button" className="border rounded-md px-2 py-1 w-full font-semibold">Edit</button>
                <button type = "button" className="border rounded-md px-2 py-1 font-semibold bg-red-500 text-white w-full">Delete</button>
            </div>
        </div>
        ))
    )
}

export default ProductCard;