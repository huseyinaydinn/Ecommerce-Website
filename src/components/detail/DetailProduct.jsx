import { Button, IconButton, Rating, Snackbar } from "@mui/material"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCard } from "../../redux/CardSlice"
import CloseIcon from '@mui/icons-material/Close';




function DetailProduct({ productDetail }) {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [open, setOpen] = React.useState(false);

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const increment = () => {
        if (quantity < productDetail?.rating?.count)
            setQuantity(quantity + 1)
    }

    const addBasket = (e) => {
        setOpen(true)
        setTimeout(() => {
            e.target.innerText = "Succes ✓"
            setTimeout(() => {
                e.target.innerText = "Buy Now"
            }, 700)
        }, 0)
        dispatch(addToCard({ id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, quantity: quantity, price: productDetail?.price }))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )
    return (
        <div className="detail-container">
            <img src={productDetail?.image} alt="" />
            <div className="product-details">
                <div className="detail-title">{productDetail?.title}<hr /></div>

                <div className="detail-rate"><span>Rate: </span>{productDetail?.rating?.rate} <Rating precision={0.1} defaultValue={Number(productDetail?.rating?.rate)} size="large" readOnly />
                </div>
                <div className="detail-count"><span>Count:</span><span className="value">{productDetail?.rating?.count}</span></div>
                <div className="detail-price"><span>Price: </span>{productDetail?.price} $</div>
                <div className="detail-description">{productDetail?.description}</div>
                <div className="detail-amount">
                    <button onClick={decrement}>-</button>
                    <input type="number" value={quantity} />
                    <button onClick={increment}>+</button>
                </div>
                <div className="btn-container"><Button onClick={addBasket} className="detail-btn">Buy Now</Button></div>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={500}
                onClose={handleClose}
                message="Add to Cart"
                action={action}
            />
        </div>
    )
}

export default DetailProduct