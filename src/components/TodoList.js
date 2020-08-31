import React, { Component } from "react";
import styled from "styled-components";
import TodoItem from "./Todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: thin solid black;
  margin-top: 2rem;
`;

class TodoList extends Component {
  render() {
    const { todoList, toggleCompleted } = this.props;
    return (
      <Container>
        <h2>Todo List</h2>
        {todoList.map((item) => {
          return <TodoItem item={item} key={item.id} toggleCompleted={toggleCompleted}/>;
        })}
      </Container>
    );
  }
}

export default TodoList;