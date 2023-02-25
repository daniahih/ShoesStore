import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shoes.css";
import Additem from "./AddItem";
const Shoes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);

  const getItems = () => {
    fetch("https://63f862ec6978b1f91058264e.mockapi.io/shoes")
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
        <Link to="/Additem"> Add Item</Link>

        <div className="product-container">
          {shoes.map((shoe) => (
            <Link
              to={`/ShoeInfo/${shoe.id}`}
              style={{ textDecoration: "none" }}
            >
              <div class="pro">
                <div class="description">
                  <img src={shoe.img} alt={shoe.img}></img>
                  <span> {shoe.id}</span>
                  <p>{shoe.name} </p>
                  <h4> &#8362;{shoe.price}</h4>
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
