import React, { useEffect } from 'react'
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux';
import { getCardTotal } from "../../redux/CardSlice"
import { useNavigate } from "react-router-dom";
import { getInputValue } from '../../redux/SearchSlice'


function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { itemCount } = useSelector(state => state.cards);

    const handleChange = (e) => {
        dispatch(getInputValue(e.target.value))
    }

    useEffect(() => {
        dispatch(getCardTotal());
    }, [dispatch]);
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo"><a href="/">Ecommerce.</a></div>
            </div>
            <div className="navbar-right">
                <div className="input-wrapper">
                    <input type="text" onChange={handleChange} />
                    <div className="search-magnet">
                        <AiOutlineSearch />
                    </div>
                </div>
                <AiOutlineHeart />
                <div className="basket-like-icons" onClick={() => navigate('card')}>
                    <div className="basket-amount">{itemCount}</div>
                    <SlBasket />
                </div>
            </div>
        </div>
    )
}

export default Navbar