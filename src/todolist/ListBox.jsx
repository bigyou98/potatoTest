import React from 'react';
import styled from 'styled-components';
import { ListItem } from './index';

export const ListBox = React.memo(({ clickDeleteBtn, todos }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem todo={todo} clickDeleteBtn={clickDeleteBtn} />
      ))}
    </List>
  );
});

const List = styled.ul`
  height: 776px;
  font-size: 24px;
  list-style: none;
  overflow-y: auto;
  padding-left: 16px;
  background: gray;
  margin: 20px;
  border-radius: 10px;
`;
