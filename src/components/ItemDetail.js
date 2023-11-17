import React from "react";

function ItemDetail(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <h2>Item Details</h2>
      <hr />
      <h3>Name: {item.name}</h3>
      <p>Type: {item.type}</p>
      <p>Volume: {item.volume}</p>
      <p>Quantity: {item.quantity}</p>
    </React.Fragment>
  );
}

// ItemDetail.propTypes = {

// };

export default ItemDetail;
