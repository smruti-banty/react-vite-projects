import React, { ReactElement, ReactNode } from "react";

interface BillProp {
  children: ReactNode | ReactElement | ReactElement[];
  billAmount: number;
  setBillAmount: (billAmount: number) => void;
}
const Bill: React.FC<BillProp> = ({ children, billAmount, setBillAmount }) => (
  <div>
    <label>{children}</label>
    <input
      type="text"
      value={billAmount}
      onChange={(e) => setBillAmount(Number(e.target.value))}
    />
  </div>
);

export default Bill;
