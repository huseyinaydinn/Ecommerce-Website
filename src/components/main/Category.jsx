import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/CategorySlice';
import { CiMenuBurger } from 'react-icons/ci';
import { Drawer } from '@mui/material';

function Category({ setCategory }) {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const [open, setOpen] = useState(false);

    const allCategory = () => {
        setCategory('')
        setOpen(false)
    }

    return (
        <div className="category-container">
            <div className="mobile-view">
                <CiMenuBurger className="burger" onClick={() => setOpen(!open)} />
                <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                    <div className="category-title">CATEGORIES</div>
                    <div className="all-category" onClick={allCategory}>all</div>
                    {categories?.map((category, index) => {
                        return (
                            <div
                                onClick={() => {
                                    setCategory(category);
                                    setOpen(false);
                                }}
                                className="category-item"
                                key={index}
                            >
                                {category}
                            </div>
                        );
                    })}
                </Drawer>
            </div>
            <div className="comp-view">
                <div className="category-title">CATEGORIES</div>
                <div className="all-category" onClick={allCategory}>all</div>
                {categories?.map((category, index) => {
                    return (
                        <div
                            onClick={() => {
                                setCategory(category);
                                setOpen(false);
                            }}
                            className="category-item"
                            key={index}
                        >
                            {category}
                        </div>
                    );
                })}
            </div>


        </div>
    );
}

export default Category;