import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetail from "./ItemDetail";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleToUser: false,
      mainItemList: [],
      selectedItem: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleToUser: false,
        selectedItem: null,
      });
    } else {
      this.setState((prevState) => ({ formVisibleToUser: !prevState.formVisibleToUser }));
    }
  };

  handleAddingNewItemToList = (itemToAdd) => {
    const modifiedItemList = this.state.mainItemList.concat(itemToAdd);
    this.setState({ mainItemList: modifiedItemList, formVisibleToUser: false });
  };

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter((entry) => entry.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail itemToShow={this.state.selectedItem} />;
      buttonText = "Back to Item List";
    } else if (this.state.formVisibleToUser) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Back to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} onItemSelection={this.handleChangingSelectedItem} />;
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
