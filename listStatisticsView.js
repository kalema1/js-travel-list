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
  #renderStatisticsView(data) {
    this.data = data;
    const statisticsmarkup = this.#generateStatisticsMarkup(this.data);
    this.statisticsElement.innerHTML = "";
    this.statisticsElement.insertAdjacentElement("afterend", statisticsmarkup);
  }

  #generateStatisticsMarkup(data) {
    const markup = `
        <em>You have ${data.travelListlength} items on your list, and you already packed ${travelitemspacked} (${pecentageOftravelitemspacked}%)</em>
    `;
    return markup;
  }
}
export const listStatisticsView = new ListStatisticsView();
