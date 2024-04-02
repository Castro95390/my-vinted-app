import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    return (
      <main>
        <h1>Publish</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{ display: "none" }}
            id="picture-input"
            type="file"
            onChange={(event) => {
              console.log(event);
              setPicture(event.target.files[0]);
            }}
          />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <textarea
            rows={4}
            name="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
          <input
            type="text"
            name="size"
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
          <input
            type="text"
            name="color"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <input
            type="text"
            name="condition"
            value={condition}
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
          <input
            type="text"
            name="city"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <input type="submit" value={"Ajouter"} />
        </form>
      </main>
    );
  };
};
export default Publish;
