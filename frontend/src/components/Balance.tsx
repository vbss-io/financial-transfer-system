import { useEffect, useState } from "react";
import { ArrowClockwise } from "phosphor-react";
import * as requests from "../utils/requests";
import Button from "./Form/Button";

export default function Balance() {
  const [balance, setBalance] = useState(0);

  const refreshBalance = async () => {
    const balance = await requests.getBalance();
    setBalance(balance.balance);
  };

  useEffect(() => {
    const getBalance = async () => {
      const balance = await requests.getBalance();
      setBalance(balance.balance);
    };
    getBalance();
  }, []);

  return (
    <div className="flex justify-center bg-[#2A2634] py-8 px-10 text-white rounded-lg w-full">
      <Button
        buttonStyle="none"
        className="flex flex-ro font-black gap-2 items-center"
        onClick={refreshBalance}
      >
        Saldo: R$ <span className="text-2xl">{balance.toFixed(2)}</span> <ArrowClockwise size={24} />
      </Button>
    </div>
  )
}