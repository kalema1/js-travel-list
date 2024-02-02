// this is a controller file that acts as a bridge between the state and the view of the application

import { state } from "./travelListState.js";
import { travelListItemView } from "./travelListView.js";

const inputItemElement = document.getElementById("form-input");
const quantityElement = document.getElementById("select-option");
const formElement = document.getElementById("add-form");

/**
 * submits item to the list
 * @param {object} event - submit event
 *
 */
function handleSubmitItem(event) {
  event.preventDefault();
  // get data from form
  const description = inputItemElement.value;
  const quantity = quantityElement.value;

  if (!description) {
    return;
  }

  // create travel list item object
  const travelItem = {
    description: description,
    quantity: quantity,
    packed: false,
    id: Date.now(),
  };

  // add item object to the array
  state.travelListItems.push(travelItem);

  // render the travel list
  travelListItemView.renderTravelList(travelItem);
}

// adding event listener to the form
formElement.addEventListener("submit", handleSubmitItem);
