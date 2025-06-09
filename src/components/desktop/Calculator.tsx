import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [operand, setOperand] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearAll = () => {
    setDisplay("0");
    setOperator(null);
    setOperand(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplay(display.charAt(0) === "-" ? display.slice(1) : "-" + display);
  };

  const inputPercent = () => {
    setDisplay((parseFloat(display) / 100).toString());
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);
    if (operand == null) {
      setOperand(display);
    } else if (operator) {
      const currentValue = parseFloat(operand);
      let newValue = currentValue;
      switch (operator) {
        case "+":
          newValue += inputValue;
          break;
        case "-":
          newValue -= inputValue;
          break;
        case "*":
          newValue *= inputValue;
          break;
        case "/":
          newValue /= inputValue;
          break;
        default:
          break;
      }
      setOperand(newValue.toString());
      setDisplay(newValue.toString());
    }
    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  return (
    <div className="w-64 bg-gray-900 rounded-lg shadow-lg p-4 text-white select-none">
      <div className="bg-black text-right text-2xl rounded p-2 mb-2 min-h-[2.5rem]">{display}</div>
      <div className="grid grid-cols-4 gap-2">
        <button className="bg-gray-700 rounded p-2" onClick={clearAll}>C</button>
        <button className="bg-gray-700 rounded p-2" onClick={toggleSign}>±</button>
        <button className="bg-gray-700 rounded p-2" onClick={inputPercent}>%</button>
        <button className="bg-teal-600 rounded p-2" onClick={() => performOperation("/")}>÷</button>
        {[7,8,9].map(n => <button key={n} className="bg-gray-800 rounded p-2" onClick={() => inputDigit(n.toString())}>{n}</button>)}
        <button className="bg-teal-600 rounded p-2" onClick={() => performOperation("*")}>×</button>
        {[4,5,6].map(n => <button key={n} className="bg-gray-800 rounded p-2" onClick={() => inputDigit(n.toString())}>{n}</button>)}
        <button className="bg-teal-600 rounded p-2" onClick={() => performOperation("-")}>−</button>
        {[1,2,3].map(n => <button key={n} className="bg-gray-800 rounded p-2" onClick={() => inputDigit(n.toString())}>{n}</button>)}
        <button className="bg-teal-600 rounded p-2" onClick={() => performOperation("+")}>+</button>
        <button className="col-span-2 bg-gray-800 rounded p-2" onClick={() => inputDigit("0")}>0</button>
        <button className="bg-gray-800 rounded p-2" onClick={inputDot}>.</button>
        <button className="bg-teal-700 rounded p-2" onClick={() => performOperation("=")}>＝</button>
      </div>
    </div>
  );
};

export default Calculator;
