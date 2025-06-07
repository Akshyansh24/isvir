
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from '../../assets/images/Card1.jpg';
import Card2 from '../../assets/images/Card2.jpg';
import Card3 from '../../assets/images/Card3.jpg';

const SliderCard = () => {
  const cardsData = [
    {
      id: 1,
      title: "ISVIR 2024 Photo Gallery",
      text: "Step into the Story of ISVIR 2024: Click to Experience the Grandeur of Interventional Radiology in Jaipur and Rekindle Your Most Memorable Moments.",
      btnText: "Learn More",
      link: "#",
      image: Card1,
    },
    {
      id: 2,
      title: "Join ISVIR",
      text: "Unlock the endless possibilities of Interventional Radiology. Join ISVIR and gain access to a vibrant community of experts, educational resources, and career opportunities that will propel your success.",
      btnText: "Click Me",
      link: "#",
      image: Card2,
    },
    {
      id: 3,
      title: "Associative Membership",
      text: "Power up your professional network and stay at the forefront of Interventional Radiology with our exclusive Associative Membership for Nepal, Bangladesh, Sri Lanka, Bhutan and Maldives. Connect, collaborate, and thrive with like-minded experts in the field.",
      btnText: "View Details",
      link: "#",
      image: Card3,
    }
  ];

  return (
    <div className="blog-section-home sectionPadding">
      <div className=" my-5">
        <div className="row">
          {cardsData.map((card) => (
            <div key={card.id} className="col-md-6 mb-4 col-lg-6 col-xl-4">
              <div
                className="card h-100 rounded p-4"
                style={{
                  boxShadow: '0 4px 12px rgba(69, 69, 69, 0.13)',
                  border: 'none',
                  transition: 'transform 0.3s ease',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={`Card ${card.id}`}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body mt-3">


                  <a
                    href={card.link}
                    className="text-decoration-none"
                    style={{ color: "#6C2DC7", fontSize: "14px", fontWeight: "bold" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.title}
                  </a>


                  <h5 className="card-title mt-2 fw-bold">
                    {card.title} <span style={{ float: "right" }}><i class="fa-solid fa-arrow-right"></i></span>
                  </h5>
                  <p className="card-text" style={{ color: "grey", textAlign: "" }}>{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



  );
};

export default SliderCard;

