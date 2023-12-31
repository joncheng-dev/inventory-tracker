import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <hr />
      <h1>Current Inventory List</h1>
      <hr />
      {props.itemList.map((item) => (
        <Item
          whenItemClicked={props.onItemSelection}
          name={item.name}
          type={item.type}
          volume={item.volume}
          quantity={item.quantity}
          msgForOutOfStock={item.msgForOutOfStock}
          id={item.id}
          key={item.id}
        />
      ))}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func,
};

export default ItemList;
