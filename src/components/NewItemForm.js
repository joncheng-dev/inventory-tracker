import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();

    props.onNewItemCreation({
      name: event.target.name.value,
      type: event.target.type.value,
      volume: Number(event.target.volume.value),
      quantity: Number(event.target.quantity.value),
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="type" placeholder="Type" />
        <input type="number" name="volume" placeholder="Volume" />
        <input type="number" name="quantity" placeholder="Quantity" />
        <button type="submit">Add Item to Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
};

export default NewItemForm;
