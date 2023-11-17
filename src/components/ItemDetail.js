import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const outOfStockMessageStyle = {
    color: "red",
  };

  const { itemToShow, onClickingDelete, onClickingTakeOne } = props;
  return (
    <React.Fragment>
      <hr />
      <h1>Item Details</h1>
      <h3>
        <span style={outOfStockMessageStyle}>{props.messageOnQuantity}</span>
      </h3>
      <hr />
      <h3>Name: {itemToShow.name}</h3>
      <p>Type: {itemToShow.type}</p>
      <p>Volume: {itemToShow.volume}</p>
      <p>Quantity: {itemToShow.quantity}</p>
      <button onClick={() => onClickingTakeOne(itemToShow.id)}>Take One from Inventory</button>
      <button onClick={props.onClickingEdit}>Edit Item Details</button>
      <button onClick={() => onClickingDelete(itemToShow.id)}>Delete Item from Inventory</button>
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  itemToShow: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingTakeOne: PropTypes.func,
  messageOnQuantity: PropTypes.string,
};

export default ItemDetail;
