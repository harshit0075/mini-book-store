import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const initialCategory=searchParams.getAll("category")
  const initialOrder=searchParams.get("order")
  const[category,setCategory]=useState(initialCategory||[])
  const[order,setOrder]=useState(initialOrder||"")
   
  useEffect(()=>{
    let params={
      category
    }
    order&&(params.order=order)
    setSearchParams(params)
  },[category,order])
  const handleCategory=(e)=>{
    const {value}=e.target
    let newCategory=[...category]
    if(newCategory.includes(value)){
      newCategory=newCategory.filter((el)=>el !==value)
    }else{
      newCategory.push(value)
    }
    setCategory(newCategory)
  }
  const handleSort=(e)=>{
    const{value}=e.target
    setOrder(value)
  }
  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input data-testid="novel-filter" type="checkbox" value={"Novel"}  onChange={handleCategory}  checked={category.includes("Novel")}/>
        <label>Novel</label>
        <br />
        <input
          data-testid="science-fiction-filter"
          type="checkbox"
          value={"Science_Fiction"} checked={category.includes("Science_Fiction")} onChange={handleCategory}
        />
        <label>Science Fiction</label>
        <br />
        <input
          data-testid="thriller-filter"
          type="checkbox"
          value={"Thriller"} checked={category.includes("Thriller")} onChange={handleCategory}
        />
        <label>Thriller</label>
        <br />
        <input
          data-testid="motivational-filter"
          type="checkbox"
          value={"Motivational"} checked={category.includes("Motivational")} onChange={handleCategory}
        />
        <label>Motivational</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Release Year</h3>
      <div onChange={handleSort}>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} defaultChecked={order==="asc"}/>
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={order==="desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
