import React, { useState } from "react";
import styled from "styled-components";
// 여기가 메인이다.
// 여기서 컴포넌트들 다 포함시킨후에 app.js로 내보낸다.

export const MainTodo = () => {
  const [qwe, setQwe] = useState("qwe");
  const change = (e) => {
    console.log(e);
    console.log(qwe);
  };
  return (
    <SmartPhone>
      <Header>To Do List</Header>
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
