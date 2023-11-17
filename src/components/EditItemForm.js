import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditItemForm(props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      name: event.target.name.value,
      type: event.target.type.value,
      volume: Number(event.target.volume.value),
      quantity: Number(event.target.quantity.value),
      id: item.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditItemFormSubmission} buttonText="Submit Changes" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func,
};

export default EditItemForm;
