import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div
        style={{
          display: "grid",
          border: "1px solid black",
          gridTemplateColumns: "repeat(5, 200px)",
          gap: 50,
          alignItems: "center",
        }}
      >
        {shoes.map((shoe) => (
          <Link to={`/ShoeInfo/${shoe.id}`}>
            <div
              key={shoe.id}
              style={{
                display: "grid",
                border: "1px solid black",
                width: "200px",
              }}
            >
              <div> {shoe.id}</div>
              <div>{shoe.name} </div>
              <img src={shoe.picture}></img>
              <span>{shoe.price}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  }
};

export default Shoes;
