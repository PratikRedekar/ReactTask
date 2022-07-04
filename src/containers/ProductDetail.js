import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct} from "../redux/actions/productActions";
import InsideHtml from "./InsideHtml";



const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductsDetail = async (id) => {
        const response = await axios.get("https://logibricks.com/api/blogs/marketplace-management?page=1").catch(err =>{
            console.log("Err", err);
        });

        dispatch(selectedProduct(response.data.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductsDetail();
    }, [productId]);
    console.log("Product: ",product);
    return(
    <div>
        <h1><InsideHtml/></h1>
    </div>
    );
};

export default ProductDetail;