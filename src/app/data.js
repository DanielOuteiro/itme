import React from "react";
const columns = [
  {name: "Feature", uid: "name"},
  {name: "ITME", uid: "status1"},
  {name: "LinkedIn", uid: "status2"},
  {name: "GitHub", uid: "status3"},
  {name: "Fiverr", uid: "status4"},
  {name: "Meetup", uid: "status5"},

];

const users = [
  {
    id: 1,
    name: "Upskill for free",
    status1: "✓",
    status2: "x",
    status3: "✓",
    status4: "x",
    status5: "✓",
  },
  {
    id: 2,
    name: "Find new job opportunities",
    status1: "✓",
    status2: "✓",
    status3: "x",
    status4: "✓",
    status5: "x",
  },
  {
    id: 3,
    name: "Connect with local tech communities",
    status1: "✓",
    status2: "✓",
    status3: "x",
    status4: "x",
    status5: "✓",
  },
  {
    id: 4,
    name: "Get rewarded for platform engagement",
    status1: "✓",
    status2: "x",
    status3: "✓",
    status4: "✓",
    status5: "x",
  },
  {
    id: 5,
    name: "Community funded",
    status1: "✓",
    status2: "x",
    status3: "✓",
    status4: "x",
    status5: "x",
  },
];

export {columns, users};
