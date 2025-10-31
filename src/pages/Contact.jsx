import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const payload = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      user_address: formData.get("user_address"),
      reason: formData.get("reason"),
      message: formData.get("message"),
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/contact", payload);
      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("❌ Error sending contact email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="contact-section py-5 padding-top-40 padding-bottom-40"
      id="contact"
      style={{
        backgroundImage: "url('/assets/img/Whytfc/paper texture_ 4.png')",
      }}
    >
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
        id="Contact-Us"
      >
        <h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontStyle: "normal",
            textAlign: "center",
            marginBottom: "0.5rem",
            marginTop: "1rem",
            color:'#5a1903',
          }}
          className="text-center"
          data-aos="zoom-in"
        >
          Contact Us
        </h1>

        <div
          style={{
            height: "4px",
            width: isHovered ? "350px" : "0px",
            backgroundColor: "#28a745",
            transition: "width 0.4s ease-in-out",
            marginBottom: "60px",
           
          }}
        />
      </div>

      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="map-container shadow rounded h-100 overflow-hidden">
              <iframe
                title="India Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.576344585998!2d74.99529969999999!3d18.137345200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc47f00031aa2e5%3A0xe528bb6f344c31ff!2sHotel%20TFC!5e0!3m2!1sen!2sin!4v1757332916596!5m2!1sen!2sin" 

                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <div className="contact-form shadow rounded p-4 bg-white h-100">
              <h3
                className="mb-4 text-success fw-bold"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontOpticalSizing: "auto",
                  fontWeight: 700,
                  fontStyle: "normal",
                  color: "#106A39",
                }}
              >
                Get in Touch
              </h3>

              <form ref={formRef} onSubmit={sendEmail} noValidate>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="user_name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="user_email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="form-control"
                    name="user_phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Address"
                    rows="2"
                    name="user_address"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <select className="form-select" name="reason" required>
                    <option value="">-- Select Reason --</option>
                   <option value="Enquiry about Franchise">
                      Enquiry about Franchise
                    </option>
                    <option value="Complain">Complain</option>
                    <option value="Suggestion">Suggestion</option>
                    <option value="Party / Celebration Order">
                      Party / Celebration Order
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className="d-flex flex-column flex-md-row gap-2">
                  <button
                    type="submit"
                    className="w-100"
                    disabled={loading}
                    style={{
                      backgroundColor: "#28a745",
                      color: "#fff",
                      border: "none",
                      padding: "8px 12px",
                      fontSize: "0.95rem",
                      fontFamily: '"Playfair Display", serif',
                      fontOpticalSizing: "auto",
                      fontWeight: 700,
                      fontStyle: "normal",
                      borderRadius: "6px",
                      cursor: loading ? "not-allowed" : "pointer",
                      opacity: loading ? 0.6 : 1,
                    }}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>

                  <a
                    href="tel:+919175339235"
                    className="w-100 text-center"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#28a745",
                      border: "2px solid #28a745",
                      padding: "8px 12px",
                      fontSize: "0.95rem",
                      fontFamily: '"Playfair Display", serif',
                      fontOpticalSizing: "auto",
                      fontWeight: 700,
                      fontStyle: "normal",
                      borderRadius: "6px",
                      textDecoration: "none",
                      display: "inline-block",
                      lineHeight: "1.5",
                      cursor: "pointer",
                    }}
                  >
                    Call Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
