import React from "react";
import { Col, Row } from "react-bootstrap";
import * as images from "../../assets";

function Footer() {
  const paymenticon = [
    images.rupay,
    images.mastercard,
    images.cash_outlined,
    images.american,
  ];
  const APPImages = [images.google_play, images.download_app_store];
  const currentYear = new Date().getFullYear();
  const footerlist1 = [
    "FAQs",
    "Privacy Policy",
    "Pricing, Delivery, Return and Refund Policy",
    "Terms and Conditions",
    "Disclaimer",
  ];
  const footerlist2 = ["Contact Us", "About Us", "Join Us"];
  return (
    <>
      <div className="footer">
        <Row>
          <Col md="6">
            <div class="footer-downloadapp">
              Download ASPV Ready Mobile App Now!!
            </div>
            <Row>
              {APPImages.map((image, index) => (
                <Col className="app-store" md="3">
                  <img src={image} alt={`APP ${index + 1}`} />
                </Col>
              ))}
            </Row>
            <Row>
              {paymenticon.map((image, index) => (
                <Col className="card-icon" md="1">
                  <img src={image} alt={`APP ${index + 1}`} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md="6">
            <Row>
              <Col md="8">
                <ul className="footer-list">
                  {footerlist1.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </Col>
              <Col md="4">
                <ul className="footer-list">
                  {footerlist2.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="copyrights">
          <small>
            Copyright © {currentYear} Avenue E-Commerce Limited (AEL). All
            Rights Reserved.
          </small>
        </div>
      </div>
    </>
  );
}

export default Footer;
