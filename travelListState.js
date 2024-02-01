// this file is responsible for the model state of the appliction

export const inputItemElement = document.getElementById("form-input");
const quantityElement = document.getElementById("select-option");

/* const itemDescription = inputItemElement.value;
const itemQuantity = quantityElement.value; */

//travel list state
const state = {
  travelListItems: [],
};

// travel list item object
export const travelItem = {
  description: inputItemElement.value,
  quantity: quantityElement.value,
  packed: false,
  id: Date.now(),
};

/**
 * add list item to the array
 * @param {object} listItem - object of the item
 */
export function addTravelListItem(listItem) {
  state.travelListItems.push(listItem);
  console.log(state.travelListItems);
  return state.travelListItems;
}
