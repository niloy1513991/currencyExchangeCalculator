import { useState } from "react";
import currencies from "../Currency"; // Adjusted the import path

function Demo() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(value);
  };

  return (
    <>
      <div className="container w-[350px] h-[650px] bg-green-100 mx-auto mt-4 rounded-xl flex flex-col">
        <div className="w-80 h-24 mt-4 mx-auto text-2xl font-semibold text-center flex flex-col items-center justify-center text-slate-700">
          <span className="text-3xl">Currency Exchange</span>
          <span>Calculator</span>
        </div>
        <div className="formInput bg-green-200 h-44 w-80 mx-auto mt-4 rounded-lg">
          <input
            type="text"
            className="bg-green-50 w-72 h-28 rounded-md flex mx-auto mt-2 text-center text-4xl"
            placeholder="9990.0"
            inputMode="numeric"
            pattern="[0-9]*"
            value={inputValue}
            onInput={handleInput}
          />
          <div className="plusMinus flex justify-evenly mt-4">
            <button className="bg-green-300 h-8 w-1/3 text-3xl text-slate-600 font-bold rounded-md">
              -
            </button>
            <button className="bg-green-300 h-8 w-1/3 text-3xl text-slate-600 font-bold rounded-md">
              +
            </button>
          </div>
        </div>
        <div className="fromTo m-2 flex bg-green-200 rounded-e-xl w-[320px] mx-auto rounded-md h-20 justify-around">
          <label htmlFor="from" className="break-words whitespace-normal">
            From
          </label>
          <div className="custom-select-wrapper">
            <select
              name="from"
              id="from"
              className="bg-green-100 border border-green-700 rounded-md w-16 ml-2 p-2 pr-8 custom-select"
            >
              {currencies.map((currency) => (
                <option
                  key={currency.id}
                  value={currency.name}
                  selected={currency.name === "BDT"}
                  className="break-words whitespace-normal"
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="to" className="break-words whitespace-normal">
            To
          </label>
          <div className="custom-select-wrapper">
            <select
              name="to"
              id="to"
              className="bg-green-200 w-20 h-10 flex p-2 pr-8 custom-select"
            >
              {currencies.map((currency) => (
                <option
                  selected={currency.name === "USD"}
                  key={currency.id}
                  value={currency.name}
                  className="break-words whitespace-normal"
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form bg-green-200 h-44 w-80 mx-auto rounded-lg"></div>
      </div>
    </>
  );
}

export default Demo;
