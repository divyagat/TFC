import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Drink = () => {
  return (
    <section
      className="drink-ind py-5 position-relative"
      style={{
        backgroundImage: "url('/assets/img/Whytfc/paper texture_ 4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center gy-5">
          {/* Left Image Section */}
          <div
            className="col-lg-6 d-flex flex-column align-items-center position-relative"
            data-aos="fade-right"
            style={{ animation: "fadeInLeft 1.2s ease forwards", position: "relative", marginTop:"40px" }}
          >
            {/* Decorative Floating Image - Top */}
            {/* <img
              src="/Animatedcoriander/fresh-coriander-leaves-white-background__1_-removebg-preview.png"
              alt="htshape21"
              className="img-fluid mb-3"
              style={{ width: "20%",  top: "70%",
                left: "150px",
                width: "20%",
                height: "20%",
                zIndex: 0, zIndex: 3, animation: "bounce 2s infinite" }}
            /> */}

            {/* Main Image */}
            <img
              src="/NewImg/Unmatched Heritage.png"
              alt="Unmatched Heritage"
              className="img-fluid"
              style={{ width: "90%", zIndex: 2, marginTop: "-40px" }}
            />

            {/* Floating Decorations */}
            <img
              src="/Animatedcoriander/green-leaves-coriander-isolated-white-surface-removebg-preview.png"
              alt="Decorative Left Top"
              className="floating-decor"
              style={{
                top: "10px",
                left: "150px",
                width: "20%",
                height: "20%",
                zIndex: 0,
              }}
            />
            <img
              src="/Animatedcoriander/parsley-white-background-top-view-removebg-preview.png"
              alt="Decorative Bottom Left"
              className="floating-decor"
              style={{
                bottom: "50px",
                left: "-90px",
                width: "35%",
                height: "35%",
                zIndex: 0,
              }}
            />
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="drink-ind-right">
              <div className="common-title-area3 text-center text-md-start mb-4">
                <h2
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontStyle: "normal",
                    color: "#733c1d ",
                    marginTop: "-70px",
                    textAlign: "left",
                    fontSize: "clamp(1.5rem, 4vw, 3rem)", 
                  }}
                >
                  Unmatched Heritage:
                  <span className="" style={{ color: "#106A39" }}> Recipes passed down </span>
                  through generations.
                </h2>
                <p style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 500, textAlign: "left"
                }}>
                  Our culinary creations carry the legacy of generations. Each
                  recipe has been carefully preserved and handed down, keeping
                  the authentic flavors and traditional methods alive. From our
                  family kitchens to your table, we bring timeless recipes
                  perfected over decades. Every dish tells a story of heritage,
                  tradition, and love for true, authentic taste.
                </p>
              </div>

              {/* Features */}
              <div className="row g-4">
                {/* Quality Hops */}
                <div className="col-md-6">
                  <div
                    className="single-fea shadow-sm bg-white h-100 p-3"
                    style={{
                      borderRadius: "20px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div
                      className="fea-img mb-3 text-center"
                      style={{ borderRadius: "40px", overflow: "hidden" }}
                    >
                      <img
                        src="/assets/img/Whytfc/Crafted with Legacy.png"
                        alt="Quality Hops"
                        className="img-fluid"
                        style={{ width: "60px", borderRadius: "40px" }}
                      />
                    </div>
                    <h5
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 700,
                        marginBottom: "10px",
                        fontSize: "18px",
                        textAlign:"left",
                        marginTop:"-20px",
                      }}
                    >
                      Quality Hops
                    </h5>
                    <ul style={{
                      listStyle: "none", padding: 0, margin: 0, fontFamily: '"Playfair Display", serif',
                      fontWeight: 500, textAlign: "left"
                    }}>
                      <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <i className="fas fa-seedling" style={{ color: "#008000", marginRight: "10px" }}></i>
                        Crafted with legacy hops for rich aroma
                      </li>
                      <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <i className="fas fa-leaf" style={{ color: "#008000", marginRight: "10px" }}></i>
                        Natural ingredients only
                      </li>
                      <li style={{ display: "flex", alignItems: "center" }}>
                        <i className="fas fa-tint" style={{ color: "#008000", marginRight: "10px" }}></i>
                        Smooth, balanced taste
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Premium Malts */}
                <div className="col-md-6">
                  <div
                    className="single-fea shadow-sm bg-white h-100 p-3"
                    style={{
                      borderRadius: "20px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div
                      className="fea-img mb-3 text-center"
                      style={{ borderRadius: "40px", overflow: "hidden" }}
                    >
                      <img
                        src="/assets/img/Whytfc/Tradition in Every Bite.png"
                        alt="Premium Malts"
                        className="img-fluid"
                        style={{ width: "60px", borderRadius: "40px" }}
                      />
                    </div>
                    <h5
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 700,
                        marginBottom: "10px",
                        fontSize: "18px",
                        textAlign:"left",
                        marginTop:"-20px",
                      }}
                    >
                      Premium Malts
                    </h5>
                    <ul style={{
                      listStyle: "none", padding: 0, margin: 0, fontFamily: '"Playfair Display", serif',
                      fontWeight: 500, textAlign:"left"
                    }}>
                      <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <i className="fas fa-bread-slice" style={{ color: "#008000", marginRight: "10px" }}></i>
                        Tradition in every bite
                      </li>
                      <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <i className="fas fa-star" style={{ color: "#008000", marginRight: "10px" }}></i>
                        Crafted for premium smooth taste
                      </li>
                      <li style={{ display: "flex", alignItems: "center" }}>
                        <i className="fas fa-heart" style={{ color: "#008000", marginRight: "10px" }}></i>
                        Loved across generations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Floating Decoration - Bottom Right */}
              <img
                src="/assets/img/icons/21.png"
                alt="Decorative Right"
                className="floating-decor"
                style={{ bottom: "-20px", right: "-30px", width: "70px", height: "70px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-30px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes floating {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }

          .floating-decor {
            position: absolute;
            animation: floating 4s ease-in-out infinite;
          }

          /* Responsive */
          @media (max-width: 992px) {
            .drink-ind-right { text-align: center; }
            .single-fea { text-align: center; }
          }

          @media (max-width: 576px) {
            .floating-decor { display: none; }
          }
        `}
      </style>
    </section>
  );
};

export default Drink;
