import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <p>Type: {props.type}</p>
        <p>Volume: {props.volume}</p>
        <p>Quantity: {props.quantity}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  volume: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func,
};

export default Item;
