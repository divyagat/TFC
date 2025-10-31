import React, { useEffect, useRef, useState } from "react";

const InstagramReels = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showEmbed, setShowEmbed] = useState({});

  const instagramPosts = [
    { url: "https://www.instagram.com/reel/DDqpqj2NOUU/", cover: "/ReviewVideos/TFC 1.jpg" },
    { url: "https://www.instagram.com/reel/DMIaudaNNeW/", cover: "/ReviewVideos/TFC 2.jpg" },
    { url: "https://www.instagram.com/reel/DLIGHn0PF8N/", cover: "/ReviewVideos/TFC 3.jpg" },
    { url: "https://www.instagram.com/reel/DJZNwCzNaxI/", cover: "/ReviewVideos/TFC 4.jpg" },
    { url: "https://www.instagram.com/reel/DMu2GuRtjWZ/", cover: "/ReviewVideos/TFC 5.jpg" },
    { url: "https://www.instagram.com/reel/DM0BcQTNpth/", cover: "/ReviewVideos/TFC 6.jpg" },
  ];

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll (only for mobile)
  useEffect(() => {
    if (!isMobile) return;

    const container = scrollContainerRef.current;
    let index = 0;
    const scrollInterval = setInterval(() => {
      if (!container) return;
      index = (index + 1) % instagramPosts.length;
      container.scrollTo({
        left: index * container.offsetWidth,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(scrollInterval);
  }, [isMobile]);

  // Convert Instagram URL to embed URL
  const getEmbedUrl = (url) => {
    const match = url.match(/\/reel\/([^/]+)/);
    return match ? `https://www.instagram.com/reel/${match[1]}/embed` : url;
  };

  return (
    <section
      style={{
        padding: isMobile ? "40px 10px" : "80px 0",
        backgroundColor: "#fdfdfd",
        textAlign: "center",
      }}
    >
      {/* Title Section */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? "20px" : "40px" }}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            width: "100%",
          }}
          id="Contact-Us"
        >
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", // ✅ uniform across site
              textAlign: "center",
              marginTop:"-10px",
              color: "#5a1903",
             fontSize: "clamp(35px, 4vw, 65px)",

            }}
            data-aos="zoom-in"
          >
            Meet Our <span style={{ color: "#106A39" }}>Instagram Reels</span>
          </h1>

          <div
            style={{
              height: "4px",
              width: isHovered ? "350px" : "0px",
              backgroundColor: "#28a745",
              transition: "width 0.4s ease-in-out",
              marginBottom: "20px",
            }}
          />
        </div>

        <h6
          style={{
            maxWidth: isMobile ? "90%" : "550px",
            margin: "0 auto",
            fontFamily: '"Open Sans", sans-serif',
            lineHeight: "1.5",
            fontWeight: 600,
            fontSize: isMobile ? "0.9rem" : "1.2rem",
            color: "#444",
          }}
        >
          "Discover moments, creativity, and behind-the-scenes fun—follow us for daily reels!"
        </h6>
      </div>

      {/* Scrollable Reels */}
      <div
        ref={scrollContainerRef}
        style={{
          display: "flex",
          gap: isMobile ? "0px" : "20px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          padding: isMobile ? "0" : "10px",
          maxWidth: isMobile ? "100vw" : "calc(300px * 4 + 20px * 3)",
          margin: "0 auto",
          justifyContent: isMobile ? "flex-start" : "center",
          scrollSnapType: isMobile ? "x mandatory" : "none",
        }}
      >
        {instagramPosts.map((post, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              width: isMobile ? "100vw" : "300px", // ✅ one full video at a time on mobile
              height: isMobile ? "70vh" : "520px",
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              cursor: "pointer",
              scrollSnapAlign: isMobile ? "center" : "none",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
              }
            }}
          >
            {!showEmbed[index] ? (
              <div
                onClick={() =>
                  setShowEmbed((prev) => ({ ...prev, [index]: true }))
                }
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  backgroundColor: "#000",
                }}
              >
                <img
                  src={post.cover}
                  alt={`Reel ${index + 1} Cover`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(90%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(0,0,0,0.6)",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    width="34px"
                    height="34px"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ) : (
              <iframe
                src={getEmbedUrl(post.url)}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{
                  border: "none",
                  borderRadius: "18px",
                  maxWidth: "100%",
                }}
              ></iframe>
            )}
          </div>
        ))}
      </div>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/hotel_tfc_branch_indapur"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: isMobile ? "25px" : "40px",
          backgroundColor: "#28a745",
          color: "#fff",
          padding: isMobile ? "10px 20px" : "12px 25px",
          borderRadius: "30px",
          fontSize: "1rem",
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.backgroundColor = "#218838";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.backgroundColor = "#28a745";
        }}
      >
        Visit My Instagram
      </a>
    </section>
  );
};

export default InstagramReels;
