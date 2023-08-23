import currentEvent from "./2023-09.js";

const { datetime, url, lineup } = currentEvent;

export default {
  upcoming: true,
  soldOut: false,
  datetime,
  url,
  lineup,
  location: {
    title: "Resobox East Village",
    addr: "91 E 3rd St, NYC",
    url: "https://resobox.com/",
  },
};
