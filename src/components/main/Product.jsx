import React from 'react'
import { IconButton, Snackbar } from "@mui/material"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCard } from "../../redux/CardSlice"
import CloseIcon from '@mui/icons-material/Close';


function Product({ product }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);

    const addBasket = (e) => {
        setOpen(true)
        setTimeout(() => {
            e.target.innerText = "Succes ✓"
            setTimeout(() => {
                e.target.innerText = "Buy Now"
            }, 700)
        }, 0)
        dispatch(addToCard({ id: product?.id, title: product?.title, image: product?.image, quantity: (product.quantity) ? product.quantity : 1, price: product?.price }))
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
        <>
            <div className="product-card">
                <div className="product-details" onClick={() => navigate(`products/${product?.id}`)}>
                    <img className="product-image" src={product.image} alt="product-image" />
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">{product.price} <span>$</span></div>
                </div>
                <button className="product-btn" onClick={addBasket}>Buy Now</button>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={500}
                onClose={handleClose}
                message="Add to Cart"
                action={action}
            />
        </>
    )
}

export default Product