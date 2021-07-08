import React from "react";
import styled from "styled-components";
import { ListItem } from "./index";

// todos 받아오기
export const ListBox = ({ clickDeleteBtn, todos}) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem todo={todo} clickDeleteBtn={clickDeleteBtn} />
      ))}
    </List>
  );
};
// 컴포넌트 이름과 같아도 되는지 확인하기 -> 안되는 걸로
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
