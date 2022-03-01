import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

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
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModa} />
      <Dashboard />

      
      <Modal
        isOpen={isNewTransaticonModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Castrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
