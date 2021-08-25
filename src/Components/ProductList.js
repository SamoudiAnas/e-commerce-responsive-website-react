import React from 'react'
import { useProductsContext } from '../Contexts/ProductContext'
import GridView from './GridView'

function ProductList() {
    const products = useProductsContext();
    
    return (
        <div>
            {<GridView products={products}/>}
        </div>
    )
}

export default ProductList
