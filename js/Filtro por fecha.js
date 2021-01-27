$("#pills-week-tab").click(() => {
  let filteredPosts = {};
  let todaysDate = moment();
  for (key in cardsCollection) {
    let cardDate = moment(cardsCollection[key].date, "YYYYMMDD HH:mm:ss");
    if (todaysDate.diff(cardDate, "weeks") <= 1) {
      filteredPosts[key] = cardsCollection[key];
    }
  }
  filteredPosts = sortPosts(filteredPosts);
  printCards("week", filteredPosts);
});
