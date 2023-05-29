import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/BookReducer/action";
import { BookCard } from "./BookCard";
import styled from "styled-components"
import { useLocation, useSearchParams } from "react-router-dom";
export const BookList = () => {
  const [searchParams]=useSearchParams()
  const location=useLocation()
  const books= useSelector((store)=>store.bookReducer.books)
   let obj={
    params:{
      category:searchParams.getAll("category"),
      _sort:searchParams.get("order")&&"release_year",
      _order:searchParams.get("order")
    }
   }
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(getBooks(obj))
  },[location.search])
  return (
    <DIV data-testid="book-list">
      {books.length>0&&books.map((el)=>{
        return <BookCard key={el.id} {...el}/>
      })}
    </DIV>
  );
};

const DIV=styled.div`
display:grid;
grid-template-columns: auto auto auto auto;
grid-gap:20px;
`;