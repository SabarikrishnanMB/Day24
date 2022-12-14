import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import CartItem from "./CartItem";
import { useState } from "react";


function App() {
  const products = [
    {
      id: 1,
      title: "iPhone12",
      price: 90000,
      rating: 4,
      image: "images/iphone.jpg"
    },
    {
      id: 2,
      title: "Samsung S21",
      price: 80000,
      rating: 3,
      image: "images/samsung.jpg",
    },
    {
      id: 3,
      title: "OnePlus+",
      price: 60000,
      rating: 3.5,
      image: "images/oneplus.jpg"
    },
    {
      id: 4,
      title: "Google Pixel",
      price: 70000,
      rating: 4.5,
      image: "images/pixel.jpg"
    },
    {
      id: 5,
      title: "Nothing Phone",
      price: 40000,
      rating: 3,
      image: "images/nothing.jpg"
    },
    {
      id: 6,
      title: "Realme",
      price: 30000,
      rating: 4,
      image: "images/realme.jpg"
    },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  let removeCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  };

  return (
    <div className="container">
      <div className="container">
  <nav className="navbar mt-3 mb-2 navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand fw-bold offset-5">Mobile Store</a>
    </div>
  </nav>
</div>      
      <div className="row">
        <div className="col-lg-8 mt-2">
          <div className="row">
            {products.map((item) => {
              return (
                <Card
                  item={item}
                  cartItems={cart}
                  handleAddToCart={addToCart}
                ></Card>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4 mt-2">
          {cart.length == 0 ? (
            <div class="item fw-bold ">No Items In Cart </div>
          ) : (
            <div className="row">
              <ol class="list-group list-group-numbered">
                {cart.map((cartItem) => {
                  return (
                    <CartItem
                      cartItem={cartItem}
                      removeCart={removeCart}
                    ></CartItem>
                  );
                })}
              </ol>
              <h3>Total Amount : {total} </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
