import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';

export const ListItem = React.memo(({ todo, clickDeleteBtn }) => {
  const { text, id } = todo;
  const item = useRef();
  useEffect(() => {
    item.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  });
  return (
    <Item ref={item}>
      {text}
      <DeleteBtn onClick={() => clickDeleteBtn(id)}>
        <RiDeleteBin5Line />{' '}
      </DeleteBtn>
    </Item>
  );
}
)
const Item = styled.li`
  padding-left: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 2px solid #454245;
  border-radius: 100px;
  margin: 10px 8px 10px 0px;
  height: 40px;
`;
const DeleteBtn = styled.button`
  font-size: 32px;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
    color: red;
  }
`;
