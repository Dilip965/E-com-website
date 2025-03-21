import React from "react";
import './about.css'


const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Your Trusted E-Commerce Destination</p>
        </div>
      </div>
      
      <div className="row mt-4">
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/261970/pexels-photo-261970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Our Story" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, our e-commerce platform started with a simple mission – to make online shopping
            seamless, affordable, and enjoyable. With a wide range of products, excellent customer service, and 
            secure payment options, we have grown into one of the most trusted shopping destinations.
          </p>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide customers with high-quality products, competitive prices, and an effortless 
            shopping experience. We are committed to delivering value while ensuring convenience and satisfaction.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Our Mission" className="img-fluid rounded" />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Our Vision" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>Our Vision</h2>
          <p>
            To be the global leader in e-commerce by continuously innovating and providing an unmatched 
            online shopping experience. We aim to empower buyers with a diverse catalog and cutting-edge 
            shopping solutions.
          </p>
        </div>
      </div>
      
      <div className="row mt-5 text-center Thetext">
        <h2 className="Whytochoose">Why Choose Us?</h2>
        <div className="col-md-4">
         
          <p>We source our products from trusted manufacturers and ensure top-notch quality.</p>
        </div>
        <div className="col-md-4">
         
          <p>Our logistics partners help us deliver your orders quickly and efficiently.</p>
        </div>
        <div className="col-md-4">
  
          <p>We prioritize customer satisfaction with 24/7 support and hassle-free returns.</p>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h2 className="Ourcommitment" >Our Commitment</h2>
          <p>
            At Shopstic Big Mega Shop, we believe in building long-term relationships with our customers. 
            We strive to offer the best shopping experience with a strong focus on trust, reliability, and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
