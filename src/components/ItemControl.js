import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

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

  handleAddingNewItemToList = (itemToAdd) => {
    const modifiedItemList = this.state.mainItemList.concat(itemToAdd);
    this.setState({ mainItemList: modifiedItemList, formVisibleToUser: false });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleToUser) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Back to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} />;
      buttonText = "Add Item";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;