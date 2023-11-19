import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const outOfStockMessageStyle = {
    color: "red",
  };

  const { itemToShow, onClickingDelete, onClickingTakeOne, onClickingAddOne } = props;
  return (
    <React.Fragment>
      <hr />
      <h1>Item Details</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h3>Name: {itemToShow.name}</h3>
        </div>
        <div className="col-4">
          <p>
            <span style={outOfStockMessageStyle}>{itemToShow.msgForOutOfStock}</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <br />
          <p>Type: {itemToShow.type}</p>
          <p>Volume: {itemToShow.volume}</p>
          <p>Quantity Available: {itemToShow.quantity}</p>
        </div>
        <div className="col-4">
          <br />
          <button onClick={() => onClickingAddOne(itemToShow.id)}>Return One</button>
          <br />
          {itemToShow.quantity}
          <br />
          <button onClick={() => onClickingTakeOne(itemToShow.id)}>Take One</button>
        </div>
      </div>
      <hr />
      <button onClick={props.onClickingEdit}>Edit Item Details</button>
      <button onClick={() => onClickingDelete(itemToShow.id)}>Remove Item Listing</button>
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  itemToShow: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingTakeOne: PropTypes.func,
  onClickingAddOne: PropTypes.func,
};

export default ItemDetail;
