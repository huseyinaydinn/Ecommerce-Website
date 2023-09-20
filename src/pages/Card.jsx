import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { clearCard, getCardTotal } from "../redux/CardSlice";
import CardComp from "../components/card/CardComp";

function Card() {
    const dispatch = useDispatch();
    const { cards, totalAmount, itemCount } = useSelector(state => state.cards);

    useEffect(() => {
        dispatch(getCardTotal());
    }, [dispatch, cards])

    return (
        <div className="card-page">
            {
                cards?.length > 0 ? <div>
                    {
                        cards?.map((card, index) => {
                            return <CardComp key={index} card={card} />
                        })
                    }
                </div>

                    : <div className="empty-basket"> <div>Basket is empty... </div> <a className="basket-homepage" href="/">Go Home Page</a></div>
            }

            {
                totalAmount ? <div className="card-total-price">
                    <div><span>Total</span> {totalAmount} $ </div><button onClick={() => dispatch(clearCard())} className="removeAll-btn">Remove All</button>
                </div> : <div></div>
            }

        </div>
    )
}

export default Card