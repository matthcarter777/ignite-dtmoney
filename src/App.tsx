import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContextProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [ isNewTransaticonModalOpen, setIsNewTransaticonModalOpen ] = useState(false);

  function handleOpenNewTransactionModa() {
    setIsNewTransaticonModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransaticonModalOpen(false)
  }

  return (
    <>
      <TransactionsContextProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModa} />
        <Dashboard />

        <NewTransactionModal 
          isOpen={isNewTransaticonModalOpen}
          onRequestClose={handleCloseNewTransactionModal} 
        />

        <GlobalStyle />
      </TransactionsContextProvider>
    </>
  );
}
