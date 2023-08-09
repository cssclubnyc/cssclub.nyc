import nextEvent from "./nextEvent.js";

// TODO: This switch without a code change
const nextEventScheduled = true;
const futureLineup = [
  {
    time: "7:15pm",
    title: "First speaker",
    excerpt: "Want to be our <a href='/cfp'>first speaker</a>?",
  },
  {
    time: "7:35pm",
    title: "Second speaker",
    excerpt: "Want to be our <a href='/cfp'>second speaker</a>?",
  },
  {
    time: "7:55pm",
    title: "Third speaker",
    excerpt: "Want to be our <a href='/cfp'>third speaker</a>?",
  },
];

const lineup = nextEventScheduled ? nextEvent.lineup : futureLineup;

export default [
  {
    time: "Now",
    title: "Get your ticket",
    desc: `<a href='${nextEvent.url}'>Tickets are $15</a>.`,
  },
  {
    time: "6:45pm",
    title: "Doors open",
    desc: "Come on in, grab a beverage, and say hello.",
  },
  {
    time: "7:00pm",
    title: "Intro",
    desc: "A short welcome and intro to tonight’s speakers.",
  },
  ...lineup,
  {
    time: "8:10pm",
    title: "Wrap-up",
  },
  {
    time: "8:15pm",
    title: "Club chat",
    desc: "Meet and chat with your club mates.",
  },
  {
    time: "9:00pm",
    title: "Close",
    desc: "You don’t have to go home, but you can’t stay here.",
  },
];
