import nextEvent from "./nextEvent.js";
const { lineup, ticketsOnSale } = nextEvent;
const futureLineup = [
  {
    time: "7:15pm",
    title: "First speaker",
    excerpt: "Want to be a <a href='/cfp'>speaker</a>?",
  },
  {
    time: "7:35pm",
    title: "Second speaker",
    excerpt: "Want to be a <a href='/cfp'>speaker</a>?",
  },
  {
    time: "7:55pm",
    title: "Third speaker",
    excerpt: "Want to be a <a href='/cfp'>speaker</a>?",
  },
];

const lineupPrepped = [0, 1, 2].map((_, i) => lineup[i] || futureLineup[i]);
let schedule = [
  {
    time: "6:45pm",
    title: "Doors open",
    excerpt: "Come on in, grab a beverage, and say hello.",
  },
  {
    time: "7:00pm",
    title: "Intro",
    excerpt: "A short welcome and intro to tonight’s speakers.",
  },
  ...lineupPrepped,
  {
    time: "8:10pm",
    title: "Wrap-up",
  },
  {
    time: "8:15pm",
    title: "Club chat",
    excerpt: "Meet and chat with your club mates.",
  },
  {
    time: "9:00pm",
    title: "Close",
    excerpt: "You don’t have to go home, but you can’t stay here.",
  },
];

if (ticketsOnSale) {
  schedule.unshift({
    time: "Now",
    title: "Get your ticket",
    excerpt: `<a href='${nextEvent.url}'>Tickets are $15</a>.`,
  });
}

export default schedule;
