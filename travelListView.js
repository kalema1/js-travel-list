// this file is responsible for the views of the application

class TravelListItemView {
  constructor() {
    // selecting the element in which the list is to be viewed
    this.listElement = document.getElementById("list");
    this.selectElement = document.getElementById("select-option");
    this.inputItemElement = document.getElementById("form-input");
    this.quantityElement = document.getElementById("select-option");
  }

  /**
   * get input values from the form element
   */
  getFormValues() {
    const description = this.inputItemElement.value;
    const quantity = this.quantityElement.value;
    return {
      description: description,
      quantity: quantity,
    };
  }

  /**
   * renders the travel list item
   * @param {object} - data object to rendered
   */
  renderTravelList(data) {
    const travelListMarkup = this.generateTravelListMarkup(data);
    this.listElement.insertAdjacentHTML("beforeend", travelListMarkup);
  }

  /**
   *  generates the markup for the list items to be displayed
   *
   */
  generateTravelListMarkup(data) {
    const markup = `
        <li class="list-item" data-id="${data.id}" id="list-item">
            <input type="checkbox" class="list-checkbox" value="${data.packed}" id="packed" />
            <span>${data.quantity} ${data.description}</span>
            <button class="delete-btn" id="delete">❌</button>
        </li>
    `;
    return markup;
  }

  /**
   *  generates the markup for the select options
   *
   */
  generateSelectOptionMarkup() {
    const optionMarkup = Array.from({ length: 20 }, (_, i) => i + 1).map(
      (num) =>
        `<option value="${num}" key="${num}">
        ${num}
      </option>`
    );

    return optionMarkup;
  }

  /**
   * renders the select option markup
   *
   */
  renderSelectOptionMarkup() {
    const selectOptionMarkup = this.generateSelectOptionMarkup();
    this.selectElement.innerHTML = "";
    this.selectElement.insertAdjacentHTML("beforeend", selectOptionMarkup);
  }
}

export const travelListItemView = new TravelListItemView();
