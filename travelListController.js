// this is a controller file that acts as a bridge between the state and the view of the application

import { travelListItemView } from "./travelListView.js";
import { travelListState } from "./travelListState.js";
//import { listStatisticsView } from "./listStatisticsView.js";

class TravelListController {
  constructor() {
    this.formElement = document.getElementById("add-form");
    this.initilizeApp();
  }

  /**
   * submits item to the list
   * @param {object} event - submit event
   *
   */
  handleSubmitItem(event) {
    event.preventDefault();

    //  get the item object
    let travelItem = {
      ...travelListItemView.getFormValues(),
      isPacked: false,
      id: Date.now(),
    };

    if (!travelItem.description) {
      return;
    }

    // add item to the list
    travelListState.addTravelItem(travelItem);

    // render the travel list item
    travelListItemView.renderTravelList(travelItem);

    //clear the input elements
    travelListItemView.inputItemElement.value = "";
    travelListItemView.quantityElement.value = "1";
  }

  /**
   * delegates event and deletes the selected item from the list.
   * @param {object} event
   *
   */
  deleteItem(event) {
    const listItemElement = event.target.closest("#list-item");
    const deleteElement = event.target.closest("#delete");
    const elementIdAttribute = listItemElement.getAttribute("data-id");
    const id = Number(elementIdAttribute);

    deleteElement?.addEventListener("click", () => {
      travelListState.removeTravelItem(id);
      listItemElement.remove();
    });
  }

  /**
   * initilizes the application
   */
  initilizeApp() {
    // render the select options
    travelListItemView.renderSelectOptionMarkup();

    // adding event listener to the form
    this.formElement.addEventListener("submit", this.handleSubmitItem);

    // render list from the local storage
    travelListState
      .getTravelList()
      .forEach((travelItem) => travelListItemView.renderTravelList(travelItem));

    // event on the list element
    travelListItemView.listElement.addEventListener(
      "mouseover",
      this.deleteItem
    );
  }
}

const traveListController = new TravelListController();
traveListController;
