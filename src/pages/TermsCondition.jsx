import React from "react";

const TermsCondition = () => {
    const fontStyle = {
        fontFamily: '"Playfair Display", serif',
        fontWeight: 700,
    };

    return (
        <div
            style={{
                backgroundColor: "#fdfaf6",
                minHeight: "100vh",
                padding: "60px 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                color: "#2f2f2f",
                ...fontStyle, // Apply font globally
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    maxWidth: "950px",
                    width: "100%",
                    padding: "50px 40px",
                    borderRadius: "20px",
                    boxShadow: "0 6px 30px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease",
                    ...fontStyle,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "40px", ...fontStyle }}>
                    <h1
                        style={{
                            fontSize: "2.3rem",
                            color: "#7B3F00",
                            marginBottom: "10px",
                            ...fontStyle,
                        }}
                    >
                        Terms & Conditions
                    </h1>
                    <p style={{ color: "#888", fontSize: "0.95rem", ...fontStyle }}>
                        Last updated: <strong>29 September 2025</strong>
                    </p>
                </div>

                {/* Intro */}
                <p style={{ fontSize: "1rem", marginBottom: "30px", textAlign: "justify", ...fontStyle }}>
                    Welcome to <strong>TFC - Traditional Food Company</strong>, a traditional food hotel located
                    in Indapur, Maharashtra. By dining at our restaurant, ordering online, or using
                    our services, you agree to the following Terms & Conditions (“Terms”).
                </p>

                {/* Sections */}
                {[
                    {
                        title: "1. Reservations & Table Policy",
                        items: [
                            "Reservations are accepted subject to availability.",
                            "We request guests to arrive on time; delayed arrival may result in your table being released to walk-in guests.",
                            "Large group bookings may require advance payment or deposit.",
                        ],
                    },
                    {
                        title: "2. Menu, Orders & Pricing",
                        items: [
                            "All menu items are subject to availability and seasonal variations.",
                            "Prices are listed in Indian Rupees (INR) and include applicable taxes unless otherwise stated.",
                            "Special requests (e.g., dietary restrictions, spice levels) will be honored when possible.",
                        ],
                    },
                    {
                        title: "3. Online Orders & Delivery",
                        items: [
                            "Online/phone orders are confirmed only after we acknowledge them.",
                            "Delivery is subject to location coverage and availability.",
                            "Estimated delivery times are indicative only; delays may occur due to traffic, weather, or unforeseen reasons.",
                        ],
                    },
                    {
                        title: "4. Payment Policy",
                        items: [
                            "We accept cash, credit/debit cards, UPI, and other digital payments.",
                            "All payments must be completed before food is served/delivered.",
                        ],
                    },
                    {
                        title: "5. Cancellations & Refunds",
                        items: [
                            "Dine-in reservations may be canceled up to X hours in advance.",
                            "For online orders, cancellations are accepted only if made before food preparation begins.",
                            "Refunds will be processed via the original payment method.",
                        ],
                    },
                    {
                        title: "6. Food Safety & Hygiene",
                        items: [
                            "We follow strict hygiene and food safety standards in line with FSSAI regulations.",
                            "Guests with allergies must inform our staff before ordering.",
                        ],
                    },
                    {
                        title: "7. Guest Responsibility",
                        items: [
                            "Guests are expected to behave respectfully towards staff and other patrons.",
                            "Damage to property caused by guests may result in charges.",
                        ],
                    },
                    {
                        title: "8. Events & Catering",
                        items: [
                            "Event bookings require written confirmation and advance payment.",
                            "Final guest count must be confirmed X days before the event.",
                        ],
                    },
                    {
                        title: "9. Intellectual Property",
                        items: [
                            "All logos, menus, images, and content related to [Your Hotel Name] are our property and cannot be reproduced without permission.",
                        ],
                    },
                    {
                        title: "10. Liability Disclaimer",
                        items: [
                            "We are not responsible for food allergies not disclosed to us, delays due to unforeseen events, or personal belongings lost within our premises.",
                        ],
                    },
                ].map((section, index) => (
                    <div
                        key={index}
                        style={{
                            borderLeft: "5px solid #d4a762",
                            paddingLeft: "20px",
                            marginBottom: "40px",
                            backgroundColor: "#fffaf4",
                            borderRadius: "10px",
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            ...fontStyle,
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.2rem",
                                color: "#6d3d12",
                                marginBottom: "10px",
                                ...fontStyle,
                            }}
                        >
                            {section.title}
                        </h2>
                        <ul style={{ paddingLeft: "20px", margin: 0, ...fontStyle }}>
                            {section.items.map((item, i) => (
                                <li key={i} style={{ marginBottom: "8px", fontSize: "0.95rem", color: "#333", textAlign: "justify", ...fontStyle }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Law Section */}
                <div
                    style={{
                        borderTop: "2px dashed #e2caa0",
                        margin: "40px 0 30px",
                        paddingTop: "30px",
                        ...fontStyle,
                    }}
                >
                    <h2 style={{ fontSize: "1.2rem", color: "#6d3d12", marginBottom: "10px", ...fontStyle }}>
                        11. Governing Law
                    </h2>
                    <p style={{ marginLeft: "16px", fontSize: "0.95rem", textAlign: "justify", ...fontStyle }}>
                        These Terms shall be governed by the laws of India. Any disputes shall fall
                        under the jurisdiction of courts in Indapur / Pune District, Maharashtra.
                    </p>
                </div>

                {/* Contact Section */}
                <div
                    style={{
                        backgroundColor: "#fff8ec",
                        padding: "25px 20px",
                        borderRadius: "10px",
                        border: "1px solid #f1e0c6",
                        ...fontStyle,
                    }}
                >
                    <h2 style={{ fontSize: "1.2rem", color: "#6d3d12", marginBottom: "10px", ...fontStyle }}>
                        12. Contact Us
                    </h2>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.8", ...fontStyle }}>
                        For questions regarding these Terms, you may contact us:
                        <br />
                        <strong>Hotel Name:</strong> TFC - Traditional Food Company
                        <br />
                        <strong>Address:</strong> Solapur - Pune Hwy, Indapur, Vangali, Maharashtra 413107
                        <br />
                        <strong>Phone:</strong> +91-9175339235
                        <br />
                        <strong>Email:</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsCondition;
