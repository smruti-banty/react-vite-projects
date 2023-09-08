import React from "react";

interface TotalProp {
  billAmount: number;
  tip: number;
}

const Total: React.FC<TotalProp> = ({ billAmount, tip }) => {
  
  return (
    <h2>
      You pay ${billAmount + tip} (${billAmount} + ${tip} tip)
    </h2>
  );
};

export default Total;
