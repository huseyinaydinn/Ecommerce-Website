import React from 'react'
import { removeFromCard } from "../../redux/CardSlice";
import { useDispatch } from "react-redux";



function CardComp({ card }) {
  const dispatch = useDispatch()
  return (
    <div div className="card-container" >

      <div className="card-left">
        <div>
          <img src={card.image} alt="image" />
        </div>
        <div>
          <div className="card-title">{card?.title}</div>
        </div>
      </div>


      <div className="card-right">
        <div className="card-price">{card?.price} $ ({card?.quantity}x)</div>
        <button className="card-btn" onClick={() => dispatch(removeFromCard(card?.id))}>Remove</button>
      </div>
    </div >
  )
}

export default CardComp;