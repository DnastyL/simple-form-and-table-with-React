import React, { Component } from "react";
import "./table.css"

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
            <tr>
                <th>Nome</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.email}
                </td>
            </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
