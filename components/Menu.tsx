"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import Cart from "./Cart";
import { useState } from "react";
import { NonNullChain } from "typescript";

export default function Menu() {
  let menupos = [
    "донар",
    "шаурма",
    "шашлык",
    "люля-кебаб",
    "картофель",
    "овощи",
    "салаты",
  ];
  let [active, setActive] = useState(0);

  // use effect???
  return (
    <div className='bg-white h-screen'>
      <div className='container mx-auto'>
        <div className='px-2 pt-12 sm:px-0 '>
          <h1 className='text-4xl font-bold'>МЕНЮ</h1>
          <div>
            <ul className='grid grid-cols-3 gap-2 uppercase pt-2 font-semibold text-center sm:flex sm:flex-row'>
              {menupos.map((pos, index) => {
                return (
                  <li
                    key={pos}
                    className={`cursor-pointer px-2 py-1 select-none ${
                      active === index && "active"
                    }`}
                    onClick={() => {
                      setActive(index);
                    }}
                  >
                    {pos}
                  </li>
                );
              })}
              <li
                className={`grid place-content-center cursor-pointer px-4 py-1 select-none ${
                  active === menupos.length && "active"
                }`}
                onClick={() => setActive(menupos.length)}
              >
                <FontAwesomeIcon
                  className='sm:mx-5 pointer-events-none'
                  icon={faCartShopping}
                  width={20}
                />
              </li>
            </ul>
          </div>
          {active === menupos.length ? <Cart /> : <Card />}
        </div>
      </div>
    </div>
  );
}
