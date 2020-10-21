import React from "react";
import PropTypes from "prop-types";

export const Card = ({ item }) => (
  <div className="w-400">
    <div className="card">
      <h2 className="card-title text-center">{item.title}</h2>
      <p>{item.description}</p>
      <div className="container-fluid">
        <div className="row">
          <div className="col">{item.qty} in stock</div>
          <div className="col">${item.price}</div>
        </div>
      </div>
    </div>
  </div>
);

// Card.PropTypes = {
//   item: {
//     title: PropTypes.string,
//     description: PropTypes.string,
//     qty: PropTypes.number,
//     price: PropTypes.number,
//   },
// };
