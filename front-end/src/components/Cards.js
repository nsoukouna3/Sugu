import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
import Rating from "./Rating";

function ProductCard(props){
    const {product} = props;
    
    return(
    <Card className="product-item" >
        <Link to={`product-item/${product.slug}`}
        state= {product}>
            <img src={product.image} className="card-img-top" alt={product.name}/>
        </Link>
        <Card.Body>
            <Link to={`product-item/${product.slug}`}
            state={product}>
                <Card.Title>{product.name}</Card.Title> 
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <Card.Text>${product.price}</Card.Text>
            <Button>Add to cart</Button>
        </Card.Body>
      

    </Card>
    )
}
 
export default ProductCard;