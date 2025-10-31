import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const OurSpecialities = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* Our Specialities */}
            <section
                className="banner-gallery banner-gallery2 overflow-hidden padding-top-60 padding-bottom-60"
                id="our-specilities"
                style={{ backgroundImage: "url('/assets/img/Whytfc/paper texture_ 4.png')" }}
            >
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
                        className="mb-2"
                        data-aos="zoom-in"
                        style={{
                            fontFamily: '"Playfair Display", serif',
                            fontOpticalSizing: 'auto',
                            fontWeight: 700,
                            fontStyle: 'normal',
                            textAlign: 'center',
                            marginBottom: '0.5rem',
                            color: '#5a1903',
                            marginTop:"-20px",
                        }}
                    >
                        Our Specialities
                    </h1>
                    <h6 className="mb-2"
                        data-aos="zoom-in"
                        style={{
                            fontFamily: '"Playfair Display", serif',
                            fontOpticalSizing: 'auto',
                            fontWeight: 700,
                            fontStyle: 'normal',
                            textAlign: 'center',
                            marginBottom: '0.5rem',
                        }}>Crafting Flavors, Preserving Culture.</h6>

                    {/* Underline appears only after hover */}
                    <div
                        style={{
                            height: '4px',
                            width: isHovered ? '400px' : '0px',
                            backgroundColor: '#28a745',
                            transition: 'width 0.4s ease-in-out',
                            marginBottom: "30px"
                        }}
                    />
                </div>

                <div className="container position-relative">
                    {/* Decorative Shapes */}
                    <div className="del-shapes" style={{ position: "relative" }}>
                        {/* Shape 1 */}
                        <span className="ds-2 item-bounce" style={{ position: "absolute", bottom: 0, left: 0 }}>
                            {/* <img
                                src="/assets/img/icons/6.png"
                                alt="shape-2"
                                style={{
                                    height: "8vh",
                                    width: "auto",
                                    animation: "bounce 4s infinite",
                                }}
                            /> */}
                        </span>

                        {/* Shape 2 */}
                        {/* <span className="ds-2 item-bounce" style={{ position: "absolute", bottom: 0, right: 0 }}>
                            <img
                                src="/assets/img/icons/4.png"
                                alt="shape-2"
                                style={{
                                    height: "9vh",
                                    width: "auto",
                                    animation: "bounce 4s infinite",
                                }}
                            />
                        </span> */}
                    </div>


                    {/* First Row */}
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div
                                className="gallery-img-1"
                                style={{
                                    backgroundImage: "url('/NewImg/authe over trends .jpg')",
                                    borderRadius: "8px",
                                }}
                            >
                                <h3
                                    style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontOpticalSizing: "auto",
                                        fontWeight: 700,
                                        fontStyle: "normal",
                                        fontSize: "clamp(24px, 1.8vw, 16px)",
                                    }}
                                >
                                    Authenticity Over Trends
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div
                                className="gallery-img-3"
                                style={{
                                    backgroundImage: "url('/assets/img/Whytfc/masala.jpg')",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontOpticalSizing: "auto",
                                        fontWeight: 700,
                                        fontStyle: "normal",
                                    }}
                                >
                                    Home-Made<br />Masalas
                                </h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div
                                className="gallery-img-2 d-flex justify-content-end"
                                style={{
                                    backgroundImage: "url('/assets/img/OurSpecialitiesimg/Authentic indian seating  02.jpg')",
                                    borderRadius: "8px",
                                }}
                            >
                                <div className="gimg-content">
                                    <h5
                                        className="margin-bottom-20"
                                        style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: "auto",
                                            fontWeight: 700,
                                            fontStyle: "normal",
                                        }}
                                    > Authentic
                                        Indian<br />Seating
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Second Row */}
                    <div className="row margin-top-30">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="gallery-img-3 gallery-img-33"
                                style={{
                                    backgroundImage: "url('/NewImg/hearty vegetable staple.jpg')",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontOpticalSizing: "auto",
                                        fontWeight: 700,
                                        fontStyle: "normal",
                                    }}
                                >
                                    Hearty<br />Vegetarian<br />Staples
                                </h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div
                                className="gallery-img-22 d-flex justify-content-end"
                                style={{
                                    backgroundImage: "url('/NewImg/hearty veg_.jpg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "8px",
                                }}
                            >
                                <div className="gimg-content">
                                    <h5
                                        className="margin-bottom-20"
                                        style={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontOpticalSizing: "auto",
                                            fontWeight: 700,
                                            fontStyle: "normal",
                                        }}
                                    >
                                        Beloved<br />Punjabi<br />Favourites
                                    </h5>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 col-md-12">
                            <div
                                className="gallery-img-1 gallery-img-11 gallery-img-01"
                                style={{
                                    backgroundImage: "url('/assets/img/Whytfc/maha. thali .jpg')",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    className="margin-bottom-10"
                                    style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontOpticalSizing: "auto",
                                        fontWeight: 700,
                                        fontStyle: "normal",
                                    }}
                                >
                                    Rich<br />Maharashtrian <br />Non-Veg <br />Specials
                                </h5>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Decorative Shapes */}
                <div className="del-shapes" style={{ position: "relative" }}>
                    {/* Shape 1 */}
                    <span className="ds-2 item-bounce" style={{ position: "absolute", bottom: 0, left: 0 }}>
                        {/* <img
                                src="/assets/img/icons/13.png"
                                alt="shape-2"
                                style={{
                                    height: "10vh",
                                    width: "auto",
                                    animation: "bounce 4s infinite",
                                }}
                            /> */}
                    </span>

                    {/* Shape 2 */}
                    <span className="ds-2 item-bounce" style={{ position: "absolute", bottom: 0, right: 0 }}>
                        {/* <img
                                src="/assets/img/icons/16.png"
                                alt="shape-2"
                                style={{
                                    height: "10vh",
                                    width: "auto",
                                    animation: "bounce 4s infinite",
                                }}
                            /> */}
                    </span>
                </div>
            </section>
        </>
    );
};

export default OurSpecialities;
