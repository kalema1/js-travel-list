// this file is responsible for the list statistics view of the application

class ListStatisticsView {
  constructor() {
    this.statisticsElement = document.getElementById("statistics");
  }

  /**
   * renders statistics view
   * @param {object} - data string to rendered
   */
  renderStatisticsView(data) {
    const statisticsmarkup = this.generateStatisticsMarkup(data);
    this.statisticsElement.innerHTML = "";
    this.statisticsElement.insertAdjacentHTML("beforeend", statisticsmarkup);
  }

  generateStatisticsMarkup(data) {
    const markup = `
        <em>You have ${data} items on your list.</em>
    `;
    return markup;
  }
}
export const listStatisticsView = new ListStatisticsView();
