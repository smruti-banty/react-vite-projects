import { ReactElement, ReactNode } from "react";

interface TipProps {
  tip: number;
  updateTip:  React.Dispatch<React.SetStateAction<number>>
  children: ReactNode | ReactElement | ReactElement[];
}

const Tip: React.FC<TipProps> = ({ children, tip, updateTip }) => {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={e => updateTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export default Tip;
