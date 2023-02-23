import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./shoeInfo.css";
const ShoeInfo = () => {
  const [shoe, setShoe] = useState({});
  const params = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [pic, setPic] = useState(
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/470.jpg"
  );

  useEffect(() => {
    const itemData = async () => {
      const item = await fetch(
        `https://63f74cb5e40e087c958b9059.mockapi.io/shoes/${params.id}`
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
    console.log(id);

    const item = await fetch(
      `https://63f74cb5e40e087c958b9059.mockapi.io/shoes/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, id }),
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
    console.log(id);

    const item = await fetch(
      `https://63f74cb5e40e087c958b9059.mockapi.io/shoes/${id}`,
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

  const addHandler = async (e) => {
    e.preventDefault();

    const item = await fetch(
      `https://63f74cb5e40e087c958b9059.mockapi.io/shoes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pic, name, price }),
      }
    );
    if (item.ok) {
      alert("Post Add successfully!");
    } else {
      alert("Failed to Add post.");
    }

    const res = await item.json();
  };

  return (
    <div id="products">
      <div class="pro">
        <img src={shoe.picture} alt="pic" width="100px" height="100px" />
        <h1>{params.id}</h1>
        <h1>{shoe.name}</h1>
      </div>
      <button className="edit_btn" onClick={editHandler}>
        Edit
      </button>
      <button className="delete_btn" onClick={deleteHandler}>
        Delete
      </button>
      <button className="add_btn" onClick={addHandler}>
        Add
      </button>
      <form>
        <label> Add Name</label>
        <input
          type="text"
          placeholder="Name..."
          style={{ margin: "20px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Id..."
          style={{ margin: "20px" }}
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <label> Add Price</label>
        <input
          type="text"
          placeholder="Price..."
          style={{ margin: "20px" }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </form>
    </div>
  );
};
export default ShoeInfo;
