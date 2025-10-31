import React from "react";
import "./Dishes.css"; // Correct CSS import
import "@fortawesome/fontawesome-free/css/all.min.css";


const Dishes = () => {
  const horizontalDishes = [
    { title: "Misal Pav", img: "https://via.placeholder.com/150", price: "₹80" },
    { title: "Puran Poli", img: "https://via.placeholder.com/150", price: "₹60" },
    { title: "Vada Pav", img: "https://via.placeholder.com/150", price: "₹30" },
    { title: "Poha", img: "https://via.placeholder.com/150", price: "₹40" },
    { title: "Sabudana Khichdi", img: "https://via.placeholder.com/150", price: "₹50" },
  ];

  const verticalDishes = [
    { title: "Shrikhand", img: "https://via.placeholder.com/150", price: "₹70" },
    { title: "Bhakri", img: "https://via.placeholder.com/150", price: "₹50" },
    { title: "Thalipeeth", img: "https://via.placeholder.com/150", price: "₹55" },
    { title: "Zunka Bhakri", img: "https://via.placeholder.com/150", price: "₹60" },
    { title: "Kharvas", img: "https://via.placeholder.com/150", price: "₹45" },
    { title: "Pitla", img: "https://via.placeholder.com/150", price: "₹40" },
    { title: "Sheera", img: "https://via.placeholder.com/150", price: "₹35" },
    { title: "Kanda Bhaji", img: "https://via.placeholder.com/150", price: "₹25" },
    { title: "Matki Usal", img: "https://via.placeholder.com/150", price: "₹30" },
    { title: "Alu Vadi", img: "https://via.placeholder.com/150", price: "₹45" },
  ];

  return (
    <div className="scroll-wrapper">
      <h2 style={{
        fontFamily: '"Playfair Display", serif',
        fontOpticalSizing: 'auto',
        fontWeight: 700, // Replace with your desired weight
        fontStyle: 'normal'
      }} className="text-center">🍲 Maharashtrian Dishes</h2>

      {/* Horizontal Scroll Section */}
      <div className="horizontal-scroll-container">
        {horizontalDishes.map((dish, i) => (
          <div className="scroll-card" key={i}>
            <img src={dish.img} alt={dish.title} />
            <h5>{dish.title}</h5>
            <p>{dish.price}</p>
          </div>
        ))}
      </div>

      <h2 style={{
        fontFamily: '"Playfair Display", serif',
        fontOpticalSizing: 'auto',
        fontWeight: 700, // Replace with your desired weight
        fontStyle: 'normal'
      }} className="text-center mt-5">📜 More Dishes (Vertical Scroll)</h2>

      {/* Vertical Scroll Section */}
      <div className="vertical-scroll-container">
        {verticalDishes.map((dish, i) => (
          <div className="scroll-card" key={i}>
            <img src={dish.img} alt={dish.title} />
            <h5>{dish.title}</h5>
            <p>{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
