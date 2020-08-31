import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &.completed {
    text-decoration: line-through;
    color: grey;
  }
  &:hover{
      cursor: pointer;
  }
`;

class TodoItem extends Component {
  render() {
    const { item, toggleCompleted } = this.props;
    return (
      <Container
        onClick={(e) => {
          toggleCompleted(item.id);
        }}
        className={item.completed ? "completed" : ""}
      >
        <p>{item.task}</p>
      </Container>
    );
  }
}

export default TodoItem;