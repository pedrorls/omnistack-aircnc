import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../services/Api";

import "./style.css";

export const Dashboard = props => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const retrieveSpots = async () => {
      try {
        const user_id = localStorage.getItem("user");
        const response = await api.get("/dashboard", {
          headers: { user_id }
        });
        setSpots(response.data);
      } catch (error) {
        throw new Error(error.response);
      }
    };

    retrieveSpots();
  }, []);

  if (spots === undefined) return null;

  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header
              style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
            ></header>
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : "Gratuito"}</span>
          </li>
        ))}
      </ul>
      <Link to="/spot">
        <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
};

Dashboard.propTypes = {};
