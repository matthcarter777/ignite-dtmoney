import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { api } from '../services/api';


interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsContextData {
  transactions: Transaction[];
}

interface TransactionsContextProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsContextProvider({children}: TransactionsContextProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    (async () => {
      const response = await api.get('/transactions');
  
      setTransactions(response.data.transactions);
    })()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions
      }}
    >
      { children }
    </TransactionsContext.Provider>
  )

}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
