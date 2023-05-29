import {BOOK_FAILURE, BOOK_REQUEST, GET_BOOK_SUCCESS, PATCH_BOOK_SUCCESS} from "./actionTypes"
import axios from "axios"


export const getBooks = (paramObj)=>(dispatch) => {
   dispatch({type:BOOK_REQUEST})
   axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,paramObj).then((res)=>{
    dispatch({type:GET_BOOK_SUCCESS,payload:res.data})
   }).catch(()=>{
    dispatch({type:BOOK_FAILURE})
   })
};

export const editBook = (id,data)=>(dispatch) => {
   dispatch({type:BOOK_REQUEST})
   axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`,data).then((res)=>{
    dispatch(PATCH_BOOK_SUCCESS)
   }).catch(()=>{
    dispatch({type:BOOK_FAILURE})
   })
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
