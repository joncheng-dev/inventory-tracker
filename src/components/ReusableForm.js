import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="text" name="type" placeholder="Type" required />
        <br />
        <input type="number" name="volume" placeholder="Volume" min="1" required />
        <br />
        <input type="number" name="quantity" placeholder="Quantity" min="1" required />
        <br />
        <hr />
        <button type="submit">{props.buttonText}</button>
      </form>
      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
