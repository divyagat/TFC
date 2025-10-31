import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const leftMenu = [
    { id: "our-specilities", label: "Specialities" },
    { id: "about-us", label: "About Us" },
    { id: "dishes", label: "Dishes" },
  ];

  const rightMenu = [
    { id: "Ambience", label: "Ambience" },
    { id: "reviews", label: "Reviews" },
    { id: "Contact-Us", label: "Contact Us" },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navTextStyle = (isHovered) => ({
    position: "relative",
    display: "inline-block",
    color: isHovered ? "#106A39" : "#5a1903",
    textDecoration: "none",
    fontFamily: '"Playfair Display", serif',
    fontWeight: 1000,
    fontSize: "15px",
    paddingBottom: "5px",
    transition: "color 0.3s ease-in-out",
    cursor: "pointer",
  });

  const underlineStyle = (isHovered) => ({
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "2px",
    width: isHovered ? "100%" : "0",
    backgroundColor: "#D4AF37",
    transition: "width 0.3s ease-in-out",
  });

  return (
    <>
      <header
        className="m-0 p-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",

          zIndex: 1000,
        }}
      >
        {/* Desktop Header */}
        <div
          className="d-none d-lg-flex justify-content-center align-items-center px-3"
          style={{
            backgroundColor: "#FFF8EE",
            borderBottom: "6px solid green",
            height: "85px",
          }}
        >
          {/* Left Menu */}
          <nav className="d-none d-lg-block" style={{ marginRight: "90px" }}>
            <ul
              className="d-flex mb-0 list-unstyled ms-0"
              style={{ gap: "24px", alignItems: "center" }}
            >
              {leftMenu.map((item) => {
                const isHovered = hoveredItem === item.id;
                return (
                  <li
                    key={item.id}
                    className="mx-3 text-uppercase"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ position: "relative" }}
                  >
                    <a href={`#${item.id}`} style={navTextStyle(isHovered)}>
                      {item.label}
                      <span style={underlineStyle(isHovered)} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Center Logo */}
          <div className="px-4" data-aos="fade-up">
            <HashLink smooth to="/#hero" className="d-inline-block">
              <div
                style={{
                  backgroundColor: "#FFF8EE",
                  borderRadius: "50%",
                  padding: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  marginTop: "80px",
                  height: "100px",
                  width: "100px",
                  border: "3px solid green",
                  marginRight: "50px",
                }}
              >
                <img
                  src="/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                  alt="Logo"
                  style={{ height: "115px", width: "115px" }}
                />
              </div>
            </HashLink>
          </div>

          {/* Right Menu */}
          <nav className="d-none d-lg-block" style={{ paddingLeft: "0px" }}>
            <ul
              className="d-flex mb-0 list-unstyled ms-0"
              style={{ gap: "24px", alignItems: "center" }}
            >
              {rightMenu.map((item) => {
                const isHovered = hoveredItem === item.id;
                return (
                  <li
                    key={item.id}
                    className="mx-3 text-uppercase"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ position: "relative" }}
                  >
                    <a href={`#${item.id}`} style={navTextStyle(isHovered)}>
                      {item.label}
                      <span style={underlineStyle(isHovered)} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Mobile Header */}
        <div
          className="d-flex d-lg-none justify-content-between align-items-center px-3"
          style={{
            backgroundColor: "#FFF8EE",
            borderBottom: "6px solid #50A502",
          }}
        >
          {/* Mobile Logo */}
          <HashLink smooth to="/#hero" data-aos="fade-right">
            <img
              src="/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
              alt="Logo"
              className="mobile-logo"
              style={{
                height: "80px",
                width: "80px",
                objectFit: "contain",
                transition: "all 0.3s ease-in-out",
                marginTop: "10px",
              }}
            />
          </HashLink>

          {/* Inline Responsive CSS */}
          <style>
            {`
    /* For all mobile and tablet screens */
    @media (max-width: 991px) {
      .mobile-logo {
        height: 90px !important;
        width: 90px !important;
        margin-top: 10px !important;
      }
    }
  `}
          </style>


          {/* Mobile Toggle */}
          <button
            className="btn border-0 bg-transparent"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "20px",
              width: "25px",
              padding: 0,
            }}
          >
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                style={{
                  height: "3px",
                  width: "100%",
                  backgroundColor: "black",
                  borderRadius: "2px",
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Add space so content isn’t hidden behind header */}
      <div style={{ marginTop: "80px" }} />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            zIndex: 1050,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            overflowY: "auto",
            transition: "opacity 0.3s ease",
            padding: "20px",
          }}
        >
          <div
            className="bg-white d-flex flex-column align-items-center p-4"
            style={{
              width: "80%",
              maxWidth: "340px",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              animation: "fadeIn 0.3s ease",
            }}
          >
            {/* Logo and Close */}
            <div className="w-100 d-flex justify-content-between align-items-center mb-3">
              <img
                src="/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                alt="Logo"
                style={{
                  height: "60px",
                  width: "60px",
                  objectFit: "contain",
                }}
              />
              <button
                className="btn border-0 bg-transparent"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: "26px",
                  color: "#333",
                  lineHeight: "1",
                  padding: "5px 7px",
                }}
              >
                ✕
              </button>
            </div>

            {/* All Links */}
            <div className="w-100 text-center mb-2">
              {[...leftMenu, ...rightMenu].map((item) => (
                <div key={item.id} className="mb2">
                  <a
                    href={`#${item.id}`}
                    className="text-dark fw-semibold text-decoration-none"
                    style={{
                      fontSize: "16px",
                      display: "inline-block",
                      padding: "8px 0",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Inline Keyframes for Fade Animation */}
          <style>
            {`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 576px) {
          div.bg-white {
            width: 100%;
            max-width: 300px;
            padding: 1.5rem;
          }

          div.bg-white img {
            height: 80px !important;
            width: 80px !important;
          }

          div.bg-white a {
            font-size: 15px !important;
          }
        }

        @media (max-width: 400px) {
          div.bg-white {
            border-radius: 15px;
            padding: 1rem;
          }
        }
      `}
          </style>
        </div>
      )}

    </>
  );
};

export default Header;