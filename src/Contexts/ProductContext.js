import React, { useEffect, createContext, useContext, useReducer } from 'react'
  
import {
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from '../actions'



import furniture from "../Images/furniture.jpg"
import greyCurtain from "../Images/grey curtain.jpg"
import greyCurtain2 from "../Images/grey curtain 2.jpg"
import greyCurtain3 from "../Images/grey curtain 3.jpg"





export const ProductsContext = createContext();



export const ProductsProvider = ({children}) =>{

    

    const products = [
    {
        id:"recZkNd1kwmdBcqd0",
        name:"Grey couch on wooden floor",
        price:29999,
        images:[furniture, greyCurtain,greyCurtain2,greyCurtain3],
        colors:["#696868","#a8bba8","#171718"],
        company:"marcos",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut.",
        category:"office",
        featured:false,
        stock:10,
        stars:4.9,
        reviews:2,
        shipping:true
    },
    {
        id:"recZkNf1kwmdBcqd0",
        name:"Grey couch on wooden floor",
        price:29999,
        images:[furniture, greyCurtain,greyCurtain2,greyCurtain3],
        colors:["#696868","#a8bba8","#171718"],
        company:"marcos",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut.",
        category:"office",
        featured:false,
        stock:10, 
        stars:4.9,
        reviews:2,
        shipping:true
    },
    {
        id:"recZkNf1kwmdBcqd1",
        name:"Grey couch on wooden floor",
        price:29999,
        images:[furniture, greyCurtain,greyCurtain2,greyCurtain3],
        colors:["#696868","#a8bba8","#171718"],
        company:"marcos",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut.",
        category:"office",
        featured:true,
        stock:10,
        stars:4.9,
        reviews:2,
        shipping:true
    },
    {
        id:"recZkNs1kwmdBcqd0",
        name:"Grey couch on wooden floor",
        price:29999,
        images:[furniture, greyCurtain,greyCurtain2,greyCurtain3],
        colors:["#696868","#a8bba8","#171718"],
        company:"marcos",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut.",
        category:"office",
        featured:true,
        stock:10,
        stars:4.9,
        reviews:2,
        shipping:true
    },
    {
        id:"rscZkNs1kwmdBcqd0",
        name:"Grey couch on wooden floor",
        price:29999,
        images:[furniture, greyCurtain,greyCurtain2,greyCurtain3],
        colors:["#696868","#a8bba8","#171718"],
        company:"marcos",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut.",
        category:"office",
        featured:true,
        stock:10,
        stars:4.9,
        reviews:2,
        shipping:true
    },
    {
        id:"rqcZkNs1kwmdBcqd0",
        name:"Grey couch on wooden floor",
        price:29999,
        images:[furniture, greyCurtain,greyCurtain2,greyCurtain3],
        colors:["#696868","#a8bba8","#171718"],
        company:"marcos",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut.",
        category:"office",
        featured:false,
        stock:10,
        stars:4.9,
        reviews:2,
        shipping:true
        },
    {
        id:"secZkNs1kwmdBcqd0",
        name:"Grey couch on wooden floor",
        price:29999,
        images:[furniture, greyCurtain,greyCurtain2,greyCurtain3],
        colors:["#696868","#a8bba8","#171718"],
        company:"marcos",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut.",
        category:"office",
        featured:false,
        stock:10,
        stars:4.9,
        reviews:2,
        shipping:true
    }];

    return(
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}


export const useProductsContext = () =>{
    return useContext(ProductsContext);
}