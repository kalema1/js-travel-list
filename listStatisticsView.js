// this file is responsible for the list statistics view of the application

class ListStatisticsView {
  constructor() {
    this.statisticsElement = document.getElementById("statistics");
    this.statisticData;
  }

  /**
   * renders statistics view
   * @param {object} - data string to rendered
   */
  renderStatisticsView(data) {
    this.statisticData = data;
    const statisticsmarkup = this.#generateStatisticsMarkup(this.statisticData);
    this.statisticsElement.innerHTML = "";
    this.statisticsElement.insertAdjacentHTML("beforeend", statisticsmarkup);
  }

  #generateStatisticsMarkup(data) {
    const markup = `
        <em>You have ${data.travelListLength} items on your list, and you already packed ${data.travelItemsPacked} (${data.pecentageOftravelItemsPacked}%)</em>
    `;
    return markup;
  }
}
export const listStatisticsView = new ListStatisticsView();
