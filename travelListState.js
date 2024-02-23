// this file is responsible for the model state of the appliction

/**
 * @typedef {{id: string, description: string, quantity: number, isPacked: boolean}} travelItem
 */

class TravelListState {
  static LOCAL_STORAGE_KEY = "travel_list_key";

  /**
   * @type {travelItem[]}
   * @private - This is the actual list maintained in the application
   */
  travelList;

  constructor() {
    this.travelList =
      JSON.parse(localStorage.getItem(TravelListState.LOCAL_STORAGE_KEY)) || [];
  }

  /**
   * gets the list items from the local storage
   * @returns {travelItem[]}
   */
  getTravelList() {
    let travelList = this.travelList;
    return travelList;
  }

  /**
   * saves travel list item to local storage
   * @param {travelItem[]} travelList - array of travel items to be saved
   */
  saveTravelList(travelList) {
    this.travelList = travelList;
    localStorage.setItem(
      TravelListState.LOCAL_STORAGE_KEY,
      JSON.stringify(travelList)
    );
  }

  /**
   * Add an item to the travel list
   * @param {travelItem} item - item to be added
   * @throws {Error} - when item is not valid or item is a duplicate
   */
  addTravelItem(item) {
    // check if item is an object
    if (typeof item !== "object") {
      throw new Error("The item to be added is of the wrong format");
    }

    // check that item doesn't already exist
    const isDuplicateItem = this.travelList.find(
      (element) => element.id === item.id
    );

    if (isDuplicateItem) {
      throw new Error("Item already exists in the list");
    }

    let travelList = this.getTravelList();
    travelList.push(item);
    this.saveTravelList(travelList);
  }

  /**
   * @description - This removes an item from the travel list
   * @param {string} id - the id of the item to be removed
   * @throws {Error} - if the id provided is invalid or doesn't exist in the list
   */
  removeTravelItem(id) {
    if (typeof id !== "number") {
      throw new Error("Id must be a number");
    }

    const travelList = this.getTravelList();
    const indexToRemove = travelList.findIndex((element) => element.id === id);

    if (indexToRemove === -1) {
      throw new Error("Item doesn't exist in the list");
    }

    travelList.splice(indexToRemove, 1);
    this.saveTravelList(travelList);
  }
}

export const travelListState = new TravelListState();
