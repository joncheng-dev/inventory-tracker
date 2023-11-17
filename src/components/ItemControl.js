import React from "react";
import ItemList from "./ItemList";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleToUser: false,
      mainItemList: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ formVisibleToUser: !prevState.formVisibleToUser }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    currentlyVisibleState = <ItemList itemList={this.state.mainItemList} />;
    buttonText = "Add Item";

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;
