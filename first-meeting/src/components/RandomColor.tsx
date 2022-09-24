import { useState } from "preact/hooks";
import { getRandomNumber } from "../utils/getRandomNumber";

const colors = [
  "bg-zinc-700",
  "bg-red-700",
  "bg-yellow-700",
  "bg-teal-700",
  "bg-sky-700"
];

export const RandomColor = () => {
  const [color, setColor] = useState("bg-zinc-700");

  const changeColor = () => {
    const randomNumber = getRandomNumber(colors);
    setColor(colors[randomNumber]);
  };

  return (
    <div className={"p-2 border border-stone-300 text-center " + color}>
      <button
        className="px-1 py-2 my-4 bg-sky-700 text-white hover:bg-sky-900"
        onClick={changeColor}
      >
        Random color
      </button>
    </div>
  );
};
