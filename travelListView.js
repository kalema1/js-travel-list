// this file is responsible for the views of the application

class TravelListItemView {
  // selecting the element in which the list is to be viewd
  #listElement = document.getElementById("list");

  // data to be viewed
  #data;

  /**
   * renders the travel list item
   * @param {string} - data string to rendered
   */
  renderTravelList(data) {
    this.#data = data;
    const travelListMarkup = this.#generateTravelListMarkup();
    this.#clearListMarkup();
    this.#listElement.insertAdjacentHTML("beforeend", travelListMarkup);
  }

  /**
   *  generates the markup for the list items to be displayed
   *
   */
  #generateTravelListMarkup() {
    //console.log(this.#data);
    const markup = `
        <li class="list-item">
            <input type="checkbox" class="list-checkbox" value="${
              this.#data.packed
            }" />
            <span>${this.#data.quantity} ${this.#data.description}</span>
            <button class="delete-btn">❌</button>
        </li>
    `;
    return markup;
  }

  /**
   * clears markup
   *
   */
  #clearListMarkup() {
    this.#listElement.innerHTML = "";
  }
}

export const travelListItemView = new TravelListItemView();
