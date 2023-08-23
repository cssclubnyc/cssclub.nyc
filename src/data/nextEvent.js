import currentEvent from "./2023-09.js";

const { datetime, url, lineup, soldOut } = currentEvent;

export default {
  soldOut,
  datetime,
  url,
  lineup,
  ticketsOnSale: !soldOut && url !== null,
  location: {
    title: "Resobox East Village",
    addr: "91 E 3rd St, NYC",
    url: "https://resobox.com/",
  },
};
