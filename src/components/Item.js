import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.type}</p>
      <p>{props.volume}</p>
      <p>{props.quantity}</p>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  volume: PropTypes.number,
  quantity: PropTypes.string,
  id: PropTypes.string,
};

export default Item;
