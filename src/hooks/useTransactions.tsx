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

interface TransactionData {
  type: string;
  title: string;
  amount: number;
  category: string;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (data: TransactionData) => Promise<void>;
}

interface TransactionsContextProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsContextProvider({children}: TransactionsContextProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction(data: TransactionData) {

    const response = await api.post('/transactions', {
      ...data,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);

    return;
  }

  useEffect(() => {
    (async () => {
      const response = await api.get('/transactions');
  
      setTransactions(response.data.transactions);
    })()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction
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
