import { PlusCircle } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import TransactionForm from "./TransactionForm";

export default function NewTransaction() {
  return (
    <div className="flex justify-center items-center bg-[#2A2634] py-8 px-10 text-white rounded-lg w-full">
      <Dialog.Root>
        <Dialog.Trigger className="flex flex-row font-black gap-2">
            Nova Transação <PlusCircle size={24} />
        </Dialog.Trigger>
        <TransactionForm />
      </Dialog.Root>
    </div>
  )
}