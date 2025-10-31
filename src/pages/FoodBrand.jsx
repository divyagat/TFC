import "@fortawesome/fontawesome-free/css/all.min.css";


const FoodBrand = () => {
  return (
    <>
      {/* Food Brand Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #F4F9F4 0%, #E8F5E9 100%)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          margin: 0,
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-5">
            {/* Left Content */}
            <div className="col-lg-6 col-md-12" data-aos="fade-left">
              <div
                style={{
                  textAlign: "start",
                  padding: "0 1rem",
                  position: "relative",
                }}
              >
                {/* Title */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      fontSize: "clamp(28px, 5vw, 48px)",
                      lineHeight: "1.3",
                      color: "#106A39",
                      margin: 0,
                      marginTop: "-50px",
                      marginBottom: "-10px",
                      fontSize: "clamp(1.5rem, 4vw, 3rem)",
                    }}
                  >
                    Home-Cooked Goodness:
                    <br />
                    <span style={{ color: "#733c1d" }}>Handmade masalas and</span>{" "}

                    <br />
                    <span style={{ color: "#106A39" }}>
                      slow-cooking techniques
                    </span>
                    .
                  </h2>

                  <p
                    style={{
                      fontSize: "clamp(14px, 2vw, 16px)",
                      color: "#555",
                      maxWidth: "90%",
                      marginTop: "1rem",
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                    }}
                  >
                    Experience the warmth of home-cooked meals. Every dish is
                    crafted with handmade masalas and slow-cooked to bring out
                    authentic flavors.
                  </p>
                </div>

                {/* Highlight Boxes */}
                <div className="row g-4">
                  {/* Box 1 */}
                  <div className="col-12 col-sm-6">
                    <div
                      className="highlight-box"
                      style={{
                        padding: "1.5rem",
                        borderRadius: "1.2rem",
                        backgroundColor: "#fff",
                        transition: "all 0.3s ease",
                        height: "100%",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                      }}
                    >
                      <img
                        className="highlight-img"
                        src="/assets/img/Whytfc/Authentic Taste, Just Like Home.png"
                        alt="Authentic Taste"
                        style={{
                          width: "50px",
                          marginBottom: "10px",
                          alignSelf: "flex-start",
                        }}
                      />
                      <h6
                        style={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          fontSize: "clamp(16px, 2.5vw, 20px)",
                          marginBottom: "1rem",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        Authentic Taste, Just Like Home
                      </h6>

                      <ul
                        style={{
                          paddingLeft: 0,
                          listStyle: "none",
                          margin: 0,
                          width: "100%",
                        }}
                      >
                        {[
                          { icon: "fas fa-seedling", text: "Recipes crafted with handmade masalas" },
                          { icon: "fas fa-utensils", text: "Slow-cooked for authentic flavor" },
                          { icon: "fas fa-home", text: "Comfort of home-cooked meals" },
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="highlight-item"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "8px",
                              fontSize: "clamp(14px, 1.8vw, 16px)",
                              color: "#444",
                              fontFamily: '"Playfair Display", serif',
                              fontWeight: 500,
                              textAlign: "left",
                              justifyContent: "flex-start",
                              width: "100%",
                            }}
                          >
                            <i
                              className={item.icon}
                              style={{
                                marginRight: "8px",
                                color: "#4CAF50",
                                minWidth: "16px",
                                textAlign: "left",
                              }}
                            ></i>
                            {item.text}
                          </li>
                        ))}
                      </ul>

                      {/* Inline mobile-specific CSS */}
                      <style>
                        {`
        @media (max-width: 576px) {
          .highlight-box,
          .highlight-item,
          .highlight-img,
          .highlight-box h6 {
            text-align: left !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
          }
        }
      `}
                      </style>
                    </div>
                  </div>



                  {/* Box 2 */}
                  <div className="col-12 col-sm-6">
                    <div
                      style={{
                        padding: "1.5rem",
                        borderRadius: "1.2rem",
                        backgroundColor: "#fff",
                        transition: "all 0.3s ease",
                        height: "100%",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        textAlign: "left",
                        marginBottom: "1rem",
                      }}
                    >
                      <img
                        className="highlight-img"
                        src="/assets/img/Whytfc/No Preservatives, Just Pure Flavor.png"
                        alt="No Preservatives"
                        style={{ width: "50px", marginBottom: "10px" }}
                      />
                      <h6
                        style={{
                          fontWeight: 700,
                          fontSize: "clamp(16px, 2.5vw, 20px)",
                          marginBottom: "1rem",
                          textAlign: "left",
                          fontFamily: '"Playfair Display", serif',
                        }}
                      >
                        No Preservatives, Just Pure Flavor
                      </h6>
                      <ul
                        style={{
                          paddingLeft: 0,
                          listStyle: "none",
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 500,
                        }}
                      >
                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            marginBottom: "8px",
                            fontSize: "clamp(14px, 1.8vw, 16px)",
                            color: "#444",
                          }}
                        >
                          <i
                            className="fas fa-leaf"
                            style={{ marginRight: "8px", color: "#4CAF50" }}
                          ></i>
                          100% natural ingredients
                        </li>
                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            marginBottom: "8px",
                            fontSize: "clamp(14px, 1.8vw, 16px)",
                            color: "#444",
                          }}
                        >
                          <i
                            className="fas fa-ban"
                            style={{ marginRight: "8px", color: "#4CAF50" }}
                          ></i>
                          No artificial preservatives
                        </li>
                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            fontSize: "clamp(14px, 1.8vw, 16px)",
                            color: "#444",
                          }}
                        >
                          <i
                            className="fas fa-heart"
                            style={{ marginRight: "8px", color: "#4CAF50" }}
                          ></i>
                          Wholesome, pure taste
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Media Query for Small Screens */}
                  <style>
                    {`
      @media (max-width: 576px) {
        .highlight-img {
          width: 75px !important;      /* smaller image */
          display: block;              /* make it block */
          margin: 0 auto 10px auto;    /* center horizontally */
        }
      }
    `}
                  </style>
                </div>

              </div>
            </div>

            {/* Right Images */}
            <div className="col-lg-6 text-center" data-aos="fade-right">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "-50px",

                }}
              >
                {/* Top Large Image */}
                <img
                  src="/NewImg/Masala 03.png"
                  alt="Food Brand Visual 1"
                  style={{
                    marginTop: "-40px",
                    width: "100%",
                    borderRadius: "1rem",
                    marginBottom: "-20px",
                  }}
                />

                {/* Bottom Two Images Side by Side */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <img
                    src="/NewImg/Masala 02.png"
                    alt="Food Brand Visual 2"
                    style={{
                      width: "100%",
                      borderRadius: "1rem",
                    }}
                  />
                  <img
                    src="/assets/img/Masala process_071025 (1).png"
                    alt="Food Brand Visual 3"
                    style={{
                      width: "100%",
                      borderRadius: "1rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inline CSS for hover + Google Font import */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');

          .highlight-box:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
          @media (max-width: 768px) {
            .highlight-box {
              text-align: center;
            }
            .highlight-item {
              justify-content: center;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default FoodBrand;
