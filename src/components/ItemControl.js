import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import EditItemForm from "./EditItemForm";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleToUser: false,
      mainItemList: [],
      selectedItem: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleToUser: false,
        selectedItem: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({ formVisibleToUser: !prevState.formVisibleToUser }));
    }
  };

  handleAddingNewItemToList = (itemToAdd) => {
    const modifiedItemList = this.state.mainItemList.concat(itemToAdd);
    this.setState({
      formVisibleToUser: false,
      mainItemList: modifiedItemList,
    });
  };

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter((entry) => entry.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingItemInList = (itemToEdit) => {
    const modifiedItemList = this.state.mainItemList.filter((item) => item.id !== this.state.selectedItem.id).concat(itemToEdit);
    this.setState({
      mainItemList: modifiedItemList,
      selectedItem: null,
      editing: false,
    });
  };

  handleDeletingItem = (id) => {
    const modifiedItemList = this.state.mainItemList.filter((item) => item.id !== id);
    this.setState({
      mainItemList: modifiedItemList,
      selectedItem: null,
    });
  };

  handleDecrementingItemQuantity = (id) => {
    const targetItemToModifyQuantityOf = this.state.mainItemList.filter((item) => item.id === id)[0];
    if (targetItemToModifyQuantityOf.quantity > 1) {
      const updatedItem = Object.assign(targetItemToModifyQuantityOf, (targetItemToModifyQuantityOf.quantity -= 1));
      const modifiedItemList = this.state.mainItemList.filter((item) => item.id !== this.state.selectedItem.id).concat(updatedItem);
      this.setState({
        mainItemList: modifiedItemList,
      });
    } else if (targetItemToModifyQuantityOf.quantity === 1) {
      const updatedItem = Object.assign(
        targetItemToModifyQuantityOf,
        (targetItemToModifyQuantityOf.quantity -= 1),
        (targetItemToModifyQuantityOf.msgForOutOfStock = "Out of Stock")
      );
      const modifiedItemList = this.state.mainItemList.filter((item) => item.id !== this.state.selectedItem.id).concat(updatedItem);
      this.setState({
        mainItemList: modifiedItemList,
      });
    }
  };

  handleIncrementingItemQuantity = (id) => {
    const targetItemToModifyQuantityOf = this.state.mainItemList.filter((item) => item.id === id)[0];
    if (targetItemToModifyQuantityOf.quantity === 0) {
      const updatedItem = Object.assign(
        targetItemToModifyQuantityOf,
        (targetItemToModifyQuantityOf.quantity += 1),
        (targetItemToModifyQuantityOf.msgForOutOfStock = "")
      );
      const modifiedItemList = this.state.mainItemList.filter((item) => item.id !== this.state.selectedItem.id).concat(updatedItem);
      this.setState({
        mainItemList: modifiedItemList,
      });
    } else {
      const updatedItem = Object.assign(targetItemToModifyQuantityOf, (targetItemToModifyQuantityOf.quantity += 1));
      const modifiedItemList = this.state.mainItemList.filter((item) => item.id !== this.state.selectedItem.id).concat(updatedItem);
      this.setState({
        mainItemList: modifiedItemList,
      });
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let messageToUser = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm item={this.state.selectedItem} onEditItem={this.handleEditingItemInList} />;
      buttonText = "Back to Item List";
    } else if (this.state.selectedItem != null) {
      if (this.state.selectedItem.quantity === 0) {
        messageToUser = "Out of Stock";
      }
      currentlyVisibleState = (
        <ItemDetail
          itemToShow={this.state.selectedItem}
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingItem}
          onClickingTakeOne={this.handleDecrementingItemQuantity}
          onClickingAddOne={this.handleIncrementingItemQuantity}
          messageOnQuantity={messageToUser}
        />
      );
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
