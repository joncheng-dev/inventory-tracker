import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();

    props.onNewItemCreation({
      name: event.target.name.value,
      type: event.target.type.value,
      volume: Number(event.target.volume.value),
      quantity: Number(event.target.quantity.value),
      msgForOutOfStock: "",
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <hr />
      <h1>Form: Add New Item</h1>
      <ReusableForm formSubmissionHandler={handleNewItemFormSubmission} buttonText="Add Item" />
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
};

export default NewItemForm;
