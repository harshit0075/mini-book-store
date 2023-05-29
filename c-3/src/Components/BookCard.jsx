import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
export const BookCard = ({id,book_name,author,category,release_year,no_of_chapters,cover_photo}) => {
  return (
    <DIV className="book-card">
      <img src={cover_photo} alt="bookimg" className="book-image"/>
      <h3 className="book-name">{book_name}</h3>
      <h3 className="book-author">{author}</h3>
      <p className="book-category">{category}</p>
      <p className="book-year">{release_year}</p>
      <p className="book-chapter">{no_of_chapters}</p>
      <button >
        <Link to={`/edit-book/${id}`}>Edit</Link>
      </button>
    </DIV>
  );
};


const DIV=styled.div`
border:1px solid gray;
padding:10px;

 img{
  width:200px;
  height:200px
 }
`;