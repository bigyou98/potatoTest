import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ListBox } from "./index";
import { IoIosAddCircleOutline } from "react-icons/io";

export const MainTodo = () => {
  const focusing = useRef();
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      addTodo(text);
    }
  };
  const addTodo = (text) => {
    if (text.length === 0) {
      return;
    }
    const newTodo = {
      // state의 값이랑 중복인지 아닌지 확인하기 바꿔야하는지
      text: text,
      id: id,
    };
    setTodos(todos.concat(newTodo));
    setId(id + 1);
    setText("");
    focusing.current.focus();
  };

  const clickDeleteBtn = (e) => {
    const newTodos = todos.filter((todo) => todo.id !== e);
    setTodos(newTodos);
  };
  const onChangeValue = (e) => {
    setText(e.target.value);
  };
  return (
    <SmartPhone>
      <Header>To Do List</Header>
      <ListBox clickDeleteBtn={clickDeleteBtn} todos={todos} />
      <Footer>
        <InputBox
          onChange={onChangeValue}
          value={text}
          placeholder="할일을 작성하세요"
          ref={focusing}
          onKeyPress={(e) => pressEnter(e)}
        />
        <AddBtn onClick={() => addTodo(text)}>
          <IoIosAddCircleOutline />
        </AddBtn>
      </Footer>
    </SmartPhone>
  );
};
const SmartPhone = styled.div`
  text-align: center;
  border-radius: 64px;
  width: 640px;
  height: 1000px;
  margin: auto;
  background-color: #dfd9d9;
  box-shadow: 29px 23px 18px -6px rgba(197, 197, 197, 1);
  -webkit-box-shadow: 29px 23px 18px -6px rgba(197, 197, 197, 1);
  -moz-box-shadow: 29px 23px 18px -6px rgba(197, 197, 197, 1);
`;

const InputBox = styled.input`
  width: 98%;
  height: 40px;
  outline: none;
  border: none;
  font-size: 32px;
  padding-left: 10px;
`;
const Header = styled.div`
  background: rgb(57, 57, 55);
  background: linear-gradient(
    8deg,
    rgba(57, 57, 55, 1) 0%,
    rgba(241, 241, 241, 1) 11%,
    rgba(31, 31, 31, 0.8239670868347339) 49%,
    rgba(248, 245, 249, 1) 91%
  );
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 64px 64px 0 0;
  margin-top: 20px;
`;

const AddBtn = styled.button`
  font-size: 56px;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`;
const Footer = styled.div`
  background: rgb(57, 57, 55);
  background: linear-gradient(
    8deg,
    rgba(57, 57, 55, 1) 0%,
    rgba(241, 241, 241, 1) 11%,
    rgba(31, 31, 31, 0.8239670868347339) 49%,
    rgba(248, 245, 249, 1) 91%
  );
  border-radius: 0 0 64px 64px;
`;
