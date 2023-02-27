import "./Home.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <section id="main">
        <h1>WELCOME 2023</h1>
        <h2> New products </h2>
        <p>THE STYLES THAT BRIGHTENED UP YOUR YEAR</p>
        <button>
          <Link style={{ textDecoration: "none", color: "white" }} to="/shoes">
            Shop Now
          </Link>
        </button>
      </section>
      <section id="banner" className="section-p1">
        <div className="banner-box">
          <h4> Creazy Deal</h4>
          <h2> Buy 1 get 1 Free</h2>
          <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <button className="white"> See More</button>
        </div>
        <div className="banner-box  box2">
          <h4> NEW Collection</h4>
          <h2> Buy 1 get 1 Free</h2>
          <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <button className="white"> collection</button>
        </div>
      </section>
    </>
  );
};
export default HomePage;
