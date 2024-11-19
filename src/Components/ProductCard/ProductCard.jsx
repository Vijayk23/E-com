import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card">
      <div className="card-top">
        <img src={product.image} alt={product.name} className="product-img" />
        {product.isVeg && (
          <div className="tag">
            <img src={product.vegTag} alt="Vegetarian" className="tag-veg" />
          </div>
        )}
      </div>
      <Card.Body>
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Row>
          <Col className="price-section">
            <div className="price-row">
              <p className="mrp">
                MRP <span className="strike">₹{product.mrp}</span>
              </p>
              <p className="mrp">
                ASPV <span className="current-price">₹{product.price}</span>
              </p>
            </div>
            <small className="tax-info">(Inclusive of all taxes)</small>
          </Col>
          <Col className="discount-section">
            <div className="discount-tag">
              ₹{product.discount} <span className="offer">OFF</span>
            </div>
          </Col>
        </Row>
        <Row className="quantity-section">
          <select className="quantity-dropdown">
            {product.quantities.map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
        </Row>
        <Button className="add-to-cart">
          <FaShoppingCart /> Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
