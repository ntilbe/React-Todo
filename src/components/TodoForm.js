import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      border: none;
      border-bottom: thin solid red;
      text-align: center;
    }
    button {
      border: none;
      background: none;
      margin-top: 1.5rem;
      border: thin solid red;
      padding: 0.25rem ${(0.25 * 16) / 9}rem;
      border-radius: 0.25rem;
      transition: 0.125s ease-in-out all;
      margin: 1.5rem 0.5rem 0rem 0.5rem;
      &:hover {
        background: red;
        color: white;
        transition: 0.125s ease-in-out all;
        cursor: pointer;
      }
      &:disabled {
        cursor: not-allowed;
        color: grey;
        &:hover {
          background: none;
          color: grey;
        }
      }
    }
  }
`;

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemText: "",
      allowSubmit: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.itemText, () => {
      this.setState({ ...this.state, itemText: "" });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.allowSubmit) {
      if (this.state.itemText.length > 0) {
        this.setState({ ...this.state, allowSubmit: true });
      }
    } else {
      if (this.state.itemText.length <= 0) {
        this.setState({ ...this.state, allowSubmit: false });
      }
    }
  }

  clearCompleted = (e) => {
    const { onClear } = this.props;
    e.preventDefault();
    onClear();
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <input
            name="itemText"
            id="itemText"
            onChange={this.handleChange}
            value={this.state.itemText}
            placeholder="New Item"
          />
          <div>
            <button disabled={!this.state.allowSubmit} type="submit">
              Add Item
            </button>
            <button onClick={this.clearCompleted}>Clear Completed</button>
          </div>
        </form>
      </Container>
    );
  }
}

export default TodoForm;