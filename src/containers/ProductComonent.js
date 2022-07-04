import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((products) => {
        const { id, title, image } = products;
        return (
            <div>
                <br></br><br></br>
                <Grid>
                <Card sx={{ maxWidth: 345 }}>
                <Link to={`/product/${id}`}>
                    <CardMedia
                        component="img"
                        alt={id}
                        height="140"
                        image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {title}
                        </Typography>
                    </CardContent>
                    </Link>
                </Card>

                {/* CARDS RESPONSIVE CAN BE DONE WITH SEMANTIC UI */}
                {/* <div className="four column wide" >
        <Link to={`/product/${id}`}>
       <div className="ui card">
           <div className="card">
               <div className="ui medium image"><img src={image} alt={id} /></div>
               <div className="ui teal message">
                   <div className="ui medium header">{title}</div>
                   <div className="meta"><span className="date">{updated_at}</span></div>
               </div>
           </div>
       </div>
        </Link>
   </div> */}
            </Grid>

            
            </div>
        );
    });

    return <>{renderList}</>;

};

export default ProductComponent;