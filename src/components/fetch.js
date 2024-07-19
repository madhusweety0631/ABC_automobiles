import {useState,useEffect} from "react";

const Product = () => {
    const [product, setProduct] = useState([]);

    const Fetched = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const Data = await response.json();
        setProduct(Data.products); // Correctly set the product state
    };

    useEffect(() => {
        Fetched();
    }, []);

    return (
        <div className="Product">
            <h1>Product Page</h1>
            {
                product.map((eachProd) => {
                    return (
                        <span key={eachProd.id}>
                            <img src={eachProd.thumbnail} alt={eachProd.title} />
                        </span>
                    );
                })
            }
        </div>
    );
};

export default Product;