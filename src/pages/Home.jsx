// CSS Imports
import "./Template.css";
import "./Animation.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoMail } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
// import { Link } from "react-router-dom";

// ✅ Swiper imports (only once)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// React & Hooks
import React, { useState, useEffect } from "react";

// Router & Components
import { Link } from "react-router-dom";
import Contact from "./Contact";
import WhyWeRock from "./why-we-rock";
import Slider from "react-slick";
import Header from "../components/Header";
import OurSpecialities from "./OurSpecilities";
import WhoAreWe from "./WhoAreWe";
import WhyTfc from "./WhyTfc";
import FoodBrands from "./FoodBrand";
import FoodBrand from "./FoodBrand";
import Drink from "./Drink";
import VideoSection from "./VideoSection";
import FranchiseForm from "./FranchiseForm";




function Home() {


    // const HeroSection = () => {
    const [bgImage, setBgImage] = useState("/assets/img/web images_2.jpg");
    const [isMobile, setIsMobile] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            setBgImage(
                mobile ? "" : "/assets/main bg_V4_Text Frame.jpg"
            );
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const steamStyle = (delay, leftOffset) => ({
        position: "absolute",
        width: "40px",
        height: "80px",
        left: leftOffset,
        bottom: "25%",
        zIndex: 3,
        pointerEvents: "none",
        animation: hovered ? `steamRise ${4 + delay}s ease-in-out ${delay}s infinite` : "none",
        opacity: 0.7,
        transition: "transform 0.3s ease",
    });










    // const ExploreDishes = ({ category }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getHeadingText = () => {
        if (category === "signature") return "Signature Dishes";
        if (category === "maharashtrian") return "Maharashtrian Dishes";
        if (category === "punjabi") return "Punjabi Dishes";
        return "";
    };

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            alert("Please enter a valid email address.");
            return;
        }

        // Perform actual subscription logic here (API call, etc.)
        console.log("Subscribed with:", email);

        // Reset email field
        setEmail("");

        alert("Thank you for subscribing!");
    };

    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 200);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    const [category, setCategory] = useState("signature");
    // const [category, setCategory] = useState("signature");
    //  const [category, setCategory] = useState("maharashtrian");






    const dishes = {
        signature: [
            { name: "Baingan Thali", img: "/assets/img/DishesMah/Baingan Thali.jpg", badge: "Best Seller" },
            { name: "Puran Poli", img: "/assets/img/DishesMah/puran poli .jpg", badge: "Veg" },
            // { name: "Paneer Tikka", img: "/assets/img/WhatsAppimg/WhatsApp Image 2025-07-23 at 5.00.09 PM.jpeg", badge: "Veg" },
            { name: "Chi. Champaran Handi", img: "/assets/img/SplDishes/Motton handi_TFC_181025_02.jpg", badge: "Veg" },
            { name: "Special Chicken Thali", img: "/assets/img/SplDishes/Special Chicken Thali_TFC_181025_02.jpg", badge: "Veg" },
            { name: "Mutton Jatra", img: "/assets/img/SplDishes/Mutton Jatra Thali_TFC_181025_.jpeg", badge: "Non-Veg" },
            { name: "Masswadi", img: "/NewImg/WhatsApp Image 2025-09-16 at 11.23.39 AM.jpeg", badge: "Veg" },
            { name: "Biryani", img: "/assets/img/Biryani.jpg", badge: "Veg" },

            // more...
        ],
        maharashtrian: [
            { name: "Amm rass thali ", img: "/assets/img/DishesMah/Amm rass thali .jpg", badge: "Hot" },
            { name: "Baingan Thali", img: "/assets/img/DishesMah/Baingan Thali.jpg", badge: "Sweet" },
            { name: "Khava puran Poli Thali", img: "/assets/img/DishesMah/Khava puran Poli Thali.jpg", badge: "Snack" },
            { name: "Khobhra Poli Thali ", img: "/assets/img/DishesMah/Khobhra Poli Thali .jpg", badge: "Snack" },
            { name: "Maswadi thali ", img: "/assets/img/punjabi fav..jpg", badge: "Snack" },
            { name: "Mix dal amti thali", img: "public/assets/img/DishesMah/Mix dal amti thali [MH].jpg", badge: "Snack" },
            { name: "Pitla Bhakari", img: "/assets/img/DishesMah/pitla bhakari .jpg", badge: "Snack" },
            { name: "Puran Poli", img: "/assets/img/DishesMah/puran poli .jpg", badge: "Snack" },
            // { name: "Vada Pav", img: "/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "/assets/img/Exploreitems/vadapav.png", badge: "Snack" },

            // more...
        ],
        punjabi: [
            { name: "Alu Matar", img: "/assets/img/DishesPunjab/Alu Matar  P.jpg", badge: "Spicy" },
            { name: "Dal fry", img: "/assets/img/DishesPunjab/Dal fry p .jpg", badge: "Classic" },
            { name: "Dal tadka", img: "/assets/img/DishesPunjab/dal tadka p.jpg", badge: "Classic" },
            { name: "Green Peas", img: "/assets/img/DishesPunjab/Green Peass p.jpg", badge: "Classic" },
            { name: "kaju Masala", img: "/assets/img/DishesPunjab/kaju masala p.jpg", badge: "Classic" },
            { name: "Kaju Panner", img: "/assets/img/DishesPunjab/kaju panner p .jpg", badge: "Classic" },
            { name: "Matar Panner", img: "/assets/img/DishesPunjab/matar panner p.jpg", badge: "Classic" },
            { name: "Mix Veg", img: "/assets/img/DishesPunjab/mix veg p .jpg", badge: "Classic" },
            { name: "Panner Handi", img: "/assets/img/DishesPunjab/Panner handi p .jpg", badge: "Classic" },
            { name: "Panner Kadai", img: "/assets/img/DishesPunjab/panner kadai p .jpg", badge: "Classic" },
            { name: "Panner Tikka", img: "/assets/img/DishesPunjab/panner tikka.jpg", badge: "Classic" },


            // more...
        ]
    };




    const items = [
        {
            img: '/assets/img/Exploreitems/htshape12.png',
            title: 'Gunna Can',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: 'hot',
        },
        {
            img: '/assets/img/Exploreitems/htshape13.png',
            title: 'Dr Pepper Can',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: '',
        },
        {
            img: '/assets/img/Exploreitems/htshape14.png',
            title: 'Ocem Blue',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: 'new',
        },
        {
            img: '/assets/img/Exploreitems/htshape15.png',
            title: 'Calyps Ocem',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: 'sale',
        },
    ];
    // useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
    });
    // }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 800,         // Transition speed
        slidesToShow: 3,    // Show 3 videos at a time
        slidesToScroll: 1,  // Scroll one at a time
        autoplay: true,     // Enable auto-slide
        autoplaySpeed: 3000, // 3 seconds per slide
        pauseOnHover: true,  // Pause when hovering
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };



    // Testimonials Section

    const instagramVideos = [
        {
            url: "https://www.instagram.com/reel/DL45kQEt4t1/?igsh=MWdtNDJqcW16b250OA==",
            cover: "/ReviewVideoCoverimg/t1.jpg", // 👈 Add cover image path
        },
        {
            url: "https://www.instagram.com/reel/DJtzgQzNpGC/?igsh=cjhtaWw1OHJmZGtt",
            cover: "/ReviewVideoCoverimg/t2.jpg",
        },
        {
            url: "https://www.instagram.com/reel/DEr-f5ot3GP/?igsh=MWVybnN1eGp5OGVweQ==",
            cover: "/ReviewVideoCoverimg/t3.jpg",
        },
        {
            url: "https://www.instagram.com/reel/DCWkpx3t7Fl/?igsh=anJ3NzQ1eWtxdTVm",
            cover: "/ReviewVideoCoverimg/t4.jpg",
        },
        {
            url: "https://www.instagram.com/reel/DB8X_pPokCS/?igsh=MWdmajJ1NzA3OGIyNg==",
            cover: "/ReviewVideoCoverimg/t5.jpg",
        },
        {
            url: "https://www.instagram.com/reel/DBnhmD-PMbr/?igsh=NXY0eWxyOWxscWpo",
            cover: "/ReviewVideoCoverimg/t6.jpg",
        },
        {
            url: "https://www.instagram.com/reel/DBJR5rpvRj2/?igsh=MThpazIwZWx1czNodg==",
            cover: "/ReviewVideoCoverimg/t7.jpg",
        },
    ];

    const settings1 = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 1 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };

    // const InstagramReviews = () => {
    const [activeVideo, setActiveVideo] = useState(null);







    // const ReviewsSection = () => {
    useEffect(() => {
        // Load Instagram embeds after component mounts
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <>




            <div className="container-fluid m-0 p-0 overflow-hidden">


                <Header />


                {/* Hero Section */}
                <section
                    id="hero"
                    className="delivery-area burger-promo-area position-relative overflow-hidden p-0 d-flex align-items-center"
                    style={{
                        backgroundImage: `url('${isMobile
                            ? "/assets/1 st Slide photo v4_Mobile view_BG.jpg" // ✅ Mobile background
                            : bgImage
                            }')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        minHeight: isMobile ? "100vh" : "93vh", // ✅ flexible height
                        zIndex: 0,
                        marginTop: "-20px",
                    }}
                >
                    {/* Container */}
                    <div
                        className="container"
                        style={{
                            position: "relative",
                            zIndex: 4,
                            marginTop: "0px",
                            marginLeft: isMobile ? "0px" : "190px",
                            padding: isMobile ? "0 15px" : "0",
                        }}
                    >
                        <div className="row mt-0 flex-column flex-lg-row">
                            {/* Text */}
                            <div
                                className="col-lg-6 col-md-12 d-flex flex-column justify-content-center"
                                data-aos="fade-right"
                                style={{
                                    textAlign: "left",
                                    marginTop: isMobile ? "4.5rem" : "0", // ✅ smaller offset
                                    marginLeft: isMobile ? "40px" : "0",
                                }}
                            >
                                <div className="delivery-right px-2 px-md-4">
                                    <div className="common-title-area pb-4">
                                        <h3
                                            style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 900,
                                                marginTop: "50px",
                                                color: "#bb3f0fff",
                                                letterSpacing: "1px",
                                                fontSize: isMobile ? "16px" : "16px",
                                            }}
                                            className="text-uppercase"
                                        >
                                            Slow cook perfection
                                        </h3>
                                        <h1
                                            style={{
                                                fontSize: isMobile ? "26px" : "clamp(36px, 5vw, 70px)",
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 1000,
                                                lineHeight: 1.2,
                                            }}
                                            className="fw-bold"
                                        >
                                            Authentic <span style={{ color: "#106A39" }}>Flavors.</span>{" "}
                                            <span style={{ color: "#bb3f0fff" }}>Timeless</span> Traditions
                                        </h1>
                                        <h4
                                            style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 900,
                                                fontSize: isMobile ? "16px" : "18px",
                                                color: "#106A39",
                                                marginTop: "10px",
                                            }}
                                        >
                                            Family Recipes, Shared.
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div
                                className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center  mt-lg-0"
                                data-aos="fade-left"
                            >
                                <img
                                    className="img-fluid "
                                    src="/assets/V4_01.png"
                                    alt="Authentic Flavors"
                                    style={{
                                        maxWidth: isMobile ? "100%" : "80%", // ✅ full width on mobile
                                        height: isMobile ? "auto" : "80vh", // ✅ keep aspect ratio
                                        borderRadius: "15px",
                                        marginTop: isMobile ? "100px" : "0",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>








                <OurSpecialities />





                <WhoAreWe />





                <WhyTfc />






                <FoodBrand />





                <Drink />





                {/* Food Brand Section */}
                <section
                    className="food-brand-section py-5 m-0"
                    data-aos="fade-up"
                    style={{ backgroundColor: "#F4F9F4", overflow: "hidden" }}
                >
                    <div className="container">
                        <div className="row align-items-center gy-5">
                            {/* Left Section */}
                            <div
                                className="col-lg-5 col-md-12"
                                data-aos="fade-right"
                                style={{
                                    padding: "30px",
                                    borderRadius: "20px",
                                    backgroundColor: "#F4F9F4",
                                }}
                            >
                                <div className="food-brand-left text-lg-start text-center">
                                    <div className="common-title-area3 mb-4">
                                        <h1
                                            className="mb-3"
                                            style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 700,
                                                fontSize: "clamp(24px, 4vw, 3rem)",
                                                lineHeight: "1.4",
                                                color: "#733c1d",
                                                textAlign: "left",
                                                marginTop: "-60px",
                                                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                                                marginTop: "-40px",
                                            }}
                                        >
                                            Value & Portions: <span style={{ color: "#106A39" }}>Hearty meals, </span><br />
                                            generous thalis,{" "}
                                            <span style={{ color: "#106A39" }}>and great value.</span>
                                        </h1>
                                        <p
                                            style={{
                                                fontSize: "clamp(14px, 1.6vw, 16px)",
                                                color: "#555",
                                                maxWidth: "500px",
                                                margin: "0 auto",
                                                textAlign: "left",
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 700,
                                            }}
                                        >
                                            Generous portions, wholesome flavors, and great value. Every meal
                                            is crafted to leave you fully satisfied.
                                        </p>
                                    </div>

                                    {/* Icon Cards */}
                                    <div className="inner-brand my-4" style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontWeight: 500,
                                    }}>
                                        <div className="row justify-content-center justify-content-lg-start g-4">
                                            {[
                                                {
                                                    img: "/assets/img/Whytfc/Generous Portions, Great Value.png",
                                                    title: "Generous Portions, Great Value",
                                                    points: [
                                                        { icon: "fas fa-seedling", text: "Generous Portions" },
                                                        { icon: "fas fa-coins", text: "Great Value" },
                                                        { icon: "fas fa-utensils", text: "Affordable Thalis" },
                                                        { icon: "fas fa-heart", text: "Authentic Taste" },
                                                    ],
                                                },
                                                {
                                                    img: "/assets/img/Whytfc/Affordable Thalis, Authentic Taste.png",
                                                    title: "Affordable Thalis, Authentic Taste",
                                                    points: [
                                                        { icon: "fas fa-seedling", text: "Generous Portions" },
                                                        { icon: "fas fa-coins", text: "Great Value" },
                                                        { icon: "fas fa-utensils", text: "Affordable Thalis" },
                                                        { icon: "fas fa-heart", text: "Authentic Taste" },
                                                    ],
                                                },
                                            ].map((card, idx) => (
                                                <div key={idx} className="col-12 col-sm-6">
                                                    <div
                                                        className="brand-card h-100"
                                                        style={{
                                                            background: "#fff",
                                                            padding: "20px",
                                                            borderRadius: "15px",
                                                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                                            textAlign: "left",
                                                            transition: "transform 0.3s ease",
                                                            cursor: "pointer",
                                                            height: "100%",
                                                            fontFamily: '"Playfair Display", serif',
                                                            fontWeight: 500,
                                                        }}
                                                        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                                                        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                                                    >
                                                        <img
                                                            src={card.img}
                                                            alt={card.title}
                                                            className="card-img"
                                                            style={{ width: "60px", marginBottom: "10px" }}
                                                        />
                                                        <h6
                                                            style={{
                                                                fontFamily: '"Playfair Display", serif',
                                                                fontWeight: 700,
                                                                fontSize: "clamp(16px, 2vw, 1rem)",
                                                                marginBottom: "8px",
                                                            }}
                                                        >
                                                            {card.title}
                                                        </h6>
                                                        <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: 1.8 }}>
                                                            {card.points.map((p, i) => (
                                                                <li
                                                                    key={i}
                                                                    style={{
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        fontSize: "clamp(14px, 1.6vw, 15px)",
                                                                        marginBottom: i !== card.points.length - 1 ? "6px" : "0",
                                                                    }}
                                                                >
                                                                    <i className={`${p.icon} icon-green`} style={{ marginRight: "8px" }}></i>
                                                                    {p.text}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Responsive CSS for small screens */}
                                        <style jsx>{`
  @media (max-width: 576px) {
    .card-img {
      width: 73px !important;      /* smaller image */
      display: block;              /* make it block to center */
      margin: 0 auto 10px auto;    /* center horizontally and keep bottom margin */
    }
  }
`}</style>

                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div
                                className="col-lg-7 col-md-12 text-center position-relative"
                                data-aos="fade-left"
                                style={{ backgroundImage: "url('/assets/img/Thali Background_071025.png')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px", padding: "20px", marginTop: "-40px", marginBottom: "-30px" }}
                            >
                                <div
                                    className="food-brand-right mx-auto d-flex flex-wrap justify-content-center align-items-center"
                                    style={{
                                        width: "100%",
                                        position: "relative",
                                        gap: "1rem",
                                    }}
                                >
                                    {/* Thali Images with slow animations */}
                                    {[
                                        "/NewImg/Thali 04.png", // comes from right
                                        "/NewImg/IMG_7859 2.png", // comes from left
                                        "/NewImg/Veg handi.png", // comes from bottom
                                    ].map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`Thali ${i + 1}`}
                                            style={{
                                                width: "45%",
                                                maxWidth: "350px",
                                                height: "auto",
                                                borderRadius: "20px",
                                                opacity: 0,
                                                animation:
                                                    i === 0
                                                        ? "slideFromRight 2.5s ease-out forwards"
                                                        : i === 1
                                                            ? "slideFromLeft 2.5s ease-out forwards 0.5s"
                                                            : "slideFromBottom 2.5s ease-out forwards 1s",
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Inline CSS for animations */}
                                <style>
                                    {`
      @keyframes slideFromRight {
        0% { transform: translateX(200px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideFromLeft {
        0% { transform: translateX(-200px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideFromBottom {
        0% { transform: translateY(200px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }

      /* Responsive */
      @media (max-width: 992px) {
        img {
          width: 60% !important;
          max-width: 320px !important;
          margin-bottom: 1rem;
        }
      }
      @media (max-width: 576px) {
        img {
          width: 100% !important;
          max-width: 350px !important;
        }
      }
    `}
                                </style>
                            </div>

                        </div>
                    </div>

                    {/* Styles */}
                    <style>
                        {`
      .thali-img {
        width: 32%;
        max-width: 250px;
        height: auto;
        border-radius: 15px;
        transition: transform 0.3s ease;
        animation: floating 4s ease-in-out infinite;
      }

      .thali-img:hover {
        transform: translateY(-5px) scale(1.02);
      }

      @keyframes floating {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }

      /* Tablet */
      @media (max-width: 992px) {
        .thali-img {
          width: 45%;
          margin-bottom: 1rem;
        }
      }

      /* Mobile */
      @media (max-width: 576px) {
        .thali-img {
          width: 100%;
          max-width: 300px;
        }
      }
    `}
                    </style>
                </section>












                {/*drink-ind section */}
                <section
                    className="drink-ind py-5 m-0 p-0"
                    data-aos="fade-up"
                    style={{
                        backgroundImage: "url('/assets/img/Whytfc/paper texture_ 4.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        overflow: "hidden",
                    }}
                >
                    <div className="container-fluid" style={{ paddingLeft: "3%", paddingRight: "3%" }}>
                        <div className="row align-items-center gy-5">
                            {/* Left Column - Image */}
                            <div
                                className="col-lg-6 col-md-12 d-flex justify-content-center position-relative"
                                data-aos="fade-right"
                                style={{ textAlign: "center" }}
                            >
                                <div className="drink-ind-left text-center" style={{ position: "relative" }}>
                                    <div
                                        className="d-flex justify-content-center align-items-center"
                                        style={{
                                            position: "relative",
                                            zIndex: 2,
                                            animation: "fadeInLeft 1.2s ease forwards",
                                        }}
                                    >
                                        <img
                                            src="/assets/img/WhatsAppimg/Warm Hospitality.png"
                                            alt="Drink Ingredient"
                                            className="img-fluid rounded-4"
                                            style={{
                                                width: "150%",
                                                maxWidth: "900px",
                                                height: "auto",
                                                transition: "transform 0.3s ease",
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                        />
                                    </div>
                                </div>

                                {/* Decorative Shapes */}
                                <div className="drink-items-shapes position-absolute top-0 start-0 w-100 h-100">
                                    <span
                                        style={{
                                            position: "absolute",
                                            bottom: "10px",
                                            right: "10px",
                                            animation: "float 6s ease-in-out infinite",
                                        }}
                                    >
                                        <img src="/assets/img/icons/9.png" alt="shape2" style={{ height: "60px", width: "60px" }} />
                                    </span>

                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "20px",
                                            transform: "translateY(-50%)",
                                            animation: "float 5s ease-in-out infinite",
                                        }}
                                    >
                                        <img src="/assets/img/icons/17.png" alt="shape3" style={{ height: "70px", width: "70px" }} />
                                    </span>

                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "30%",
                                            animation: "float 3.5s ease-in-out infinite",
                                        }}
                                    >
                                        <img src="/assets/img/icons/16.png" alt="shape4" style={{ height: "60px", width: "60px" }} />
                                    </span>

                                    <span
                                        style={{
                                            position: "absolute",
                                            bottom: "-20px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            animation: "bounce 2s infinite",
                                        }}
                                    >
                                        <img src="/assets/img/icons/6.png" alt="animated bottom" style={{ height: "70px", width: "70px" }} />
                                    </span>
                                </div>
                            </div>

                            {/* Right Column - Text */}
                            <div className="col-lg-6 col-md-12 px-4" data-aos="fade-left" style={{ textAlign: "center" }}>
                                <div className="drink-ind-right">
                                    <div className="common-title-area3 text-center text-md-start mb-4">
                                        <h2
                                            style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 700,
                                                color: "#733c1d",
                                                textAlign: "left",
                                                marginTop: "-79px",
                                                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                                            }}
                                        >
                                            Warm Hospitality: <br className="d-none d-md-block" />
                                            <span style={{ color: "#106A39", fontSize: "clamp(1.5rem, 4vw, 3rem)", }}>
                                                A family-friendly atmosphere{" "}
                                                <span style={{ color: "#733c1d", fontSize: "clamp(1.5rem, 4vw, 3rem)", }}>that feels like home</span>
                                            </span>
                                        </h2>
                                        <p style={{
                                            textAlign: "left", fontFamily: '"Playfair Display", serif',
                                            fontWeight: 700,
                                        }}>
                                            Step into a welcoming space where every guest is treated like family.
                                            Our cozy, family-friendly atmosphere ensures you feel right at home
                                            while enjoying delicious meals. From attentive service to a comfortable
                                            setting, we create an experience that’s warm, inviting, and memorable
                                            for everyone.
                                        </p>
                                    </div>

                                    <div className="row g-4">
                                        {/* Feature 1 */}
                                        <div className="col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                                            <div
                                                className="single-fea d-flex flex-column align-items-start text-start w-100 h-100 p-4 border shadow-sm"
                                                style={{
                                                    borderRadius: "20px",
                                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = "translateY(-5px)";
                                                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
                                                }}
                                            >
                                                <div className="fea-img mb-3">
                                                    <img
                                                        src="/assets/img/Whytfc/Feel at Home, Away from Home.png"
                                                        alt="Feel at Home"
                                                        className="img-fluid"
                                                        style={{ maxWidth: "60px" }}
                                                    />
                                                </div>

                                                <div className="fea-content w-100">
                                                    <h5
                                                        style={{
                                                            fontFamily: '"Playfair Display", serif',
                                                            fontWeight: 700,
                                                            marginBottom: "9px",
                                                            marginTop: "-8px",
                                                            fontSize: "1.2rem",
                                                        }}
                                                    >
                                                        Feel at Home, Away from Home
                                                    </h5>

                                                    <ul style={{
                                                        listStyleType: "none", paddingLeft: 0, margin: 0, fontFamily: '"Playfair Display", serif',
                                                        fontWeight: 500,
                                                    }}>
                                                        <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                                                            <i className="fas fa-home" style={{ color: "#28a745", marginRight: "10px" }}></i>
                                                            Cozy, home-like atmosphere
                                                        </li>
                                                        <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                                                            <i className="fas fa-smile" style={{ color: "#28a745", marginRight: "10px" }}></i>
                                                            Warm and welcoming environment
                                                        </li>
                                                        <li style={{ display: "flex", alignItems: "center" }}>
                                                            <i className="fas fa-users" style={{ color: "#28a745", marginRight: "10px" }}></i>
                                                            Perfect for families and friends
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Feature 2 */}
                                        <div className="col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                                            <div
                                                className="single-fea d-flex flex-column align-items-start text-start w-100 h-100 p-4 border shadow-sm"
                                                style={{
                                                    borderRadius: "20px",
                                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = "translateY(-5px)";
                                                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
                                                }}
                                            >
                                                <div className="fea-img mb-3">
                                                    <img
                                                        src="/assets/img/Whytfc/Comfort Meets Care.png"
                                                        alt="Comfort Meets Care"
                                                        className="img-fluid"
                                                        style={{ maxWidth: "60px" }}
                                                    />
                                                </div>

                                                <div className="fea-content w-100">
                                                    <h5
                                                        style={{
                                                            fontFamily: '"Playfair Display", serif',
                                                            fontWeight: 700,
                                                            marginBottom: "10px",
                                                            marginTop: "-10px",
                                                            fontSize: "1.2rem",
                                                        }}
                                                    >
                                                        Comfort Meets Care
                                                    </h5>

                                                    <ul style={{
                                                        listStyleType: "none", paddingLeft: 0, margin: 0, fontFamily: '"Playfair Display", serif',
                                                        fontWeight: 500,
                                                    }}>
                                                        <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                                                            <i className="fas fa-couch" style={{ color: "#28a745", marginRight: "10px" }}></i>
                                                            Relaxing and comfortable seating
                                                        </li>
                                                        <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                                                            <i
                                                                className="fas fa-hand-holding-heart"
                                                                style={{ color: "#28a745", marginRight: "10px" }}
                                                            ></i>
                                                            Attentive and caring service
                                                        </li>
                                                        <li style={{ display: "flex", alignItems: "center" }}>
                                                            <i className="fas fa-gift" style={{ color: "#28a745", marginRight: "10px" }}></i>
                                                            Thoughtful touches for every guest
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animations + Responsive Media Queries */}
                    <style>
                        {`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }

      @keyframes fadeInLeft {
        0% { opacity: 0; transform: translateX(-30px); }
        100% { opacity: 1; transform: translateX(0); }
      }

      /* --- Responsive Styling --- */
      @media (max-width: 1400px) {
        .drink-ind-left img { width: 120%; max-width: 750px; }
      }
      @media (max-width: 1200px) {
        .drink-ind-left img { width: 100%; max-width: 600px; }
      }
      @media (max-width: 992px) {
        .drink-ind-left img { width: 90%; max-width: 480px; margin-bottom: 40px; }
        .drink-ind-right h2 { font-size: 1.9rem; text-align: center; }
      }
      @media (max-width: 768px) {
        .drink-ind-left img { width: 100%; max-width: 420px; }
        .drink-items-shapes img { max-width: 45px; }
        .single-fea { padding: 1.2rem !important; }
      }
      @media (max-width: 576px) {
        .drink-ind-left img { width: 95%; max-width: 360px; }
        .drink-items-shapes { display: none; }
        .drink-ind-right h2 { font-size: 1.5rem; text-align: center; }
      }
    `}
                    </style>
                </section>







                {/*Explore Our Signature Dishes section */}
                <section className="drink-items-section py-5 padding-top-0 padding-bottom-0" data-aos="fade-up" id="dishes" style={{ backgroundImage: "url('/assets/img/Whytfc/paper texture_ 4.png')" }}>
                    {/* Decorative Shapes */}
                    <div className="drink-items-shapes" id="ExploreOurSignatureDishes">
                        <span className="fs-1 item-animateOne">
                            <img src="/assets/img/icons/9.png" alt="shape1" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                        <span className="fs-2">
                            <img src="/assets/img/icons/8.png" alt="shape2" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                        <span className="fs-3 item-animateTwo">
                            <img src="/assets/img/icons/13.png" alt="shape3" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                        <span className="fs-4">
                            <img src="/assets/img/icons/14.png" alt="shape4" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                    </div>

                    <div className="container">
                        {/* Title & Buttons */}
                        <div className="common-title-area3 text-center mb-5" data-aos="zoom-in">
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
                                <h2 className="padding-top-20 padding-bottom-20"
                                    style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontOpticalSizing: "auto",
                                        fontWeight: 700,
                                        fontStyle: "normal",
                                        textAlign: "center",
                                        marginBottom: "-1rem",
                                        color: "#5a1903",
                                        marginTop: "-45px",
                                        fontSize: "clamp(35px, 4vw, 55px)",
                                    }}
                                    data-aos="zoom-in"
                                >
                                    {category && (
                                        <>
                                            Explore Our <span>{getHeadingText()}</span>
                                        </>
                                    )}
                                </h2>
                                <p style={{
                                    fontFamily: '"Playfair Display", serif',
                                    fontOpticalSizing: 'auto',
                                    fontFamily: '"Playfair Display", serif',
                                    fontWeight: 500,
                                }} className="fs-5">A Feast of Time-Honored Flavors.</p>

                                {/* Hover underline effect */}
                                <div
                                    style={{
                                        height: "4px",
                                        width: isHovered ? "400px" : "0px",
                                        backgroundColor: "#28a745",
                                        transition: "width 0.4s ease-in-out",
                                        marginBottom: "-8px",
                                    }}
                                />
                            </div>

                            <div className="mt-3 d-flex flex-wrap justify-content-center">
                                {[
                                    { label: "Maharashtrian", value: "maharashtrian" },
                                    { label: "Special", value: "signature" },
                                    { label: "Punjabi", value: "punjabi" },
                                ].map((item) => {
                                    const isActive = category === item.value;
                                    const isMobile = window.innerWidth <= 768;

                                    return (
                                        <button
                                            key={item.value}
                                            onClick={() => setCategory(item.value)}
                                            className={`mx-2 mb-2`}
                                            style={{
                                                padding: isMobile ? "6px 14px" : "10px 20px",
                                                backgroundColor: isActive ? "#4CAF50" : "#f8f9fa",
                                                color: isActive ? "#fff" : "#333",
                                                border: "1px solid #ccc",
                                                borderRadius: "30px",
                                                fontFamily: '"Playfair Display", serif',
                                                fontSize: isMobile ? "0.9rem" : "1rem",
                                                fontWeight: 600,
                                                transition: "all 0.3s ease-in-out",
                                                boxShadow: isActive
                                                    ? "0 4px 12px rgba(76, 175, 80, 0.3)"
                                                    : "0 2px 6px rgba(0, 0, 0, 0.08)",
                                                cursor: "pointer",
                                                minWidth: isMobile ? "100px" : "130px",
                                                textAlign: "center",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = isActive ? "#45a049" : "#e0e0e0";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = isActive ? "#4CAF50" : "#f8f9fa";
                                            }}
                                        >
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </div>


                        </div>

                        {/* Dish Cards Carousel */}
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2500 }}
                            spaceBetween={20}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                        >
                            {dishes[category].map((dish, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="card h-100 shadow-sm border rounded-4 overflow-hidden"
                                        data-aos="fade-up"
                                        data-aos-delay={100 * (index + 1)}
                                    >
                                        <img
                                            src={dish.img}
                                            alt={dish.name}
                                            className="card-img-top"
                                            style={{
                                                height: "200px",
                                                objectFit: "cover",
                                                borderRadius: "1rem 1rem 0 0", // rounded top corners
                                            }}
                                        />
                                        <div className="card-body text-center">
                                            <h5 style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontOpticalSizing: 'auto',
                                                fontWeight: 700, // Replace with your desired weight
                                                fontStyle: 'normal'
                                            }} className="card-title">{dish.name}</h5>
                                            {/* <a href="#" className="text-primary text-decoration-underline fw-semibold">
                                                Buy Now
                                            </a> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                        {/* CTA */}
                        {/* <div className="text-center mt-5" data-aos="zoom-in">
                            <a style={{
                                fontFamily: '"Playfair Display", serif',
                                fontOpticalSizing: 'auto',
                                fontWeight: 700, // Replace with your desired weight
                                fontStyle: 'normal'
                            }} href="food-page.html" className="btn2">See All Items</a>
                        </div> */}
                    </div>
                </section>


                {/* <Dishes/> */}



                {/* Franchise Opportunity */}

                {/* <FranchiseForm /> */}
                <WhyWeRock />


                {/*Our Story */}
                <section className="softdrink-section py-2 padding-top-30 padding-bottom-40" id="our-story" style={{ backgroundImage: "url('/assets/img/Whytfc/paper texture_ 4.png')" }}>
                    <div className="container">
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '100%',
                            }}
                        >
                            <h1
                                style={{
                                    fontFamily: '"Playfair Display", serif',
                                    fontWeight: 700,
                                    fontStyle: 'normal',
                                    textAlign: 'center',
                                    marginBottom: '0.5rem',
                                    marginTop: '10px',
                                    color: '#5a1903',
                                    fontSize: "clamp(35px, 4vw, 55px)",
                                }}
                                className="text-center"
                                data-aos="zoom-in"
                            >
                                Our Story
                            </h1>

                            <div
                                style={{
                                    height: '4px',
                                    width: isHovered ? '400px' : '0px',
                                    backgroundColor: '#28a745',
                                    transition: 'width 0.4s ease-in-out',
                                    marginBottom: "20px"
                                }}
                            />
                        </div>

                        <div className="row pb-5 align-items-center gy-4">
                            {/* Left Content */}
                            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0" data-aos="fade-right">
                                <div style={{
                                    position: "relative",
                                    padding: "50px 40px",
                                    background: "#ffffff",
                                    borderRadius: "30px",
                                    boxShadow: "0 35px 70px rgba(0,0,0,0.1)",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow = "0 45px 80px rgba(0,0,0,0.15)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 35px 70px rgba(0,0,0,0.1)";
                                    }}
                                >
                                    {/* Decorative Gradient Shape */}
                                    <div style={{
                                        position: "absolute",
                                        top: "-80px",
                                        right: "-80px",
                                        width: "200px",
                                        height: "200px",
                                        background: "linear-gradient(135deg, #28a745, #106A39)",
                                        opacity: 0.1,
                                        borderRadius: "50%",
                                        transform: "rotate(45deg)"
                                    }}></div>

                                    <div style={{
                                        position: "absolute",
                                        bottom: "-60px",
                                        left: "-60px",
                                        width: "150px",
                                        height: "150px",
                                        background: "linear-gradient(135deg, #733c1d, #e3b99b)",
                                        opacity: 0.12,
                                        borderRadius: "50%",
                                        transform: "rotate(45deg)"
                                    }}></div>

                                    {/* Heading */}
                                    <h2 style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontWeight: 800,
                                        fontSize: "2.2rem",
                                        color: "#106A39",
                                        marginBottom: "1.8rem",
                                        lineHeight: "1.3"
                                    }}>
                                        The Heartbeat of Indapur's <span style={{ color: "#733c1d" }}>Heritage Cuisine</span>
                                    </h2>

                                    {/* Intro Paragraph */}
                                    <p style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontWeight: 400,
                                        fontSize: "1.05rem",
                                        lineHeight: "1.75",
                                        color: "#4a4a4a",
                                        marginBottom: "2rem"
                                    }}>
                                        Hotel TFC was born from a deep love for authentic Indian cuisine — especially the bold, soulful flavors of Maharashtrian non-veg dishes. Inspired by childhood memories of home-cooked meals and slow-cooked masalas, TFC celebrates culinary heritage where culture meets flavor in every dish.
                                    </p>

                                    {/* Feature List */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "2rem" }}>
                                        {[
                                            "Authentic Maharashtrian & Punjabi dishes",
                                            "Slow-cooked masalas & traditional recipes",
                                            "Warm, welcoming dining experience",
                                        ].map((item, idx) => (
                                            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                                <div style={{
                                                    width: "14px",
                                                    height: "14px",
                                                    background: "#28a745",
                                                    borderRadius: "50%"
                                                }}></div>
                                                <p style={{
                                                    fontFamily: '"Playfair Display", serif',
                                                    fontSize: "1rem",
                                                    color: "#4a4a4a",
                                                    margin: 0,
                                                    fontWeight: 500
                                                }}>{item}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Floating Quote Box */}
                                    <div style={{
                                        position: "relative",
                                        background: "linear-gradient(135deg, #fff8f0, #fff4e6)",
                                        padding: "25px 30px",
                                        borderRadius: "25px",
                                        borderLeft: "6px solid #28a745",
                                        boxShadow: "0 15px 45px rgba(0,0,0,0.1)",
                                        fontStyle: "italic",
                                        zIndex: 2
                                    }} data-aos="fade-up">
                                        <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                                            {/* Quote Icon */}
                                            <div style={{
                                                width: "55px",
                                                height: "55px",
                                                borderRadius: "50%",
                                                background: "#28a745",
                                                color: "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "1.6rem",
                                                flexShrink: 0,
                                                boxShadow: "0 5px 15px rgba(0,0,0,0.12)"
                                            }}>
                                                <i className="fas fa-quote-right"></i>
                                            </div>

                                            {/* Quote Text */}
                                            <div>
                                                <h5 style={{
                                                    fontFamily: '"Playfair Display", serif',
                                                    fontWeight: 700,
                                                    fontSize: "1.1rem",
                                                    color: "#733c1d",
                                                    marginBottom: "6px"
                                                }}>
                                                    “Every dish tells a story, connecting tradition and flavor.”
                                                </h5>
                                                <p style={{
                                                    fontFamily: '"Playfair Display", serif',
                                                    fontWeight: 400,
                                                    fontSize: "1rem",
                                                    color: "#555",
                                                    marginBottom: 0
                                                }}>
                                                    Experience the true soul of Indapur's cuisine at Hotel TFC.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* Right Images */}
                            {/* Right Images */}
                            <div className="col-lg-6 col-md-12 d-flex justify-content-center" data-aos="fade-left">
                                <img
                                    src="/NewImg/Untitled design (35).png"
                                    alt=""
                                    className="img-fluid rounded"
                                    style={{
                                        maxHeight: "600px",
                                        width: "100%",
                                        objectFit: "cover",
                                        marginBottom: "-30px",
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </section>



                {/* Our Ambience */}
                <section
                    className="banner-gallery banner-gallery2 overflow-hidden padding-top-30 padding-bottom-20"
                    id="Ambience"
                    style={{ backgroundColor: "#F4F9F4" }}
                >
                    {/* Section Title */}
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
                                marginBottom: "1px",
                                marginTop: "5px",
                                color: "#5a1903",
                                fontSize: "clamp(35px, 4vw, 55px)", // ✅ responsive title
                            }}
                            className="text-center"
                            data-aos="zoom-in"
                        >
                            Our Ambience
                        </h1>

                        <div
                            style={{
                                height: "4px",
                                width: isHovered ? "50%" : "0px", // ✅ flexible underline
                                backgroundColor: "#28a745",
                                transition: "width 0.4s ease-in-out",
                                marginBottom: "2.5rem",
                                maxWidth: "400px", // keeps your desktop size
                            }}
                        />
                    </div>

                    <div className="container position-relative">
                        {/* Decorative Shapes */}
                        <div className="del-shapes">
                            <span className="ds-2 item-bounce">
                                <img
                                    // src="/assets/img/icons/16.png"
                                    alt="Shape 28"
                                    style={{ width: "10px", maxWidth: "20vw" }}
                                />
                            </span>
                        </div>
                        {/* First Row */}
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up">
                                <div
                                    className="gallery-img-1"
                                    style={{
                                        backgroundImage: "url('/assets/img/OurAmbience/ambience 5_071025_01 (2).png')",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        position: "relative",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: "250px",
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontWeight: 700,
                                            position: "absolute",
                                            bottom: "10px",
                                            left: "10px",
                                            color: "#fff",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
                                            textShadow: "1px 1px 4px rgba(0,0,0,0.4)", // ✅ subtle shadow for readability
                                        }}
                                    >
                                        Hotel TFC
                                    </h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in">
                                <div
                                    className="gallery-img-3"
                                    style={{
                                        backgroundImage: "url('/assets/img/OurAmbience/2nd image_071025_01.png')",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        position: "relative",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: "200px",
                                    }}
                                >
                                    <div
                                        className="gimg-content"
                                        style={{
                                            position: "absolute",
                                            bottom: "10px",
                                            left: "10px",
                                            color: "#fff",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        <h5
                                            style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 700,
                                                marginBottom: "0",
                                                fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
                                            }}
                                        >
                                            welcoming Envi- <br /> ronment
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-left">
                                <div
                                    className="gallery-img-2 d-flex justify-content-end"
                                    style={{
                                        backgroundImage: "url('/assets/img/OurAmbience/kitchen TFC _071025_01 (1).png')",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        position: "relative",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: "200px",
                                    }}
                                >
                                    <div
                                        className="gimg-content"
                                        style={{
                                            position: "absolute",
                                            bottom: "10px",
                                            right: "10px",
                                            color: "#fff",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        <h5
                                            style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 700,
                                                marginBottom: "0",
                                                fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
                                            }}
                                        >
                                            Kitchen<br />TFC
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="row margin-top-30">
                            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
                                <div
                                    className="gallery-img-3 gallery-img-33"
                                    style={{
                                        backgroundImage: "url('/assets/img/OurAmbience/Parking TFC_071025_01 (3).png')",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        position: "relative",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: "200px",
                                    }}
                                >
                                    <h5
                                        style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontWeight: 700,
                                            position: "absolute",
                                            bottom: "10px",
                                            left: "10px",
                                            color: "#fff",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
                                            textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        Super<br />Parking<br />TFC
                                    </h5>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
                                <div
                                    className="gallery-img-22 d-flex justify-content-end"
                                    style={{
                                        backgroundImage: "url('/assets/img/OurAmbience/super deli_071025_01 (3).png')",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        position: "relative",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: "200px",
                                    }}
                                >
                                    <div
                                        className="gimg-content"
                                        style={{
                                            position: "absolute",
                                            bottom: "10px",
                                            right: "10px",
                                            color: "#fff",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        <h5
                                            style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 700,
                                                marginBottom: "0",
                                                fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
                                            }}
                                        >
                                            Super<br />Delicious
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 mb-4" data-aos="zoom-in">
                                <div
                                    className="gallery-img-1 gallery-img-11 gallery-img-01"
                                    style={{
                                        backgroundImage:
                                            "url('/assets/img/OurAmbience/TFC_MenuDishes_Allinone_071025v2 (2).png')",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        position: "relative",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: "250px",
                                    }}
                                >
                                    <h5
                                        style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontWeight: 700,
                                            position: "absolute",
                                            bottom: "8px",
                                            left: "10px",
                                            color: "#fff",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
                                            textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        Kitchen Thalis TFC
                                    </h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>





                <Contact />

                {/* testimonial */}
                {/* Testimonial Section */}
                <section
                    className="testimonial"
                    id="reviews"
                    style={{
                        backgroundColor: "#F4F9F4",
                        paddingTop: "60px",
                        paddingBottom: "60px",
                        textAlign: "center",
                        position: "relative",
                    }}
                >
                    {/* Section Heading */}
                    <div
                        className="hover-underline"
                        style={{
                            display: "inline-block",
                            position: "relative",
                            cursor: "pointer",
                            paddingBottom: "15px",
                            fontSize: "clamp(35px, 4vw, 45px)",

                        }}
                    >
                        <h1
                            style={{
                                fontFamily: '"Playfair Display", serif',
                                fontWeight: 700,
                                color: "#106A39",
                                marginBottom: "0.3rem",
                                marginTop: "-30px",
                                // fontSize:"clamp(38px, 1.8vw, 16px)",
                            }}
                        >
                            Our Happy
                        </h1>
                        <h1
                            style={{
                                fontFamily: '"Playfair Display", serif',
                                fontWeight: 700,
                                marginBottom: "0",
                                color: "#5a1903",
                                // fontSize:"clamp(38px, 4vw, 16px)",
                            }}
                        >
                            Customers{" "}
                            <span style={{ color: "#28a745", fontWeight: 700 }}>Reviews</span>
                        </h1>
                    </div>

                    {/* Video Slider */}
                    <div className="container" style={{ marginTop: "50px", position: "relative" }}>
                        <Slider
                            {...settings1}
                            dots={true}
                            infinite={true}
                            arrows={true}
                            appendDots={(dots) => (
                                <div
                                    style={{
                                        bottom: "-35px",
                                        position: "relative",
                                    }}
                                >
                                    <ul
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            listStyle: "none",
                                            padding: 0,
                                            margin: 0,
                                        }}
                                    >
                                        {dots.map((dot, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    margin: "0 5px",
                                                    width: "12px",
                                                    height: "12px",
                                                    borderRadius: "50%",
                                                    backgroundColor:
                                                        dot.props.className === "slick-active"
                                                            ? "#106A39" // active dot
                                                            : "#28a745", // inactive dot
                                                    opacity: dot.props.className === "slick-active" ? 1 : 0.6,
                                                    transition: "all 0.3s ease",
                                                }}
                                                onClick={dot.props.onClick}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            )}
                            prevArrow={
                                <div
                                    style={{
                                        backgroundColor: "#28a745",
                                        borderRadius: "50%",
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "absolute",
                                        top: "45%",
                                        left: "-50px",
                                        zIndex: 10,
                                        cursor: "pointer",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="white"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                        />
                                    </svg>
                                </div>
                            }
                            nextArrow={
                                <div
                                    style={{
                                        backgroundColor: "#28a745",
                                        borderRadius: "50%",
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "absolute",
                                        top: "45%",
                                        right: "-50px",
                                        zIndex: 10,
                                        cursor: "pointer",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="white"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </div>
                            }
                        >
                            {instagramVideos.map((video, index) => (
                                <div key={index} className="px-2">
                                    <div
                                        className="video-card"
                                        style={{
                                            width: "100%",
                                            height: "500px",
                                            borderRadius: "20px",
                                            overflow: "hidden",
                                            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                                            backgroundColor: "#fff",
                                            transition: "transform 0.3s, box-shadow 0.3s",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: "relative",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setActiveVideo(index)}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-5px)";
                                            e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
                                        }}
                                    >
                                        {activeVideo === index ? (
                                            <iframe
                                                src={video.url.replace("/?", "/embed/?")}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    border: "none",
                                                }}
                                                allow="autoplay; encrypted-media"
                                                allowFullScreen
                                            ></iframe>
                                        ) : (
                                            <>
                                                <img
                                                    src={video.cover}
                                                    alt="Instagram Reel Cover"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform: "translate(-50%, -50%)",
                                                        backgroundColor: "rgba(0,0,0,0.6)",
                                                        borderRadius: "50%",
                                                        padding: "15px",
                                                    }}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="40"
                                                        height="40"
                                                        fill="white"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                                    </svg>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>







                <VideoSection />

                {/* 🌿 Social Courtesy Section */}
                <section
                    className="social-courtesy-section py-5 position-relative text-center"
                    style={{
                        background: "linear-gradient(135deg, #fffaf4 0%, #f5f3efff 100%)",
                        fontFamily: '"Playfair Display", serif',
                        overflow: "hidden"
                    }}
                >
                    <h1
                        className="text-center mb-5 hover-underline"
                        style={{
                            color: "#5a1903",
                            fontWeight: "800",
                            fontFamily: '"Playfair Display", serif',
                            position: "relative",
                            display: "inline-block",
                            cursor: "pointer",
                            marginTop: "-10px",
                            fontSize: "clamp(35px, 4vw, 50px)",
                        }}
                    >
                        Our Courtesy to Society
                    </h1>

                    <div className="container position-relative" style={{ zIndex: 1 }}>
                        <div className="row gy-5 align-items-stretch d-flex"> {/* Stretch columns */}
                            {/* Left Side - Image Collage */}
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <div className="position-relative text-center w-100">
                                    <img
                                        src="/assets/img/WhatsApp Image 2025-08-21 at 11.57.17 AM.jpeg"
                                        alt="Local Farmers"
                                        className="img-fluid rounded-4 shadow-lg"
                                        style={{
                                            objectFit: "contain", // show full image
                                            maxHeight: "400px",   // max height
                                            width: "100%",
                                            border: "6px solid #fff"
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Right Side - Text + Social */}
                            <div className="col-lg-6 d-flex">
                                <div
                                    className="p-5 rounded-4 shadow-lg w-100"
                                    style={{
                                        background: "#ffffffdd",
                                        backdropFilter: "blur(8px)",
                                        border: "2px solid #f1e0c6",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: isMobile ? "left" : "center", // 👈 Left on mobile, Center on large
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: 500,
                                            lineHeight: 1.8,
                                            color: "#333",
                                        }}
                                    >
                                        At <strong>Traditional Food Company</strong>, we believe food isn’t just
                                        about taste — it’s about love, community, and responsibility. From{" "}
                                        <span style={{ color: "#5a3825", fontWeight: "bold" }}>
                                            supporting local farmers{" "}
                                        </span>{" "}
                                        to{" "}
                                        <span style={{ color: "#5a3825", fontWeight: "bold" }}>
                                            eco-friendly packaging{" "}
                                        </span>{" "}
                                        and{" "}
                                        <span style={{ color: "#5a3825", fontWeight: "bold" }}>
                                            social welfare initiatives{" "}
                                        </span>
                                        , we honor tradition while serving society.
                                    </p>

                                    <h5 className="fw-bold mt-4 mb-3" style={{ color: "#106A39" }}>
                                        Stay Connected With Us
                                    </h5>

                                    {/* Social Icons */}
                                    <div
                                        className="d-flex gap-3 flex-wrap"
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        {[
                                            {
                                                icon: "facebook-f",
                                                bg: "linear-gradient(135deg, #1877F2, #145db2)",
                                                link: "https://www.facebook.com/p/Hotel-TFC-61576567530232/",
                                            },
                                            {
                                                icon: "instagram",
                                                bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                                                link: "https://www.instagram.com/hotel_tfc_branch_indapur/?igsh=MXBvc3RwaDhyazV5bA%3D%3D#",
                                            },
                                            {
                                                icon: "youtube",
                                                bg: "linear-gradient(135deg, #FF0000, #a60000)",
                                                link: "https://www.youtube.com/@foodieamrutaskitchen",
                                            },
                                        ].map((s, i) => (
                                            <a
                                                key={i}
                                                href={s.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="d-flex align-items-center justify-content-center rounded-circle"
                                                style={{
                                                    background: s.bg,
                                                    color: "#fff",
                                                    width: "55px",
                                                    height: "55px",
                                                    fontSize: "22px",
                                                    transition: "all 0.3s ease",
                                                }}
                                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                            >
                                                <i className={`fab fa-${s.icon}`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Hover underline style */}
                    <style>
                        {`
.hover-underline::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: #13b75dff; /* green color */
    bottom: -2px; /* closer to text */
    left: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
    border-radius: 2px;
}
.hover-underline:hover::after {
    transform: scaleX(1);
}
`}
                    </style>
                </section>



                {/* offer section */}
                <section
                    className="special-offers-section py-5 position-relative"
                    style={{
                        background: "url('/assets/img/paper-texture.jpg') center/cover no-repeat",
                        padding: "100px 0",
                        position: "relative",
                    }}
                >
                    {/* Soft Decorative Overlay */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(245, 245, 245, 0.9)",
                            zIndex: 1,
                        }}
                    ></div>

                    <div className="container position-relative" style={{ zIndex: 2 }}>
                        {/* Section Heading */}
                        <div style={{ textAlign: "center" }}>
                            <h2
                                style={{
                                    display: "inline-block",
                                    fontFamily: '"Playfair Display", serif',
                                    fontWeight: 900,
                                    fontSize: "clamp(35px, 4vw, 45px)",
                                    marginBottom: "20px",
                                    color: "#5a1903",
                                    letterSpacing: "1px",
                                    textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                                    position: "relative",
                                    cursor: "pointer",
                                    marginTop: "-20px",
                                }}
                                onMouseEnter={(e) => {
                                    const line = e.currentTarget.querySelector(".underline");
                                    if (line) line.style.transform = "translateX(-50%) scaleX(1)";
                                }}
                                onMouseLeave={(e) => {
                                    const line = e.currentTarget.querySelector(".underline");
                                    if (line) line.style.transform = "translateX(-50%) scaleX(0)";
                                }}
                            >
                                Our Special Offers & Impact
                                <span
                                    className="underline"
                                    style={{
                                        position: "absolute",
                                        bottom: "-5px",
                                        left: "50%",
                                        height: "3px",
                                        width: "100%",
                                        backgroundColor: "#00b03eff",
                                        transform: "translateX(-50%) scaleX(0)",
                                        transformOrigin: "center",
                                        transition: "transform 0.4s ease",
                                        display: "block",
                                    }}
                                ></span>
                            </h2>
                        </div>

                        <p
                            style={{
                                fontFamily: '"Georgia", serif',
                                fontSize: "clamp(16px, 1.2vw, 20px)",
                                marginBottom: "60px",
                                color: "#0D1B2A",
                                textAlign: "center",
                                lineHeight: 1.6,
                            }}
                        >
                            Celebrate with us! Reviews, charitable contributions, and exclusive discounts for our heroes and students.
                        </p>

                        <div className="row g-4 justify-content-center">
                            {[
                                {
                                    title: "Reviews",
                                    desc: "See what our happy customers say and join the experience!",
                                    bgGradient: "linear-gradient(145deg, #fff, #f0f0f0)",
                                    border: "#efeae8ff",
                                    textColor: "#0D1B2A",
                                    circlePos: { bottom: "-25px", left: "-25px" },
                                    circleColor: "#D35400",
                                    url: "#reviews",
                                },
                                {
                                    title: "Yearly Business Donation",
                                    desc: "We donate 4% of our yearly business to charitable causes. Hotel TFC will donate funds to Mukabheer School, Indapur, during Navratri 2025.",
                                    bgGradient: "linear-gradient(145deg, #fff, #e0f7f4)",
                                    border: "#dce7e5ff",
                                    textColor: "#145A32",
                                    circlePos: { top: "-25px", right: "-25px" },
                                    circleColor: "#117A65",
                                },
                                {
                                    title: "Special Discounts",
                                    desc: "Save 10% – Army & students can enjoy discounts on every meal!",
                                    bgGradient: "linear-gradient(145deg, #fff, #f9e5e3)",
                                    border: "#ece5e4ff",
                                    textColor: "#7B241C",
                                    circlePos: { bottom: "-25px", right: "-25px" },
                                    circleColor: "#ca766dff",
                                },
                            ].map((offer, idx) => (
                                <div className="col-md-4" key={idx}>
                                    {offer.title === "Reviews" ? (
                                        <a href={offer.url} style={{ textDecoration: "none" }}>
                                            <div
                                                className="offer-card p-5 text-center"
                                                style={{
                                                    backgroundImage: offer.bgGradient,
                                                    color: offer.textColor,
                                                    borderRadius: "25px",
                                                    border: `3px solid ${offer.border}`,
                                                    boxShadow: "0 15px 35px rgba(0,0,0,0.2), inset 0 0 15px rgba(255,255,255,0.3)",
                                                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                                                    cursor: "pointer",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = "translateY(-10px)";
                                                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3), inset 0 0 15px rgba(255,255,255,0.3)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2), inset 0 0 15px rgba(255,255,255,0.3)";
                                                }}
                                            >
                                                <h3 style={{ fontWeight: 700, marginBottom: "15px", fontSize: "clamp(20px, 2vw, 26px)" }}>
                                                    {offer.title}
                                                </h3>
                                                <p style={{ fontSize: "clamp(14px, 1vw, 18px)", lineHeight: 1.6 }}>{offer.desc}</p>
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: "60px",
                                                        height: "60px",
                                                        borderRadius: "50%",
                                                        backgroundColor: offer.circleColor,
                                                        opacity: 0.15,
                                                        ...offer.circlePos,
                                                    }}
                                                ></div>
                                            </div>
                                        </a>
                                    ) : (
                                        <div
                                            className="offer-card p-5 text-center"
                                            style={{
                                                backgroundImage: offer.bgGradient,
                                                color: offer.textColor,
                                                borderRadius: "25px",
                                                border: `3px solid ${offer.border}`,
                                                boxShadow: "0 15px 35px rgba(0,0,0,0.2), inset 0 0 15px rgba(255,255,255,0.3)",
                                                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                                                cursor: "default",
                                                position: "relative",
                                                overflow: "hidden",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "translateY(-10px)";
                                                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3), inset 0 0 15px rgba(255,255,255,0.3)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2), inset 0 0 15px rgba(255,255,255,0.3)";
                                            }}
                                        >
                                            <h3 style={{ fontWeight: 700, marginBottom: "15px", fontSize: "clamp(20px, 2vw, 26px)" }}>
                                                {offer.title}
                                            </h3>
                                            <p style={{ fontSize: "clamp(14px, 1vw, 18px)", lineHeight: 1.6 }}>{offer.desc}</p>
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: "60px",
                                                    height: "60px",
                                                    borderRadius: "50%",
                                                    backgroundColor: offer.circleColor,
                                                    opacity: 0.15,
                                                    ...offer.circlePos,
                                                }}
                                            ></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>










                {/* footer area */}
                <footer
                    className="ht-footer pt-5 pb-4  m-0 p-0 position-relative"
                    style={{ backgroundImage: "url('/assets/img/Whytfc/wodden texture 1.jpg')", width: "100%", height: "auto" }}
                >
                    {/* Decorative Shapes */}
                    <div
                        className="footer-background position-absolute w-100 h-100"
                        style={{
                            top: 0,
                            left: -70,
                            zIndex: 0,
                            pointerEvents: "none",
                            backgroundImage: `
            url('/assets/img/icons/18.png'),
            url('/assets/img/icons/16.png'),
            url('/assets/img/icons/8.png')
        `,
                            backgroundPosition: `
            2% 20%,
            90% 80%,
            70% 50%
        `,
                            backgroundSize: `
            10% auto,
            10% auto,
            5% auto
        `,
                            backgroundRepeat: "no-repeat",
                            animation: "moveBackgrounds 10s ease-in-out infinite alternate"
                        }}
                    ></div>

                    <style jsx>{`
    @keyframes moveBackgrounds {
        0% {
            background-position: 2% 20%, 90% 80%, 70% 50%;
        }
        50% {
            background-position: 3% 22%, 88% 78%, 72% 52%;
        }
        100% {
            background-position: 2% 20%, 90% 80%, 70% 50%;
        }
    }

    @media (max-width: 768px) {
        .footer-background {
            background-size: 15% auto, 15% auto, 10% auto;
            background-position: 5% 20%, 85% 80%, 60% 50%;
        }
    }

    @media (max-width: 480px) {
        .footer-background {
            background-size: 20% auto, 20% auto, 15% auto;
            background-position: 5% 15%, 80% 75%, 55% 50%;
        }
    }
`}</style>


                    {/* Footer Content */}
                    <div className="container position-relative" style={{ zIndex: 1 }}>
                        <div className="ht-footer-top">
                            <div className="row gy-4">
                                {/* Logo & Address */}
                                <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
                                    <div className="widget text-center text-sm-start">
                                        <div className="logo mb-3">
                                            <img
                                                src="/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                                                alt="Company Logo"
                                                className="img-fluid"
                                                style={{ maxWidth: "350px", height: "auto" }}
                                            />
                                        </div>
                                        <ul style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: 'auto',
                                            fontWeight: 700, // Replace with your desired weight
                                            fontStyle: 'normal'
                                        }} className="list-unstyled mb-2">
                                            <li>
                                                Solapur - Pune Hwy, Indapur,
                                                <br />
                                                Vangali, Maharashtra 413107
                                            </li>
                                        </ul>
                                        <a href="https://maps.app.goo.gl/6rhu3BuWf94mjfc8A" className="ht-link d-block">
                                            Google Map
                                        </a>

                                    </div>
                                </div>

                                {/* Delivery Support */}
                                <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
                                    <div className="widget text-center text-sm-start">
                                        <h6 style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: 'auto',
                                            fontWeight: 700, // Replace with your desired weight
                                            fontStyle: 'normal'
                                        }} className="mb-2">Delivery Support</h6>
                                        <h5 style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: 'auto',
                                            fontWeight: 700, // Replace with your desired weight
                                            fontStyle: 'normal'
                                        }} className="mb-3">
                                            <i className="fas fa-phone-square-alt me-2"></i>+91 9175339235
                                        </h5>
                                        <ul style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: 'auto',
                                            fontWeight: 700, // Replace with your desired weight
                                            fontStyle: 'normal'
                                        }} className="list-unstyled">
                                            <li >Mon – Sun: 11:00 AM - 11:00 PM </li>
                                            <li style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontOpticalSizing: 'auto',
                                                fontWeight: 700, // Replace with your desired weight
                                                fontStyle: 'normal'
                                            }}></li>
                                        </ul>
                                        <a style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: 'auto',
                                            fontWeight: 700, // Replace with your desired weight
                                            fontStyle: 'normal'
                                        }} href="mailto:infofoodkahn@gmail.com" className="ht-link d-block mt-2">
                                            Email Address
                                        </a>
                                        <a
                                            href="mailto:chormalep@gmail.com"
                                            className="ht-email flex items-center justify-start gap-2 mt-2 text-gray-800 text-sm sm:text-base md:text-lg flex-wrap"
                                            style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontOpticalSizing: 'auto',
                                                fontWeight: 700,
                                                fontStyle: 'normal',
                                                fontSize: '15px',
                                                lineHeight: '1.6',
                                            }}
                                        >
                                            <i className="fas fa-envelope-open-text text-primary text-lg"></i>
                                            <span className="break-all text-left">
                                                Traditionalfoodcompany01@gmail.com
                                            </span>
                                        </a>

                                    </div>
                                </div>

                                {/* Information */}
                                <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="200">
                                    <div className="widget text-center text-sm-start">
                                        <h6 style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: 'auto',
                                            fontWeight: 700, // Replace with your desired weight
                                            fontStyle: 'normal'
                                        }} className="mb-3">Information</h6>
                                        <ul className="list-unstyled">
                                            <li style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontOpticalSizing: 'auto',
                                                fontWeight: 700, // Replace with your desired weight
                                                fontStyle: 'normal'
                                            }}><a href="#about-us">About Us</a></li>
                                            <li style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontOpticalSizing: 'auto',
                                                fontWeight: 700, // Replace with your desired weight
                                                fontStyle: 'normal'
                                            }}><a href="#our-specilities">Specialities</a></li>
                                            <li style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontOpticalSizing: 'auto',
                                                fontWeight: 700, // Replace with your desired weight
                                                fontStyle: 'normal'
                                            }}><a href="#dishes">Dishes</a></li>
                                            <li style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontOpticalSizing: 'auto',
                                                fontWeight: 700, // Replace with your desired weight
                                                fontStyle: 'normal'
                                            }}><a href="#contact">Franchise</a></li>
                                            <li style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontOpticalSizing: 'auto',
                                                fontWeight: 700, // Replace with your desired weight
                                                fontStyle: 'normal'
                                            }}><Link
                                                to="/terms"
                                                style={{
                                                    fontFamily: '"Playfair Display", serif',
                                                    fontOpticalSizing: 'auto',
                                                    fontWeight: 700,
                                                    fontStyle: 'normal',
                                                }}
                                            >
                                                    Terms & Conditions
                                                </Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Newsletter */}
                                <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300">
                                    {/* <div className="widget text-center text-sm-start">
                                        <h6 style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: 'auto',
                                            fontWeight: 700, 
                                            fontStyle: 'normal'
                                        }} className="mb-3">Newsletter</h6>

                                        <form
                                            className="newsletter newsletter-3 d-flex flex-wrap"
                                            onSubmit={handleSubmit}
                                        >
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="form-control me-2 mb-2"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <button type="submit" className="btn btn-outline-dark mb-2">
                                                <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </form>

                                        Optional: Subscribe button below (can be removed if redundant)
                                        <button
                                            onClick={handleSubmit}
                                            style={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontOpticalSizing: 'auto',
                                                fontWeight: 700,
                                                fontStyle: 'normal',
                                                background: 'linear-gradient(135deg, #00b09b, #96c93d)', // New vibrant gradient
                                                color: '#fff',
                                                padding: '14px 36px',
                                                border: 'none',
                                                borderRadius: '50px',
                                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                                                cursor: 'pointer',
                                                transition: 'transform 0.2s ease, box-shadow 0.3s ease, background 0.4s ease',
                                                fontSize: '17px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1.5px',
                                                outline: 'none',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            onMouseOver={e => {
                                                e.target.style.background = 'linear-gradient(135deg, #43cea2, #185a9d)';
                                                e.target.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.25)';
                                                e.target.style.transform = 'scale(1.05)';
                                            }}
                                            onMouseOut={e => {
                                                e.target.style.background = 'linear-gradient(135deg, #00b09b, #96c93d)';
                                                e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                                                e.target.style.transform = 'scale(1)';
                                            }}
                                        >
                                            Subscribe
                                        </button>


                                    </div> */}
                                    {/* Social Media Icons */}
                                    {/* Social Media Icons */}
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center", // centers icons horizontally
                                            alignItems: "center",     // centers icons vertically
                                            gap: "25px",              // spacing between icons
                                            flexWrap: "wrap",
                                            marginTop: "20px"
                                        }}
                                    >
                                        <a
                                            href="https://www.facebook.com/p/Hotel-TFC-61576567530232/"
                                            style={{
                                                color: "#1877F2",
                                                fontSize: "45px",
                                                transition: "transform 0.3s ease"
                                            }}
                                            onMouseOver={e => e.currentTarget.style.transform = "scale(1.2)"}
                                            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                                        >
                                            <i className="fab fa-facebook"></i>
                                        </a>

                                        <a
                                            href="https://www.instagram.com/hotel_tfc_branch_indapur/?igsh=MXBvc3RwaDhyazV5bA%3D%3D#"
                                            style={{
                                                color: "#E4405F",
                                                fontSize: "45px",
                                                transition: "transform 0.3s ease"
                                            }}
                                            onMouseOver={e => e.currentTarget.style.transform = "scale(1.2)"}
                                            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>

                                        <a
                                            href="https://www.youtube.com/@foodieamrutaskitchen"
                                            style={{
                                                color: "#FF0000",
                                                fontSize: "45px",
                                                transition: "transform 0.3s ease"
                                            }}
                                            onMouseOver={e => e.currentTarget.style.transform = "scale(1.2)"}
                                            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                                        >
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </div>



                                </div>

                            </div>
                        </div>

                        {/* Divider */}
                        <div className="divider my-4">
                            <hr />
                        </div>

                        {/* Footer Bottom */}
                        <div className="ht-footer-bottom">
                            <div className="row align-items-center text-center text-md-end">
                                <div className="col-md-12 mb-2 mb-md-0">
                                    <p style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontOpticalSizing: 'auto',
                                        fontWeight: 700, // Replace with your desired weight
                                        fontStyle: 'normal'
                                    }} className="m-0">
                                        © 2021 <a style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: 'auto',
                                            fontWeight: 700, // Replace with your desired weight
                                            fontStyle: 'normal'
                                        }} href="index.html">TFC</a>. All rights reserved.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>

                {/* WhatsApp Floating Button */}
                <a
                    href="https://wa.me/+91 9175339235" // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: "fixed",
                        bottom: "40px",        // Keep WhatsApp button lowest
                        right: "30px",
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#25D366",
                        color: "white",
                        borderRadius: "50%",
                        textAlign: "center",
                        fontSize: "30px",
                        zIndex: 100,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <i className="fab fa-whatsapp"></i>
                </a>



                {/* Scroll to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    style={{
                        position: "fixed",
                        bottom: "5px",
                        right: "10px",
                        width: "30px",
                        height: "30px",
                        background: "#fff",
                        color: "#106A39",
                        border: "2px solid #106A39",
                        borderRadius: "12px", // slightly rounded square
                        fontSize: "18px",
                        cursor: "pointer",
                        zIndex: 1000,
                        display: visible ? "flex" : "none",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                        transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px) scale(1.1)";
                        e.currentTarget.style.background = "#106A39";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.color = "#106A39";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                    }}
                >
                    <i className="fas fa-arrow-up"></i>
                </button>








            </div>

        </>
    );
}
export default Home;