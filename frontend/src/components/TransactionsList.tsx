import { useEffect, useState, FormEvent } from 'react';
import * as request from '../utils/requests';
import TransactionsFilter from './TransactionsFilter';

interface Transaction {
  id: number;
  creditedAccount: string;
  debitedAccount: string;
  operation: string;
  value: string;
  valueFormatted?: number;
  createdAt: string;
  createdAtFormatted?: string;
}

export default function TransactionsList() {
  const [transactions, setTransactions] = useState([] as Transaction[]);

  const getAllTransactions = async () => {
    const response = await request.getAllTransactions() as Transaction[];
    setTransactions(response);
  };

  const formatDate = (date: string) => {
    const dateFormatted = new Date(date).toLocaleDateString('pt-BR');
    const day = dateFormatted.split('/')[0]
    const month = dateFormatted.split('/')[1]
    const year = dateFormatted.split('/')[2]
    return `${Number(day)+1}/${month}/${year}`
  };

  const filterTransactions = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const opQuery = data.op === 'all' ? '' : `op=${data.op}`;
    const { date } = data as { date: string };
    const dateQuery = data.date ? `date=${formatDate(date)}` : '';

    try {
      const response = await request.filterTransactions(opQuery, dateQuery);
      setTransactions(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  return (
    <>
      <TransactionsFilter 
        filterTransactions={filterTransactions}
        getAllTransactions={getAllTransactions}
      />
    {transactions.length > 0 ? (
        <>
          <table className="table-auto border-collapse border">
            <thead className="bg-slate-100 text-[#2A2634]">
              <tr className="border border-slate-400 text-center">
                <th className="px-1">Conta Débito:</th>
                <th>Valor:</th>
                <th>Conta Crédito:</th>
                <th>Data:</th>
              </tr>
            </thead>
          { transactions.map((transaction) => (
            <tbody key={transaction.id}>
              <tr className="border text-center">
                <td className="px-5 py-1">{transaction.debitedAccount}</td>
                <td className="px-5 py-1">R$ {transaction.value.replace('.', ',')}</td>
                <td className="px-5 py-1">{transaction.creditedAccount}</td>
                <td className="px-5 py-1">{transaction.createdAt.split(' ')[0]}</td>
              </tr>
            </tbody>
          ))}
          </table>
        </>
      ) : (
        <p
          className="text-center text-1xl font-semibold text-slate-500"
        >
          Ops, não existe nenhuma transferência.
        </p>
      )} 
    </>
  );
}