import TransactionsList from "./TransactionsList"

export default function Transactions() {
  return (
    <div className="flex flex-col justify-between items-center bg-[#2A2634] py-8 px-10 text-white rounded-lg">
      <p className="font-black pb-2">
        Histórico de transações:
      </p>
      <TransactionsList />
    </div>
  )
}
