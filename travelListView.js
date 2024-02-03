// this file is responsible for the views of the application

class TravelListItemView {
  constructor() {
    // selecting the element in which the list is to be viewed
    this.listElement = document.getElementById("list");

    // data to be viewed
    this.data;
  }

  /**
   * renders the travel list item
   * @param {string} - data string to rendered
   */
  renderTravelList(data) {
    this.data = data;
    const travelListMarkup = this.#generateTravelListMarkup(this.data);
    this.listElement.insertAdjacentHTML("beforeend", travelListMarkup);
  }

  /**
   *  generates the markup for the list items to be displayed
   *
   */
  #generateTravelListMarkup(data) {
    //console.log(this.#data);
    const markup = `
        <li class="list-item" data-id="${data.id}" id="list-item">
            <input type="checkbox" class="list-checkbox" value="${data.packed}" id="packed" />
            <span>${data.quantity} ${data.description}</span>
            <button class="delete-btn" id="delete">❌</button>
        </li>
    `;
    return markup;
  }
}

export const travelListItemView = new TravelListItemView();
