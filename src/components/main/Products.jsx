import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getCategoryProducts } from "../../redux/ProductSlice"
import Loading from "../Loading"
import Product from "./Product"

function Products({ category, sortValue }) {
    const dispatch = useDispatch()
    const { products, productsStatus } = useSelector(state => state.products)
    const inputValue = useSelector((state) => state.search.inputValue)

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue.toLowerCase());
    });

    useEffect(() => {
        if (category) {
            dispatch(getCategoryProducts(category))

        } else {
            dispatch(getProducts())
        }


    }, [dispatch, category, sortValue])

    return (
        <>
            {
                productsStatus == "LOADING" ? <Loading /> : <>
                    <div className="products-container">{filteredProducts?.sort((a, b) => {
                        if (sortValue == 'inc') {
                            return a.price - b.price
                        } else if (sortValue == 'desc') {
                            return b.price - a.price
                        } else {
                            return ""
                        }
                    }).map((product, index) => {
                        return (
                            <Product key={index} product={product} />
                        )
                    })}
                    </div>
                </>
            }
        </>
    )
}

export default Products