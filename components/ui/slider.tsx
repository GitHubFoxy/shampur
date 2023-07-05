import { useState } from "react";

interface Props {
  name: string[];
}

export default function Slider(Props: Props) {
  var [active, setActive] = useState(2);

  return (
    <>
      <p
        className={`relative py-1 px-3 rounded-l-lg ${
          active == 2 ? "bg-red-500" : "bg-red-300 opacity-90 text-gray-200"
        }`}
      >
        {Props.name[0]}
        <input
          type="radio"
          name="option"
          value="self"
          className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
          onChange={() => setActive(2)}
        />
      </p>
      <p
        className={`relative py-1 px-3 rounded-r-lg  ${
          active == 1 ? "bg-red-500" : "bg-red-300 opacity-90 text-gray-200"
        }`}
      >
        {Props.name[1]}
        <input
          type="radio"
          name="option"
          value="delivery"
          className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
          onChange={() => setActive(1)}
        />
      </p>
    </>
  );
}
