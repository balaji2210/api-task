import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";

const Products = () => {
  const router = useRouter();

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response?.json();

    setProducts(data?.products);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage?.getItem("token")) {
      router?.replace("/");
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row p-3">
        {products.map((item, index) => (
          <div className="col-lg-3 col-md-4  mb-5" key={index}>
            <ProductCard
              image={item?.thumbnail}
              title={item?.title}
              description={item?.description}
              id={item?.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
