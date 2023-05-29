import React from "react";
import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { BookList } from "../Components/BookList";

export const Homepage = () => {
  return (
    <DIV>
      <Sidebar />
      <BookList />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
