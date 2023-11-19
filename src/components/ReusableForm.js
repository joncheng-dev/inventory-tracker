import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div class="container d-flex justify-content-left">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
          </div>
          <div className="mb-3">
            <label for="type" className="form-label">
              Type
            </label>
            <input type="text" className="form-control" name="type" placeholder="Type" required />
          </div>
          <div className="mb-3">
            <label for="volume" className="form-label">
              Volume
            </label>
            <input type="number" className="form-control" name="volume" placeholder="Volume" min="1" required />
          </div>
          <div className="mb-3">
            <label for="quantity" className="form-label">
              Quantity
            </label>
            <input type="number" className="form-control" name="quantity" placeholder="Quantity" min="1" required />
          </div>
          <hr />
          <button type="submit" className="btn btn-secondary">
            {props.buttonText}
          </button>
        </form>
      </div>
      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
