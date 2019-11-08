import React, { useState } from "react";
import api from "./services/Api";
import "./App.css";

import logo from "./assets/logo.svg";

const App = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await api.post("/sessions", { email });
      localStorage.setItem("user", response.data._id);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
