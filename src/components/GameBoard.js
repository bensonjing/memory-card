import React, { useState } from "react";
import Card from "./Card";
import boba from "../assets/boba.jpg";
import chickenRice from "../assets/chicken-rice.png";
import curry from "../assets/curry.jpg";
import dimsum from "../assets/dimsum.jpg";
import hotpot from "../assets/hotpot.jpg";
import matcha from "../assets/matcha.jpg";
import ramen from "../assets/curry.jpg";
import sushi from "../assets/sushi.png";
import takoyaki from "../assets/takoyaki.jpg";
import zongzi from "../assets/zongzi.jpg";

export default function GameBoard() {
  let image = [
    {
      src: boba,
      title: "Boba",
      backgroundColor: "rgb(54 145 154)",
    },
    {
      src: chickenRice,
      title: "Chicken Rice",
      backgroundColor: "rgb(136 96 6)",
    },
    {
      src: curry,
      title: "Curry",
      backgroundColor: "rgb(189 166 82)",
    },
    {
      src: dimsum,
      title: "Dimsum",
      backgroundColor: "rgb(111 31 0)",
    },
    {
      src: hotpot,
      title: "Hotpot",
      backgroundColor: "rgb(226 143 58)",
    },
    {
      src: matcha,
      title: "Matcha",
      backgroundColor: "rgb(255 148 148)",
    },
    {
      src: ramen,
      title: "Ramen",
      backgroundColor: "rgb(255 141 0)",
    },
    {
      src: sushi,
      title: "Sushi",
      backgroundColor: "rgb(245 194 80)",
    },
    {
      src: takoyaki,
      title: "Takoyaki",
      backgroundColor: "rgb(255 223 137)",
    },
    {
      src: zongzi,
      title: "Zong Zi",
      backgroundColor: "rgb(76 136 89)",
    },
  ];

  const [cards, setCards] = useState(image);

  return (
    <>
      <div id="game_board">
        {cards.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </div>
    </>
  );
}
