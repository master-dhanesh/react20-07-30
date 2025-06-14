import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
    const { products } = useSelector((state) => state.productReducer);

    const productList = products.map((p, i) => {
        return (
            <div
                title={p.title}
                key={p.id}
                className="w-[31%] mr-3 mb-3 shadow-md p-1 rounded"
            >
                <img className="h-[30vh] mx-auto block" src={p.image} alt="" />
                <h1 className="mt-3 text-2xl">{p.title.slice(0, 15)}...</h1>
                <p className="text-red-400">{p.price}</p>
                <p>{p.description.slice(0, 80)}...</p>
                <div className="mt-2 p-2 w-full flex justify-between items-center">
                    <button>Add to Cart</button>
                    <Link to="/product-info">More Info</Link>
                </div>
            </div>
        );
    });

    return products.length > 0 ? (
        <div className="flex flex-wrap">{productList}</div>
    ) : (
        "Loading..."
    );
};

export default Products;
