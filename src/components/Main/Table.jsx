import "./table.css";



export const Table = (props) => (
  <table>
    <tbody>
      <tr>
        <th>Nome</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>{props.nome}</td>
        <td>{props.email}</td>
      </tr>
    </tbody>
  </table>
);


