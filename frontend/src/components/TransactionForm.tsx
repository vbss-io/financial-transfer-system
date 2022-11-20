import { useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import * as requests from "../utils/requests";
import Input from './Form/Input';
import Button from './Form/Button';

export default function TransactionForm() {
  const [error, setError] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [success, setSuccess] = useState("");
  const [SuccessStatus, setSuccessStatus] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const transaction = await requests.newTransaction({ ...data, value: Number(data.value) });
      setErrorStatus(false);
      setSuccessStatus(true);
      setSuccess("Realizado com sucesso!");
    } catch (error: any) {
      console.log(error);
      setSuccessStatus(false);
      setErrorStatus(true);
      setError(error.response.data.message);
    }
  }


  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/25" >
        <Dialog.Title className="text-2xl font-bold">
          Nova Transação
        </Dialog.Title>
          <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="creditedUsername">Usuário:</label>
              <Input required id="creditedUsername" name="creditedUsername" placeholder="Usuário a receber?"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="value">Valor:</label>
              <Input required type="number" step="0.01" id="value" name="value" placeholder="Qual o valor?"/>
            </div>
            <span className={`${!errorStatus && 'hidden'} text-center text-red-500`}>
              {error}
            </span>
            <span className={`${!SuccessStatus && 'hidden'} text-center text-green-500`}>
              {success}
            </span>
            <div className="flex flex-row gap-4 justify-between">
              <Dialog.Close
                type="button"
              >
                Cancelar
              </Dialog.Close>
              <Button
                type="submit"
                buttonStyle="primary"
              >
                Transferir
              </Button>
            </div>
          </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}