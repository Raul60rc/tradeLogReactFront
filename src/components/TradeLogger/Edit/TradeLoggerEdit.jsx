import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import "./TradeLoggerEdit.scss";

const TradeLoggerEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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

    fetch("http://localhost:8080/trades/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id,
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
        alert("Error while editing item");
      });
  };

  useEffect(() => {
    const getItem = async () => {
      fetch(`http://localhost:8080/trades/getbyid/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (!response?.trade) {
            alert("Ups, something went wrong");
            return;
          }

          setTrade(response.trade);
          setTicker(response.ticker);
          setStrike(response.strike);
          setType(response.type);
          setExpiration(response.expiration);
          setDebit(response.debit);
          setCredit(response.credit);
          setQuantatity(response.quantatity);
          setTradeOpen(response.tradeOpen);
          setTradeClosed(response.tradeClosed);
          setComment(response.comment);
        })
        .catch(() => {
          alert("Error getting item");
        });
    };

    getItem();
  }, [id]);

  return (
    <div className="tradeLoggerEditContainer">
      <h1>Trade Logger: Edit Item</h1>
      <div className="buttons">
        <NavLink to="/tradelogger" className="link">
          Items List
        </NavLink>
      </div>
      <div className="tradeLoggerEditForm">
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
          Edit Item
        </button>
      </div>
    </div>
  );
};

export default TradeLoggerEdit;
