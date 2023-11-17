import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { itemToShow } = props;
  return (
    <React.Fragment>
      <hr />
      <h1>Item Details</h1>
      <hr />
      <h3>Name: {itemToShow.name}</h3>
      <p>Type: {itemToShow.type}</p>
      <p>Volume: {itemToShow.volume}</p>
      <p>Quantity: {itemToShow.quantity}</p>
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  itemToShow: PropTypes.object,
};

export default ItemDetail;
