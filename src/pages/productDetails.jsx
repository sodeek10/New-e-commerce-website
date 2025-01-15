import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("product id: ", id);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details based on the ID
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`) // Example API
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="products-cards">
      <img
        src={products.images}
        alt={products.title}
        style={{ width: "30%" }}
      />
      <h5>{products.title}</h5>
      <h6>{products.description}</h6>
      <span className="flex gap-2">
        <p style={{ color: "green", fontWeight: "bold" }}>
          ${products.price.toFixed(2)}
        </p>
        <p style={{ textDecoration: "line-through", color: "black" }}>
          <h3>${products.discountPercentage.toFixed(2)}</h3>
        </p>
      </span>
      <h2>Ratings: {products.rating} ★</h2>
    </div>
  );
};

export default ProductDetails;
