import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ShoeInfo = (props) => {
  const [shoe, setShoe] = useState({});
  const params = useParams();
  //   const { shoe } = props.location.state;
  //   const result = shoes.filter((e) => {
  //     return e.id === parseInt(params.id);
  //   });
  // this.props.history.push()
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
  return (
    <>
      <h1>{params.id}</h1>
      <h1>{shoe.name}</h1>
      <img src={shoe.picture} alt="pic" width="100px" height="100px" />
    </>
  );
};
export default ShoeInfo;
