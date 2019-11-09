import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import api from "../../services/Api";

import camera from "../../assets/camera.svg";
import "./style.css";

export const Spot = ({ history }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem("user");
    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    try {
      await api.post("/spots", data, {
        headers: { user_id }
      });
      history.push("/dashboard");
    } catch (error) {
      throw new Error(error.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview}])` }}
        className={thumbnail ? "has-thumbnail" : ""}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select img" />
      </label>
      <label htmlFor="company">EMPRESA</label>
      <input
        id="company"
        type="text"
        placeholder="Sua empresa"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />
      <label htmlFor="techs">
        TECNOLOGIAS * <span>(separados por vírgula)</span>
      </label>
      <input
        id="techs"
        type="text"
        placeholder="Sua empresa"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />
      <label htmlFor="price">
        PREÇO * <span>(Vazio caso seja gratuito)</span>
      </label>
      <input
        id="price"
        type="text"
        placeholder="Sua empresa"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">
        Cadastrar novo spot
      </button>
    </form>
  );
};

Spot.propTypes = {};
