import React, { useState } from "react";
import APIHandler from "../../api/APIHandler";

const FormAjoutArtist = ({ handler }) => {
  const [artist, setArtist] = useState({
    name: "",
    description: "",
    style: "",
    isBand: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, style, isBand } = artist;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("style", style);
    formData.append("isband", isBand);

    try {
      const res = await APIHandler.post("/styles", formData);
      handler();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Add artist</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setArtist({ ...artist, name: e.target.value })}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e) =>
            setArtist({ ...artist, description: e.target.value })
          }
        />

        <select name="style" id="style" disabled="disabled">
          <option value=""></option>
        </select>

        <label htmlFor="isBand">yes</label>
        <input type="radio" name="isBand" id="isBand" value={true} />

        <label htmlFor="isBand">No</label>
        <input type="radio" name="isBand" id="isBand" value={false} />

        <button onClick={handleSubmit}>OK</button>
      </form>
    </div>
  );
};

export default FormAjoutArtist;
