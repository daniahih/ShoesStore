import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AddItem.css";

const Additem = () => {
  const [shoe, setShoe] = useState({});
  const params = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [newPic, setNewPic] = useState("");

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
  const addHandler = async (e) => {
    e.preventDefault();

    const item = await fetch(
      `https://63f862ec6978b1f91058264e.mockapi.io/shoes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img: newPic, name, price }),
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
    <>
      <div>
        <form className="form">
          <label> Add Name</label>
          <input
            className="input"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {/* <input
            type="text"
            placeholder="Id..."
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input> */}
          <label> Add Price</label>
          <input
            className="input"
            type="text"
            placeholder="Price..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <label> Add Image URL</label>
          <input
            className="input"
            type="text"
            placeholder="Image URL..."
            value={newPic}
            onChange={(e) => setNewPic(e.target.value)}
          ></input>
          <button className="add_btn" onClick={addHandler}>
            Add
          </button>
        </form>
      </div>
    </>
  );
};
export default Additem;
