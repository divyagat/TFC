import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhoAreWe = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float1 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      @keyframes float2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
      @keyframes float3 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

      .floating { animation-duration: 6s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }

      @media (max-width: 1200px) {
        .floating { width: 8vh !important; }
      }
      @media (max-width: 992px) {
        .floating { width: 6vh !important; }
       .softdrink-right h1 { font-size: 2.5rem !important; }
      }
      @media (max-width: 768px) {
        .floating { width: 5vh !important; }
        .softdrink-right h1 { font-size: 2rem !important; }
        .softdrink-right h2 { font-size: 1.3rem !important; }
      }
      @media (max-width: 576px) {
        .floating { width: 4vh !important; }
        .softdrink-right h1 { font-size: 1.7rem !important; }
      .softdrink-right h2 { font-size: 1.1rem !important; }
        .softdrink-right { padding-right: 0 !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section
      className="softdrink-section padding-top-40 padding-bottom-40 overflow-hidden w-100"
      style={{ background: "linear-gradient(135deg, #f9fff9 0%, #ffffff 100%)", position: "relative", zIndex: 1 }}
    >
      {/* Title + Underline */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", position: "relative", width: "100%" }}
      >
        <h1
          className="mb-2"
          data-aos="zoom-in"
          style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontStyle: "normal", textAlign: "center", marginBottom: "0.5rem", color: "#5a1903" }}
        >
          who are we
        </h1>

        <div
          style={{
            height: "4px",
            width: isHovered ? "350px" : "0px",
            backgroundColor: "#28a745",
            transition: "width 0.5s ease-in-out",
            marginBottom: "18px",
            borderRadius: "5px",
          }}
        />
      </div>

      <div className="container position-relative">
        {/* Decorative Floating Leaves */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
          <img src="/assets/img/icons/21.png" alt="leaf" className="floating" style={{ position: "absolute", width: "10vh", top: "15%", left: "40%", opacity: 0.8, animationName: "float1" }} />
          {/* <img src="/assets/img/icons/2.png" alt="leaf" className="floating" style={{ position: "absolute", width: "15vh", top: "50%", right: "50%", opacity: 0.8, animationName: "float2", animationDelay: "1.5s", zIndex: 1000 }} /> */}
          <img src="/assets/img/icons/5.png" alt="leaf" className="floating" style={{ position: "absolute", width: "12vh", top: "85%", left: "20%", opacity: 0.8, animationName: "float3", animationDelay: "3s" }} />
        </div>

        {/* Text + Image */}
        <div className="row pb-5 d-flex align-items-center flex-wrap">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0" data-aos="fade-right">
            <div className="softdrink-right pe-lg-5">
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, color: "#106A39", lineHeight: "1.4", fontSize: "3rem" }}>
                From Maharashtra’s Heart  <span style={{ color: "#733c1d" }}>– to Punjab’s Spirit  </span> <br /> A Feast of Traditions
              </h1>
              <p style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400, fontSize: "1.1rem", lineHeight: "1.8", marginTop: "15px", color: "#444" }}>
                Hotel TFC brings the vibrant flavors of Maharashtra and Punjab to the heart of Indapur. We serve authentic vegetarian and non-vegetarian dishes in a warm, inviting atmosphere. At TFC, every meal is more than just food — it’s a celebration of tradition, taste, and culinary heritage.
              </p>
              <ul style={{ marginTop: "25px", paddingLeft: 0, listStyle: "none", fontFamily: '"Playfair Display", serif', fontSize: "1.1rem", lineHeight: "1.9", color: "#444" }}>
                {[
                  "Authentic Maharashtrian dishes crafted with regional spices",
                  "Bold Punjabi flavors that bring zest to every bite",
                  "A fusion of tradition and modern culinary artistry",
                  "Fresh vegetarian & non-vegetarian delights for every palate",
                ].map((point, index) => (
                  <li key={index} className="d-flex align-items-start mb-3" style={{ transition: "all 0.3s ease-in-out", cursor: "pointer" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#28a745"; e.currentTarget.querySelector("i").style.transform = "scale(1.2)"; e.currentTarget.querySelector("i").style.color = "#ffc107"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#444"; e.currentTarget.querySelector("i").style.transform = "scale(1)"; e.currentTarget.querySelector("i").style.color = "#28a745"; }}
                  >
                    <i className="fas fa-check-circle me-2" style={{ color: "#28a745", marginTop: "5px", fontSize: "1.2rem", transition: "all 0.3s ease-in-out" }}></i>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image */}
          {/* Right Image */}
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-left"
            style={{
              display: "flex",
              justifyContent: window.innerWidth <= 768 ? "center" : "flex-start", // center on mobile
              alignItems: "center",
              margin: window.innerWidth <= 768 ? "20px auto" : "0", // optional spacing on mobile
            }}
          >
            <img
              src="/NewImg/who are we 11_.png"
              alt="Who Are We"
              style={{
                maxWidth: "100%",
                height: "auto",
                transform: "scale(1.05)",
                transition: "all 0.4s ease-in-out",
                borderRadius: "20px",
                marginBottom:"-38px",
                marginTop:"-38px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            />
          </div>

        </div>

        {/* Decorative Shapes */}
        <div className="decorative-shapes position-absolute item-animateTwo top-0 start-0 w-100 h-100">
          <span className="position-absolute floating" style={{ top: "20%", left: "-40px" }}>
            <img src="/assets/img/icons/8.png" alt="Decorative Left" style={{ width: "60px", height: "60px" }} />
          </span>
          <span className="position-absolute rotating" style={{ bottom: "10%", right: "30px" }}>
            {/* <img src="/assets/img/icons/10.png" alt="Decorative Right" style={{ width: "80px", height: "80px" }} /> */}
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
