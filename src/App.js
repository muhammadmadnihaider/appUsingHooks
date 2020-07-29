import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "what is react?",
    content: "React if frontend js framework",
  },

  {
    title: "why use react?",
    content: "React is favorite library among engineers",
  },
  {
    title: "how do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
