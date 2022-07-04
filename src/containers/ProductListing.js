import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from "./ProductComonent";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { Box } from '@material-ui/core';




const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://logibricks.com/api/blogCategories")
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setProducts(response.data.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log("Products: ", products);
   
    return (
        <div>
           
        
        <div className="ui grid container">

            <br></br>
            <ProductComponent />

        </div>
        <br></br>
        <div justifyContent={"center"}>
        <Box 
        alignItems="center"
        justifyContent={"center"}
        display={"flex"}>
        <Stack spacing={2} justifyContent="center" >
            <Pagination  count={1} size="large" justifyContent="center" showFirstButton showLastButton />
        </Stack>
        </Box>
        </div>
        </div>
    );
};

export default ProductListing;