import "./Home.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <section id="main">
        <h1>WELCOME 2023</h1>
        <h2> New products </h2>
        <p>THE STYLES THAT BRIGHTENED UP YOUR YEAR</p>
        <button className="home-btn">
          <Link style={{ textDecoration: "none", color: "white" }} to="/shoes">
            Shop Now
          </Link>
        </button>
      </section>
      <section id="banner" className="section-p1">
        <div className="banner-box">
          <h4> Creazy Deal</h4>
          <h2> Buy 1 get 1 Free</h2>

          <button className="home-btn">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/shoes"
            >
              See More
            </Link>
          </button>
        </div>
        <div className="banner-box  box2">
          <h4> NEW Collection</h4>
          <h2> Buy 1 get 1 Free</h2>
          <button className="home-btn">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/shoes"
            >
              New Collection
            </Link>
          </button>
        </div>
      </section>
      <section className="sponserd">
        <p>First Look: Women’s Spring Trends</p>
        <div className="img-countiner">
          <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"></img>
          <img src="https://images.dsw.com/is/image/DSWShoes/P230153_editorial_sandal?impolicy=qlt-medium&imwidth=1011&imdensity=1"></img>
          <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"></img>
          <img src="https://images.dsw.com/is/image/DSWShoes/P230153_editorial_retro?impolicy=qlt-medium&imwidth=1011&imdensity=1"></img>
        </div>
      </section>
      <br></br>
      <br></br>
      <footer>
        <div className="col">
          <h4> Contact</h4>
          <p>
            <b>Address:</b> Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>
            <b>Phone:</b> 052365214
          </p>
          <p>
            <b>Hours:</b> 10-118 Sat-Man
          </p>
        </div>
        <div class="col">
          <h4> Account</h4>
          <p>Log In</p>
          <p> Create an Acount </p>
          <p>My order</p>
        </div>
      </footer>
    </>
  );
};
export default HomePage;
