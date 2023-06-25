import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductView = () => {
  const [product, setProduct] = useState("");
  const router = useRouter();

  const { id } = router.query;

  const image = "https://i.dummyjson.com/data/products/28/thumbnail.jpg";

  const fetchData = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response?.json();

    setProduct(data);
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage?.getItem("token")) {
      router?.replace("/");
    }
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <div className="row  p-5">
            <div className="col-md-4 p-5">
              <div>
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    {product?.images?.map((item, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : "none"
                        }`}
                        key={index}
                      >
                        <Image
                          src={item || image}
                          width="250"
                          height="250"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev  "
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5 p-5">
              <div>
                <p className="h3">{product?.title}</p>
                <p className="h3">Price - ${product?.price}</p>
                <p className="h3">{product?.description}</p>
                <p className="h3">Rating- {product?.rating}</p>
                <p className="h3">Stock- {product?.stock}</p>
              </div>
              <div
                className="btn btn-primary"
                onClick={() => router?.push("/products")}
              >
                Go Back
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
