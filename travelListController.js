// this is a controller file that acts as a bridge between the state and the view of the application

import {
  inputItemElement,
  travelItem,
  addTravelListItem,
} from "./travelListState.js";
import { travelListItemView } from "./travelListView.js";

const formElement = document.getElementById("add-form");

function handleSubmitItem(event) {
  event.preventDefault();

  /* if (!travelItem.description) {
    return;
  }
 */

  addTravelListItem(travelItem).map((item) =>
    travelListItemView.renderTravelList(item)
  );
}

formElement.addEventListener("submit", handleSubmitItem);

console.log(inputItemElement.value);
