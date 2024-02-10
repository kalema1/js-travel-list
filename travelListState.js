// this file is responsible for the model state of the appliction

class TravelListState {
  /**
   * gets the list items from the local storage
   */
  getTravelListItems() {
    let travelListItems = localStorage.getItem("travelItems");
    return travelListItems ? JSON.parse(travelListItems) : [];
  }

  /**
   * saves travel list item to local storage
   * @param {object} travelItem - object with data to be saved
   */
  savetravelListItem(travelItem) {
    localStorage.setItem("travelItems", JSON.stringify(travelItem));
  }
}
export const travelListState = new TravelListState();
