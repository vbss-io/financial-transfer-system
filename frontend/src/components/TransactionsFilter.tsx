import { FormEvent } from 'react';
import Input from './Form/Input';
import Button from './Form/Button';

interface TransactionsFilterProps {
  filterTransactions: (e: FormEvent) => Promise<void>;
  getAllTransactions: () => Promise<void>;
}

export default function TransactionsFilter({filterTransactions, getAllTransactions}: TransactionsFilterProps) {

  const refresh = async () => {
    await getAllTransactions();
  };

  return (
    <form onSubmit={filterTransactions} className="flex flex-row gap-4 items-end pb-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="op">Operação:</label>
        <select
          id="op"
          name="op"
          className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
          defaultValue="all"
        >
          <option value="all">Todas</option>
          <option value="cash-in">Cash-in</option>
          <option value="cash-out">Cash-out</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="date">Data:</label>
        <Input
          type="date"
          id="date"
          name="date"
        />
      </div>
      <Button
        type="submit"
        buttonStyle="primary"
      >
        Filtrar
      </Button>
      <Button
        type="button"
        buttonStyle="secondary"
        onClick={refresh}
      >
        Atualizar
      </Button>
    </form>
  )
}
