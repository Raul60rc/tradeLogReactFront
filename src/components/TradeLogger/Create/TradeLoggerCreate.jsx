import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./TradeLoggerCreate.scss";

const TradeLoggerCreate = () => {
  const navigate = useNavigate();

  const [trade, setTrade] = useState(0);
  const [ticker, setTicker] = useState("");
  const [strike, setStrike] = useState(0);
  const [type, setType] = useState("");
  const [expiration, setExpiration] = useState("");
  const [debit, setDebit] = useState(0);
  const [credit, setCredit] = useState(0);
  const [quantatity, setQuantatity] = useState(0);
  const [tradeOpen, setTradeOpen] = useState("");
  const [tradeClosed, setTradeClosed] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (
      trade === "" ||
      ticker === "" ||
      strike === "" ||
      type === "" ||
      expiration === "" ||
      debit === "" ||
      credit === "" ||
      quantatity === "" ||
      tradeOpen === "" ||
      tradeClosed === "" ||
      comment === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    fetch("http://localhost:8080/trades/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        trade,
        ticker,
        strike,
        type,
        expiration,
        debit,
        credit,
        quantatity,
        tradeOpen,
        tradeClosed,
        comment,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response?.trade) {
          alert("Ups, something went wrong");
          return;
        }

        navigate("/tradelogger");
      })
      .catch(() => {
        alert("Error while creating user");
      });
  };

  return (
    <div className="tradeLoggerCreateContainer">
      <h1>Trade Logger: Create Item</h1>
      <div className="buttons">
        <NavLink to="/tradelogger" className="link">
          Items List
        </NavLink>
      </div>
      <div className="tradeLoggerCreateForm">
        <input
          type="number"
          placeholder="Trade"
          value={trade}
          onChange={(event) => {
            setTrade(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ticker"
          value={ticker}
          onChange={(event) => {
            setTicker(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Strike"
          value={strike}
          onChange={(event) => {
            setStrike(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Expiration"
          value={expiration}
          onChange={(event) => {
            setExpiration(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Debit"
          value={debit}
          onChange={(event) => {
            setDebit(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Credit"
          value={credit}
          onChange={(event) => {
            setCredit(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Quantatity"
          value={quantatity}
          onChange={(event) => {
            setQuantatity(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Trade Open"
          value={tradeOpen}
          onChange={(event) => {
            setTradeOpen(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Trade Closed"
          value={tradeClosed}
          onChange={(event) => {
            setTradeClosed(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button type="button" onClick={() => handleSubmit()}>
          Create Item
        </button>
      </div>
    </div>
  );
};

export default TradeLoggerCreate;
