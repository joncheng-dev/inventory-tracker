import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  const outOfStockMessageStyle = {
    color: "red",
  };

  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <div className="row">
          <div className="col-8">
            <h3>Name: {props.name}</h3>
            <p>Type: {props.type}</p>
            <p>Volume: {props.volume}</p>
            <p>Quantity: {props.quantity}</p>
          </div>
          <div className="col-4">
            <p>
              <span style={outOfStockMessageStyle}>{props.msgForOutOfStock}</span>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  volume: PropTypes.number,
  quantity: PropTypes.number,
  msgForOutOfStock: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func,
};

export default Item;
