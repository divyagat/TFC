import React, { useEffect, useState } from 'react';
import './WhyWeRock.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUtensils, FaChalkboardTeacher, FaRegHandshake, FaUserTie, FaUserFriends } from "react-icons/fa";
import { MdOutlineSupportAgent, MdLocalShipping, MdOutlineHowToVote } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
import { GiCookingPot, GiMeal } from "react-icons/gi";
import { RiBuilding2Fill, RiTeamFill } from "react-icons/ri";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhyWeRock = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="why-we-rock py-5" id='about-us'>
      <div className="container">
        {/* ======= Title ======= */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}
        >
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              textAlign: "center",
              color: "#5a1903",
              fontSize: "clamp(2.5rem, 5vw, 3.3rem)", // responsive font size
              marginTop: "-10px",
              marginBottom: "0px", // space below the text
            }}
            className="title text-center"
            data-aos="fade-down"
          >
            About Us
          </h1>

          {/* Hover underline */}
          <div
            style={{
              height: "4px",
              width: isHovered ? "200px" : "0px",
              backgroundColor: "#28a745",
              transition: "width 0.4s ease-in-out",
            }}
          />
        </div>


        <div className="container py-5">

          {/* ======= Owner’s Words Section ======= */}
          <div className="row align-items-center g-5 mb-5 position-relative" data-aos="fade-up">

            {/* Text */}
            <div className="col-lg-6 col-12 order-2 order-lg-1">
              <div className="p-4 p-lg-5 rounded-5 shadow-lg position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #fff7f0, #ffffff)",
                  zIndex: 2,
                  transition: "transform 0.3s ease",
                  cursor: "default",
                  marginTop:"-60px",
                }}>
                <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-sm-block"
                  style={{
                    background: "rgba(255,230,200,0.05)",
                    transform: "rotate(-45deg)",
                    zIndex: 1
                  }}></span>
                <h5 className="fw-bold text-success mb-2" style={{ zIndex: 2, position: "relative" }}>
                  Owner’s Words
                </h5>
                <p
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 500,
                    lineHeight: "1.8",
                    fontSize: "1rem",
                    color: "#4a4a4a",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  I am <strong>Ashwini Chormale</strong>, an Electronics & Telecommunication
                  Engineer by education. After marriage, I found a new purpose—to carry forward
                  our family’s love for food. What began with sharing traditions on social media
                  has grown into <strong>Traditional Food Company (Hotel TFC)</strong>, known
                  for authentic flavors and heartfelt hospitality.
                  <br /><br />
                  I am deeply grateful to our followers and loyal customers whose support
                  inspires me every day. My vision is simple—to serve quality food at honest
                  prices while keeping traditions alive, so every guest feels the warmth of home
                  in every meal.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 col-12 order-1 order-lg-2 d-flex justify-content-center mb-4 mb-lg-0">
              <div className="image-wrapper" style={{ position: "relative", zIndex: 2, marginTop: "5px" }}>
                <img
                  src="/About/IMG_3649.JPG"
                  alt="Ashwini Chormale"
                  className="rounded-5 shadow-xl"
                  style={{
                    width: "100%",
                    maxWidth: "380px",
                    borderRadius: "25px",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  }}
                  onMouseOver={(e) => {
                    if (window.innerWidth > 768) { // hover effect only for non-small screens
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = "0 40px 80px rgba(0,0,0,0.3)";
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.25)";
                  }}
                />
              </div>
            </div>

          </div>

          {/* ======= Managing Director’s Words Section ======= */}
          <div className="row align-items-center g-5 mb-5 position-relative flex-lg-row-reverse" data-aos="fade-up">

            {/* Text */}
            <div className="col-lg-6 col-12 order-2 order-lg-1">
              <div className="p-4 p-lg-5 rounded-5 shadow-lg position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #f0f9ff, #ffffff)",
                  zIndex: 2,
                  transition: "transform 0.3s ease",
                  cursor: "default",
                  marginTop:"-50px",
                }}>
                <span className="position-absolute bottom-0 end-0 w-100 h-100 d-none d-sm-block"
                  style={{
                    background: "rgba(200,230,255,0.05)",
                    transform: "rotate(45deg)",
                    zIndex: 1
                  }}></span>
                <h5 className="fw-bold text-success mb-4" style={{ zIndex: 2, position: "relative" }}>
                  Managing Director’s Words
                </h5>
                <p
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 500,
                    lineHeight: "1.8",
                    fontSize: "1rem",
                    color: "#4a4a4a",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  As Managing Director of <strong>Traditional Food Company (Hotel TFC)</strong>,
                  <strong> Akshay Chormale</strong> brings a strong foundation in Electronics & Telecommunication
                  Engineering and years of leadership experience. His expertise in strategic management drives the growth and vision of Hotel TFC.
                  <br /><br />
                  Under his guidance, Hotel TFC continues to deliver authentic flavors with quality and
                  hospitality at its core. With integrity and a focus on customer trust, he leads the team
                  toward sustained growth and excellence in the food industry.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 col-12 order-1 order-lg-2 d-flex justify-content-center mb-4 mb-lg-0">
              <div className="image-wrapper" style={{ position: "relative", zIndex: 2 }}>
                <img
                  src="/About/IMG_7710.jpg"
                  alt="Akshay Chormale"
                  className="rounded-5 shadow-xl"
                  style={{
                    width: "100%",
                    maxWidth: "380px",
                    borderRadius: "25px",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    transform: "rotate(0deg) scale(1)", // default
                  }}
                  onMouseOver={(e) => {
                    if (window.innerWidth > 768) {
                      e.currentTarget.style.transform = "rotate(0deg) scale(1.1)";
                      e.currentTarget.style.boxShadow = "0 40px 80px rgba(0,0,0,0.3)";
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                    e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.25)";
                  }}
                />
              </div>
            </div>

          </div>

        </div>



        <div
          className="right-features d-flex flex-wrap justify-content-center"
          style={{ gap: "25px", marginTop:"-50px" }}
        >
          {[
            {
              icon: "🎯",
              title: "Target Audience",
              text: "We attract today’s youth with modern yet soulful experiences that connect tradition with contemporary taste.",
            },
            {
              icon: "🏆",
              title: "Prominence",
              text: "Our journey has been recognized by leading media houses and covered widely across platforms.",
            },
            {
              icon: "🌿",
              title: "Fresh Concept",
              text: "Our idea of ‘Taste the Kulhad Chai’ brought a refreshing, nostalgic touch that resonates with millions.",
            },
            {
              icon: "💎",
              title: "Brand Value",
              text: "From a humble beginning, Hotel TFC has grown into a trusted and beloved brand for authentic food experiences.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="feature p-4 text-center"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              style={{
                flex: "1 1 22%",
                minWidth: "220px",
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{feature.icon}</div>
              <h5
                className="fw-bold text-dark mb-2"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {feature.title}
              </h5>
              <p style={{ fontFamily: '"Playfair Display", serif', lineHeight: "1.6", color: "#555" }}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>



        {/* ======= See More Button ======= */}
        <div className="see-more-wrapper mt-5 text-center" data-aos="fade-up">
          <button
            onClick={() => setShowMore(!showMore)}
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 700,
              fontFamily: '"Playfair Display", serif',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#218838'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#28a745'}
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
        </div>

        {/* ======= Expandable Section ======= */}
        {showMore && (
          <div className="more-content mt-5" data-aos="fade-up" style={{ backgroundColor: '#fefefe', padding: '2rem 1rem' }}>
            <div className="container-fluid px-2 px-sm-4">
              {/* More About Us */}
              <h2
                className="text-center fw-bold mb-3 text-success"
                style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}
              >
                <FaUtensils className="me-2" /> More About Us
              </h2>
              <p
                className="text-center text-muted mb-4"
                style={{ maxWidth: '720px', margin: '0 auto', fontFamily: '"Playfair Display", serif', fontWeight: 700 }}
              >
                Partner with <strong>Hotel TFC</strong> to popularize authentic Maharashtrian & Punjabi cuisine with a sustainable business model.
              </p>

              <div className="row gy-4">
                {/* Who We’re Looking For */}
                <div className="col-lg-6 col-12" data-aos="fade-right">
                  <div className="p-3 shadow-sm rounded bg-white h-100 border">
                    <h4 className="fw-bold mb-3 text-success" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                      <FaUserTie className="me-2" /> Who We’re Looking For
                    </h4>
                    <ul className="list-unstyled">
                      {["Value authentic cooking", "Embrace traditional methods", "Focus on customer experience", "Seek sustainable growth"].map((item, idx) => (
                        <li key={idx} className="mb-2 d-flex" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                          <span className="me-2">🔹</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Support We Provide */}
                <div className="col-lg-6 col-12" data-aos="fade-left">
                  <div className="p-3 shadow-sm rounded bg-white h-100 border">
                    <h4 className="fw-bold mb-3 text-success" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                      <MdOutlineSupportAgent className="me-2" /> Support We Provide
                    </h4>
                    <div className="row">
                      {[
                        [
                          { icon: <FaUserFriends className="me-2 text-info" />, text: "Staff Training" },
                          { icon: <RiBuilding2Fill className="me-2 text-secondary" />, text: "Architect Support" },
                          { icon: <MdLocalShipping className="me-2 text-danger" />, text: "Logistics" },
                          { icon: <GiCookingPot className="me-2 text-success" />, text: "Masala Supply" },
                          { icon: <MdOutlineHowToVote className="me-2 text-dark" />, text: "Licensing" }
                        ],
                        [
                          { icon: <BiCheckShield className="me-2 text-primary" />, text: "Quality Audits" },
                          { icon: <GiMeal className="me-2 text-success" />, text: "Nutritious Cooking" },
                          { icon: <FaUserFriends className="me-2 text-info" />, text: "Vendor Tie-ups" },
                          { icon: <RiTeamFill className="me-2 text-warning" />, text: "Corporate Events" },
                          { icon: <FaChalkboardTeacher className="me-2 text-danger" />, text: "Training Support" }
                        ]
                      ].map((col, idx) => (
                        <div className="col-12 col-sm-6" key={idx}>
                          <ul className="list-unstyled">
                            {col.map((item, i) => (
                              <li key={i} className="mb-2 d-flex align-items-start" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                                {item.icon}{item.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Brand Identity */}
                <div className="col-12" data-aos="zoom-in">
                  <div className="p-3 shadow-sm rounded bg-white border">
                    <h4 className="fw-bold mb-3 text-success" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                      <BiCheckShield className="me-2" /> Brand Identity & Marketing
                    </h4>
                    <ul className="list-unstyled" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                      <li className="mb-2">🎯 PR & Social Media Strategy</li>
                      <li className="mb-2">🎯 Brand Collaborations</li>
                      <li className="mb-2">🎯 Strong Nationwide Presence</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-5" data-aos="fade-up">
                <h5 className="fw-bold text-success" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                  <FaUtensils className="me-2" /> Why Choose Hotel TFC?
                </h5>
                <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto', fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                  Join a brand that blends heritage with modern hospitality. With our full-spectrum support, make your mark in India's food franchise revolution.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default WhyWeRock;
