import React from 'react';

const test = () => {
  const todos = [
    { id: 1, checked: true },
    { id: 2, checked: true },
  ];
  const nextTodos = [...todos];
  nextTodos[0] = {
    ...nextTodos[0],
    checked: false,
  };
  return <div></div>;
};

export default test;
