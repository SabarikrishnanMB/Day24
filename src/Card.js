import React from "react";
import ReactStars from "react-rating-stars-component";

function Card({ item, cartItems, handleAddToCart }) {
  return (
    <div className="col-lg-4 mb-2">
      <div className="card" style={{ width: "14rem" }}>
        <img className="card-img-top mt-1" src={item.image}  alt="image" height={200}/>
        <div className="card-body">
          <h5 className="card-title ">{item.title}</h5>
          <p className="card-price fw-bold ">Rs.{item.price}</p>
          <div className="card-text col-8 mx-auto mb-2"> <ReactStars value={item.rating} isHalf = {true} size={25} activeColor="#ffd700"/></div>
          <button 
            disabled={cartItems.some((obj) => obj.id === item.id)}
            onClick={() => {
              handleAddToCart(item);
            }}
            className="btn btn-primary d-grid gap-2 col-8 mx-auto">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
