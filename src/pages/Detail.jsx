import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getDetailProducts } from "../redux/ProductSlice";
import DetailProduct from "../components/detail/DetailProduct";
import Loading from "../components/Loading";

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { productDetail, productDetailStatus } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getDetailProducts(id))
    }, [dispatch, id])

    console.log(productDetail)
    return (
        <div>
            {
                productDetailStatus == "LOADING" ? <Loading /> : <DetailProduct productDetail={productDetail} />
            }

        </div>
    )
}

export default Detail