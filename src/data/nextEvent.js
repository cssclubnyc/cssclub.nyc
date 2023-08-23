import { getEntry } from "astro:content";

const currentEventId = import.meta.env.CURRENT_EVENT_ID;
const { data: currentEvent } = await getEntry("events", currentEventId);
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
