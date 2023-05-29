import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { editBook } from "../Redux/BookReducer/action";

export const EditBook = () => {
   const [name,setName]=useState("")
   const {id}=useParams()
   const [author,setAuthor]=useState("")
   const[no_of_chapters,setNo_of_chapters]=useState(0)
   const books= useSelector((store)=>store.bookReducer.books)
   console.log(books)
   const dispatch=useDispatch()
   useEffect(()=>{
    const data=books.find((el)=>el.id=== +id);
    setName(data.book_name)
    setAuthor(data.author)
    setNo_of_chapters(data.no_of_chapters)
   },[])
   const handleName=(e)=>{
    setName(e.target.value)
   }
   const handleAuthor=(e)=>{
    setAuthor(e.target.value)
   }
   const handleChapter=(e)=>{
    setNo_of_chapters(e.target.value)
   }
   const handleUpdate=()=>{
    const data={name,author,no_of_chapters}
    dispatch(editBook(id,data))
   }
  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID:{id} </h1>
      <input type="text" placeholder="Name" data-testid="book-name" value={name} onChange={handleName} />
      <input type="text" placeholder="Author" data-testid="book-author" value={author} onChange={handleAuthor}/>
      <input
        type="number"
        placeholder="Number of Chapter"
        data-testid="book-chapter"
        value={no_of_chapters}
        onChange={handleChapter}
      />
      <button data-testid="update-book" onClick={handleUpdate}>Update</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
