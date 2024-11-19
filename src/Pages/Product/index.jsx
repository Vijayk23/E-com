import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Row, Col } from "react-bootstrap";
import products from "../../Constants/Product";

const sidebarCategories = [
  { name: "Dals", count: 31 },
  { name: "Pulses", count: 22 },
  { name: "Dry Fruits", count: 68 },
  { name: "DMart Grocery", count: 58 },
  { name: "Cooking Oil", count: 52 },
  { name: "Ghee & Vanaspati", count: 18 },
  { name: "Flours & Grains", count: 58 },
  { name: "Rice & Rice Products", count: 36 },
  { name: "Masala & Spices", count: 164 },
  { name: "Salt / Sugar / Jaggery", count: 32 },
];

function Product() {
  return (
    <div className="product-page">
      <Row>
        <Col md={2} className="sidebar">
          <h3>Grocery</h3>
          <ul className="sidebar-list">
            {sidebarCategories.map((category, index) => (
              <li key={index} className="sidebar-item">
                {category.name} ({category.count})
              </li>
            ))}
          </ul>
        </Col>

        <Col md={9} className="products">
          <Row>
            {products.map((product) => (
              <Col md={4} key={product.id} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Product;
