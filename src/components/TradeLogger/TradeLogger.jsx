import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./TradeLogger.scss";

const TradeLogger = () => {
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirm) {
      return;
    }

    fetch("http://localhost:8080/trades/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response?.trade) {
          alert("Ups, something went wrong");
          return;
        }

        setItems(items.filter((item) => item._id !== id));
      })
      .catch(() => {
        alert("Error deleting item please try again");
      });
  };

  useEffect(() => {
    const getItems = async () => {
      fetch("http://localhost:8080/trades/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (
            Array.isArray(response) &&
            response.length > 0 &&
            response[0]?.trade
          ) {
            setItems(response);
          } else {
            setItems([]);
          }
        })
        .catch(() => {
          alert("Error getting items please try again");
        });
    };

    getItems();
  }, []);

  return (
    <div className="tradeLoggerContainer">
      <h1>Trade Logger</h1>
      <div className="tradeLoggerButtons">
        <NavLink to="/tradelogger/create" className="link">
          Create
        </NavLink>
      </div>
      <div className="tradeLoggerStats">
        <div className="tradeLoggerStatsItem">
          Total Trades: <p>{items.length}</p>
        </div>
      </div>
      <div className="tradeLoggerList">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="tradeLoggerItem" key={item._id}>
              <div className="traderLoggerItem-info">
                <div className="label">Trade</div>
                <p>{item.trade}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Ticker</div>
                <p>{item.ticker}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Strike</div>
                <p>{item.strike}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Type</div>
                <p>{item.type}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Expiration</div>
                <p>{item.expiration}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Debit</div>
                <p>{item.debit}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Credit</div>
                <p>{item.credit}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Quantity</div>
                <p>{item.quantatity}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Trade Open</div>
                <p>{item.tradeOpen}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Trade Closed</div>
                <p>{item.tradeClosed}</p>
              </div>
              <div className="traderLoggerItem-info">
                <div className="label">Comment</div>
                <p>{item.comment}</p>
              </div>
              <NavLink to={`/tradelogger/edit/${item._id}`} className="button">
                Edit
              </NavLink>
              <button
                type="button"
                className="button-danger"
                onClick={() => deleteItem(item._id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="tradeLoggerEmpty">No items</div>
        )}
      </div>
    </div>
  );
};

export default TradeLogger;
