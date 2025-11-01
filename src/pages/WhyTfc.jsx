import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhyTfc = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }

      .floating-deco {
        position: absolute;
        z-index: 0;
        animation: float 4s ease-in-out infinite;
        pointer-events: none;
        transition: all 0.3s ease;
      }

      .feature-icon {
        max-width: 80px;
      }

      .feature-list {
        list-style: none;
        padding-left: 0;
        margin: 0;
      }

      .feature-list li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 15px;
      }

      .feature-list li i {
        color: #28a745;
        margin-right: 10px;
        font-size: 16px;
      }

      /* RESPONSIVE STYLES */
      @media (max-width: 1200px) {
        .floating-deco { max-width: 80px !important; }
      }

      @media (max-width: 992px) {
        .floating-deco { max-width: 60px !important; }
      }

      @media (max-width: 768px) {
        .floating-deco { max-width: 50px !important; }
        .single-fea { padding: 6px 12px !important; }

        /* 👇 Added: Adjust layout for small screens */
        .why-tfc-img {
          margin-bottom: 10px !important; /* reduce bottom space */
        }
        .why-tfc-text {
          margin-top: 10px !important; /* reduce top margin */
          text-align: left !important; /* align text to left */
        }
      }

      @media (max-width: 576px) {
        .floating-deco { max-width: 40px !important; }
        .single-fea { padding: 6px 12px !important; }
        .drink-ind-right { padding: 0 10px !important; }

        /* 👇 Mobile fine-tuning */
        .why-tfc-img {
          margin-bottom: 8px !important;
        }
        .why-tfc-text {
          margin-top: 8px !important;
          text-align: left !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (


    <section
      className="drink-ind padding-top-60 overflow-hidden position-relative"
      style={{ backgroundImage: "url('/assets/img/Whytfc/paper texture_ 4.png')" }}
    >


      {/* Inline style for responsive margin */}
      <style>
        {`
          @media (max-width: 576px) {
            .why-tfc-text {
              margin-top: -70px !important;
            }
          }
        `}
      </style>


      {/* Decorative Floating Images */}
      <img src="/assets/img/icons/20.png" alt="leaf1" className="floating-deco" style={{ top: "18%", left: "12%", width: "90px", animationDelay: "0s" }} />
      <img src="/assets/img/icons/1.png" alt="spice1" className="floating-deco" style={{ top: "30%", right: "5%", width: "50px", animationDelay: "1s" }} />
      <img src="/assets/img/icons/21.png" alt="leaf2" className="floating-deco" style={{ bottom: "33%", left: "10%", width: "70px", animationDelay: "0.5s" }} />
      <img src="/Animatedcoriander/fresh-coriander-leaves-white-background__1_-removebg-preview.png" alt="leaf2" className="floating-deco" style={{ bottom: "27%", left: "35%", width: "180px", animationDelay: "0.5s" }} />
      <img src="/assets/img/Homeimg/1785dc3f-a5e4-43c6-b65b-5ce9ee247bfd.jpg" alt="spice2" className="floating-deco" style={{ bottom: "68%", right: "53%", width: "90px", animationDelay: "1.5s" }} />

      <div className="container-fluid px-3 px-md-5 margin-bottom-0">
        {/* Heading */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontStyle: "normal",
              textAlign: "center",
              marginBottom: "0.5rem",
              marginTop: "-30px",
              color: "#5a1903",
             fontSize: "clamp(50px, 4vw, 55px)",
            }}
            className="text-center"
            data-aos="zoom-in"
          >
            Why TFC
          </h1>

          <div
            style={{
              height: "4px",
              width: isHovered ? "400px" : "0px",
              backgroundColor: "#28a745",
              transition: "width 0.4s ease-in-out",
              marginBottom: "20px",
            }}
          />
        </div>

        <div className="row align-items-center flex-wrap">
          {/* LEFT IMAGE SECTION */}
          <div
            className="col-lg-6 col-md-12 d-flex justify-content-center position-relative mb-lg-0 why-tfc-img"
            data-aos="fade-right"
            style={{ padding: "20px",marginTop:"-30px" }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "550px", aspectRatio: "1/1" }}>
              <img
                src="/assets/img/Whytfc/Veg handi_311025.png"
                alt="Front Thali"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  zIndex: 2,
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="col-lg-6 col-md-12 why-tfc-text"
            data-aos="fade-left"
            style={{
              marginTop: "40px", // default for larger screens
            }}
          >
            <div className="drink-ind-right px-3 px-md-4" >
              <div className="common-title-area3 text-center text-lg-start mb-4">
                <h2
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontStyle: "normal",
                    color: "#106A39",
                    textAlign: "left",
                    fontSize: "clamp(1.6rem, 4vw, 3rem)", 
                    marginBottom: "10px",
                    marginTop:"-30px",

                  }}
                >
                  Authenticity Guaranteed:
                  <br />
                  <span style={{ color: "#733c1d" }}>Real regional flavors, </span>
                  <br />
                  no gimmicks.
                </h2>
                <p style={{
                  textAlign: "left", fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                }}>
                  We bring you genuine regional flavors crafted with care.
                  Each recipe is made using only the finest ingredients.
                  Experience authentic tastes that celebrate tradition and quality.
                </p>
              </div>

              <div className="row" style={{ margin: 0 }}>
                {/* Feature 1 */}
                <div
                  className="col-12 col-sm-6 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div
                    className="single-fea card h-100"
                    style={{
                      borderRadius: "16px",
                      padding: "8px 20px",
                      backgroundColor: "#fff",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                      textAlign: "left",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 18px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div className="fea-img my-1">
                      <img
                        src="/assets/img/Whytfc/Rooted in Tradition.png"
                        alt="Rooted in Tradition"
                        className="img-fluid feature-icon"
                        style={{ width: "50px" }}
                      />
                    </div>
                    <h5
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 700,
                        margin: "4px 0",
                        color: "#0D1B2A",
                        fontSize: "20px",
                      }}
                    >
                      Rooted in Tradition
                    </h5>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "4px 0 8px 0",
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 500,
                      }}
                    >
                      {[
                        {
                          icon: "fas fa-seedling",
                          text: "Recipes inspired by centuries-old heritage",
                        },
                        {
                          icon: "fas fa-book-open",
                          text: "Cooking methods passed down generations",
                        },
                        {
                          icon: "fas fa-globe-asia",
                          text: "Authentic flavors reflecting regional culture",
                        },
                        {
                          icon: "fas fa-home",
                          text: "Feels like home-cooked goodness",
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: 1.5,
                            marginBottom: index !== 3 ? "6px" : "0",
                          }}
                        >
                          <i
                            className={item.icon}
                            style={{
                              color: "#008000",
                              marginRight: "10px",
                              fontSize: "16px",
                              minWidth: "20px",
                            }}
                          ></i>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Feature 2 */}
                <div
                  className="col-12 col-sm-6 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div
                    className="single-fea card h-100"
                    style={{
                      borderRadius: "16px",
                      padding: "8px 20px",
                      backgroundColor: "#fff",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                      textAlign: "left",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 18px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div className="fea-img my-1">
                      <img
                        src="/assets/img/Whytfc/Pure, Local, Honest.png"
                        alt="Pure, Local, Honest"
                        className="img-fluid feature-icon"
                        style={{ width: "50px" }}
                      />
                    </div>
                    <h5
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 700,
                        margin: "4px 0",
                        color: "#0D1B2A",
                        fontSize: "20px",
                      }}
                    >
                      Pure, Local, Honest
                    </h5>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "4px 0 8px 0",
                         fontFamily: '"Playfair Display", serif',
                      fontWeight: 500,
                      }}
                    >
                      {[
                        {
                          icon: "fas fa-leaf",
                          text: "Locally sourced, fresh ingredients",
                        },
                        {
                          icon: "fas fa-check-circle",
                          text: "No artificial flavors — only pure taste",
                        },
                        {
                          icon: "fas fa-hand-holding-heart",
                          text: "Supporting local farmers & communities",
                        },
                        {
                          icon: "fas fa-eye",
                          text: "Transparency — what you see is what you eat",
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: 1.5,
                            marginBottom: index !== 3 ? "6px" : "0",
                          }}
                        >
                          <i
                            className={item.icon}
                            style={{
                              color: "#008000",
                              marginRight: "10px",
                              fontSize: "16px",
                              minWidth: "20px",
                            }}
                          ></i>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* row end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTfc;
