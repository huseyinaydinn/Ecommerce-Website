import React, { useState } from 'react'
import SliderComp from "../components/main/SliderComp"
import Sorting from '../components/main/Sorting'
import Category from '../components/main/Category'
import Products from '../components/main/Products'

function Home() {
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div>
            <SliderComp />
            <Sorting setSort={setSort} />
            <div className="category-product-wrapper">
                <Category setCategory={setCategory} />
                <Products sortValue={sort} category={category} />
            </div>

        </div>
    )
}

export default Home