import { useEffect } from "react";
import { api } from '../../services/api';
import { Container } from "./styles";


export function TransactionsTable() {

  useEffect(() => {
    (async () => {
      const response = await api.get('/transactions');
  
      console.log(response.data);
    })()
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposit">R$12000</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> -R$1.100</td>
            <td>Casa</td>
            <td>10/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}