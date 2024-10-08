import { useEffect, useState } from "react";
import currencies from "./components/Currency";

function App() {
  const [inputCurrencyValue, setInputCurrencyValue] = useState("");
  const [outputCurrencyValue, setOutputCurrencyValue] = useState("");
  const [outputCurrencyName, setOutputCurrencyName] = useState("USD");
  const [inputCurrencyName, setInputCurrencyName] = useState("BDT");
  // const [exchangeRates, setExchangeRates] = useState({});

  const fetchCurrencyApi = async () => {
    try {
      const resp = await fetch(
        `https://v6.exchangerate-api.com/v6/c29155f8e4ec45462fbc87b3/latest/${inputCurrencyName}`
      );
      const data = await resp.json();
      const conversionRate = data.conversion_rates[outputCurrencyName];
      const convertedValue = conversionRate * parseFloat(inputCurrencyValue);
      setOutputCurrencyValue(convertedValue.toFixed(2));
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/c29155f8e4ec45462fbc87b3/latest/USD"
    )
      .then((response) => response.json())
      // .then((data) => setExchangeRates(data.conversion_rates))
      .catch((error) => console.error("Error fetching exchange rates:", error));
  }, []);

  const handleConvert = () => {
    fetchCurrencyApi();
  };

  const handleReset = () => {
    setInputCurrencyValue("");
    setOutputCurrencyValue("");
    // setOutputCurrencyName("USD");
    // setInputCurrencyName("BDT");
  };

  return (
    <>
      <div className="container w-[350px] h-[650px] bg-green-100 mx-auto mt-4 rounded-xl flex flex-col">
        <div className="w-80 h-24 mt-4 mx-auto text-2xl font-semibold text-center flex flex-col items-center justify-center text-slate-700">
          <span className="text-3xl">Currency Exchange</span>
          <span className="font-thin mt-1">Calculator</span>
        </div>
        <div className="formInput bg-green-200 h-44 w-80 mx-auto mt-1 rounded-lg">
          <textarea
            type="text"
            className="bg-green-50 w-72 h-28 rounded-md flex mx-auto mt-2 text-center text-4xl break-words whitespace-normal resize-none pt-8 p-4"
            placeholder="Enter value"
            inputMode="numeric"
            pattern="[0-9]*"
            value={inputCurrencyValue}
            onChange={(e) => setInputCurrencyValue(e.target.value)}
          />
          <div className="plusMinus flex justify-evenly mt-4">
            <button
              className="minusOne bg-green-300 h-8 w-1/3 text-3xl text-slate-600 font-bold rounded-md flex text-center justify-center items-center"
              onClick={() =>
                setInputCurrencyValue(
                  (prevValue) => parseFloat(prevValue || 0) - 1
                )
              }
            >
              -
            </button>
            <button
              className="plusOne bg-green-300 h-8 w-1/3 text-3xl text-slate-600 font-bold rounded-md"
              onClick={() =>
                setInputCurrencyValue(
                  (prevValue) => parseFloat(prevValue || 0) + 1
                )
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="fromTo m-1 flex bg-green-200 rounded-e-xl w-[320px] mx-auto rounded-md h-20 justify-around">
          <div className="toCUrrency w-36 bg-green-100 text-center flex items-center h-16 my-auto rounded-xl">
            <label htmlFor="to" className="ml-3">
              From
            </label>
            <select
              name="to"
              id="to"
              className="bg-green-100 w-20 h-10 flex p-2"
              onChange={(e) => setInputCurrencyName(e.target.value)}
            >
              {currencies.map((currency) => (
                <option
                  selected={currency.name === "BDT"}
                  key={currency.id}
                  value={currency.name}
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
          <div className="toCUrrency w-36 bg-green-100 text-center flex items-center h-16 my-auto rounded-xl">
            <label htmlFor="to" className="ml-6">
              To
            </label>
            <select
              name="to"
              id="to"
              className="bg-green-100 w-20 h-10 flex p-2"
              onChange={(e) => setOutputCurrencyName(e.target.value)}
            >
              {currencies.map((currency) => (
                <option
                  selected={currency.name === "USD"}
                  key={currency.id}
                  value={currency.name}
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="div mx-auto mb-2 mt-1 flex gap-8">
          <button
            className="w-32 h-8 flex text-center bg-red-400 items-center justify-center text-xl text-slate-700 rounded-md"
            onClick={handleReset}
          >
            Clear
          </button>
          <button
            className="w-32 h-8 flex text-center bg-green-400 items-center justify-center text-xl font- text-slate-900 rounded-md"
            onClick={handleConvert}
          >
            Convert
          </button>
        </div>
        <div className="output bg-green-200 h-44 w-80 mx-auto rounded-lg flex-col pt-3">
          <div className="outputContainer2 output h-40 w-64 mx-auto bg-green-200 rounded-lg flex-col">
            <textarea
              name=""
              id=""
              className="w-64 flex mx-auto text-center pt-8 h-24 bg-green-300 text-2xl break-words whitespace-normal resize-none rounded-lg"
              placeholder="00.00"
              value={outputCurrencyValue}
              readOnly
            />
            <h4 className="h-8 bg-green-300 p-8 mt-4 w-2/3 mx-auto text-center pt-2 rounded-md font-mediam overflow-hidden">
              {outputCurrencyName}
            </h4>
          </div>
        </div>
        <div className="copyright  text-slate-600 text-center h-10 w-72 mx-auto mt-2 flex flex-col">
          <a href="http://niloykm.me/profileLinks/" target="_blank">
            Connect with &copy;Niloy
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
