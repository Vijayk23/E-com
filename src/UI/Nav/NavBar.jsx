import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { FiUser } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const Product = ["Tea", "Coffee", "Milk", "Bread", "Eggs", "Soups"];
  const [placeholder, setPlaceholder] = useState(Product[0]);
  const menu = [
    "Ready To Cook",
    "Home Appliances",
    "Cookware",
    "Serveware",
    "Cleaners",
    "Detergent & Fabric Care",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Product.length);
      setPlaceholder(Product[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [Product]);

  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <Row className="w-100">
          <Col md="1" className="logo" onClick={() => navigate("/")}>
            ASPV
          </Col>
          <Col md="4">
            <Row>
              <Col className="location" md="3">
                <div className="d-flex align-items-baseline gap10 color-primary-black">
                  <IoLocationOutline className="location-icon" />
                  <span>600042</span>
                  <MdKeyboardArrowDown />
                </div>
                <p>Chennai</p>
              </Col>
              <Col className="delivery">
                <p>
                  Earliest <span>Home Delivery</span> available
                </p>
                <div className="delivery-nav">
                  <TbTruckDelivery />
                  <p>Tomorrow 07:00 AM - 10:00 AM</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm="3" md="4" className="search">
            <input placeholder={`Search for ${placeholder}`} />
            <PrimaryButton>SEARCH</PrimaryButton>
          </Col>
          <Col sm="3" md="3" className="signIn">
            <div className="login">
              <FiUser />
              <p>Sign In / Register</p>
            </div>
            <div className="notification">
              <IoMdNotificationsOutline />
              <LiaShoppingCartSolid />
              <p>₹ 0</p>
            </div>
          </Col>
        </Row>
      </nav>
      <Row className="w-100 NavList">
        <Col md="2" className="pr0">
          <div className="nav-menu" onClick={() => navigate("/product")}>
            <FiMenu />
            All Categories
          </div>
        </Col>
        <Col className="navitems">
          {menu.map((item, index) => (
            <div key={index} className="nav-item">
              {item}
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
}

export default NavBar;
