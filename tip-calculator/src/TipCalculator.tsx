import { useState } from "react";
import Bill from "./Bill";
import Tip from "./Tip";
import Total from "./Total";
import Reset from "./Reset";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tip = Math.round(billAmount * ((yourTip + friendTip) / 2 / 100));

  function updateBill(value: number) {
    setBillAmount(value);
  }

  function reset() {
    setBillAmount(0);
    setYourTip(0);
    setFriendTip(0);
  }
  return (
    <>
      <Bill billAmount={billAmount} setBillAmount={updateBill}>
        Enter total bill amount?
      </Bill>
      <Tip tip={yourTip} updateTip={setYourTip}>
        How did you like the service?
      </Tip>
      <Tip tip={friendTip} updateTip={setFriendTip}>
        How did your friend like the service?
      </Tip>
      {billAmount > 0 && (
        <>
          <Total billAmount={billAmount} tip={tip} />
          <Reset reset={reset} />
        </>
      )}
    </>
  );
};

export default TipCalculator;
