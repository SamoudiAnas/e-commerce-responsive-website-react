import React, { useEffect, createContext, useContext, useReducer } from 'react'
import { useProductsContext } from './ProductContext';  

import {
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from '../actions'








const initialState = {
    filteredProducts:[],
    allProducts:[]
}




export const FilterContext = createContext();



export const FilterProvider = ({children}) =>{

    //const [state,dispatch] = useReducer(reducer,initialState);
    const {products } = useProductsContext();

    return(
        <FilterContext.Provider value="filter">
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}