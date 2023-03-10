import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./shoeInfo.css";
const ShoeInfo = () => {
  const [shoe, setShoe] = useState({});
  const params = useParams();
  const [name, setName] = useState(shoe.name);
  const [price, setPrice] = useState(shoe.price);
  // const [id, setId] = useState("");
  const [newPic, setNewPic] = useState(shoe.img);
  useEffect(() => {
    const itemData = async () => {
      const item = await fetch(
        `https://63f862ec6978b1f91058264e.mockapi.io/shoes/${params.id}`
      );
      const res = await item.json();
      setShoe(res);
    };
    itemData();
  }, [params]);

  console.log(params.id);
  console.log(params);

  const editHandler = async (e) => {
    e.preventDefault();
    console.log(name);
    // console.log(id);

    const item = await fetch(
      `https://63f862ec6978b1f91058264e.mockapi.io/shoes/${params.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          img: newPic,
          price: price,
        }),
      }
    );
    if (item.ok) {
      alert("Post updated successfully!");
    } else {
      alert("Failed to update post.");
    }

    const res = await item.json();
    console.log(res);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    console.log(name);
    // console.log(id);

    const item = await fetch(
      `https://63f862ec6978b1f91058264e.mockapi.io/shoes/${params.id}`,
      {
        method: "DELETE",
      }
    );
    if (item.ok) {
      alert("Post DELETED successfully!");
    } else {
      alert("Failed to DELETED post.");
    }

    const res = await item.json();
    console.log(res);
  };

  return (
    <div id="products">
      <div class="pro">
        <img src={shoe.img} alt="pic" width="100px" height="100px" />
        <h1>{params.id}</h1>
        <h1>{shoe.name}</h1>
        <h4> &#8362;{shoe.price}</h4>
      </div>
      <div className="btn-container">
        <button className="edit_btn" onClick={editHandler}>
          Edit
        </button>
        <button className="delete_btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      <form>
        <label> Add Name</label>
        <input
          type="text"
          placeholder="Name..."
          style={{ margin: "20px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label> Add Price</label>
        <input
          type="text"
          placeholder="Price..."
          style={{ margin: "20px" }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label> Add Image URL</label>
        <input
          type="text"
          placeholder="Image URL..."
          style={{ margin: "20px" }}
          value={newPic}
          onChange={(e) => setNewPic(e.target.value)}
        ></input>
      </form>
    </div>
  );
};
export default ShoeInfo;
