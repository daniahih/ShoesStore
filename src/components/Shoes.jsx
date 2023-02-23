import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shoes.css";

const Shoes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);

  // const shoesArray = [
  //   {"picture":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/470.jpg","name":"Terry Turcotte","price":"265.00","id":"1"}
  // ];
  const shoesArray = [];

  const getItems = () => {
    fetch("https://63f74cb5e40e087c958b9059.mockapi.io/shoes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setShoes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log(shoes);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div id="products">
        <p> New year collection</p>
        <div class="product-container">
          {shoes.map((shoe) => (
            <Link
              to={`/ShoeInfo/${shoe.id}`}
              style={{ textDecoration: "none" }}
            >
              <div class="pro">
                <div class="description">
                  <img src={shoe.picture}></img>
                  <span> {shoe.id}</span>
                  <p>{shoe.name} </p>
                  <span>{shoe.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Shoes;
