import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard = ({ image, title, description, id }) => {
  const router = useRouter();

  const handleRoute = (id) => {
    router?.push(`/products/${id}`);
  };
  const sampleImage = "https://i.dummyjson.com/data/products/28/thumbnail.jpg";

  return (
    <div className="card text-center">
      <div className="p-3">
        <Image
          src={image || sampleImage}
          width="250"
          height="250"
          className="card-img-top"
          alt="image"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description?.slice(1, 50)?.concat("....")}</p>
        <button
          className="btn btn-primary btn-md w-100"
          onClick={() => {
            handleRoute(id);
          }}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
