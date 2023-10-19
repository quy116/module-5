import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };
  handleAddItem = () => {
    if (this.state.item) {
      this.setState({
        list: [...this.state.list, this.state.item],
      });
    }
  };

  render() {
    return (
      <div>
        <center>
          <div>
            <h1>Todo List</h1>
          </div>
          <div>
            <input onChange={(text) => this.handleChange(text)} />
            <button onClick={this.handleAddItem}>Add</button>
          </div>
          <div>
            <table>
              <tbody>
                {this.state.list.map((item, index) => (
                  <tr key={index}>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    );
  }
}

export default TodoList;
