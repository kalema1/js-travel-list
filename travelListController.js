// this is a controller file that acts as a bridge between the state and the view of the application

import { travelListItemView } from "./travelListView.js";
import { travelListState } from "./travelListState.js";

const formElement = document.getElementById("add-form");

/**
 * submits item to the list
 * @param {object} event - submit event
 *
 */
function handleSubmitItem(event) {
  event.preventDefault();

  //  get the item object
  let travelListItem = {
    ...travelListItemView.getFormValues(),
    packed: false,
    id: Date.now(),
  };

  if (!travelListItem.description) {
    return;
  }

  // get item list from localstorage
  let travelItems = travelListState.getTravelListItems();
  travelItems.push(travelListItem);
  travelListState.savetravelListItem(travelItems);

  // render the travel list item
  travelListItemView.renderTravelList(travelListItem);

  //clear the input elements
  travelListItemView.inputItemElement.value = "";
  travelListItemView.quantityElement.value = "1";
}

// adding event listener to the form
formElement.addEventListener("submit", handleSubmitItem);

// render list from the local storage
travelListState
  .getTravelListItems()
  .map((travelItem) => travelListItemView.renderTravelList(travelItem));

/**
 * delegates event and deletes the selected item from the list.
 * @param {object} event
 *
 */
function deleteItem(event) {
  const listItemElement = event.target.closest("#list-item");
  const deleteElement = event.target.closest("#delete");
  deleteElement?.addEventListener("click", () => {
    listItemElement.remove();
    state.travelListItems.filter((item) => item.id !== id);
  });
}

// render the select options
travelListItemView.renderSelectOptionMarkup();

// event on the list element
travelListItemView.listElement.addEventListener("mouseover", deleteItem);
