import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const FashionWearSales = () => {
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const productsPerPage = 12;

  useEffect(() => {
    // Replace this with your actual API endpoint
    const apiUrl = `https://dummyjson.com/products?limit=30&skip=8`;

    const Product = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setProduct(data.products); // Assuming the API returns an array of products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    Product();
  }, []);

  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(Product.length / productsPerPage);
  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-container">
      <h5>This week's higlights</h5>
      {currentProducts.map((products, index) => (
        <div key={index} className="products-card">
          <img
            src={products.images} // API should provide `imageUrl`
            alt={products.title} // Ensure `name` is part of the data
            className="products-images"
          />
          <h2>{products.title}</h2>
          <p style={{ color: "green", fontWeight: "bold" }}>
            ${products.price.toFixed(2)}
          </p>
          <p style={{ textDecoration: "line-through", color: "black" }}>
            <h3>${products.discountPercentage.toFixed(2)}</h3>
          </p>
          <h2>Ratings: {products.rating} ★</h2>
          <div className="button-box flex">
            <button className="add-cart">Add to Cart</button>
            <button className="view-details">View Details</button>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div style={{ textAlign: "center", margin: "20px", color: "white" }}>
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          style={{ margin: "5px", padding: "10px 20px" }}
        >
          Previous
        </button>
        <span style={{ margin: "0 15px" }}>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          style={{ margin: "5px", padding: "10px 20px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FashionWearSales;
