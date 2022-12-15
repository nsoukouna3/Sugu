import { useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Helmet } from 'react-helmet';
import Rating from '../components/Rating';
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function ProductScreen(){
    const location = useLocation();
    
    const { slug ,name,price, rating,countInStock, numReviews, description } = location.state;
    return(
        <div className="ProductPage">
            <Row>
           
        <Col md={6}>
          <img
            className="img-large"
            src={"/images/"+slug+".jpeg"}
            alt={name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{name}</title>
              </Helmet>
              <h1>{name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={rating}
                numReviews={numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Pirce : ${price}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>


        <Col md={3}>
            <Card>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>${price}</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{countInStock>0? <Badge bg="success">In Stock</Badge>
                                :
                                <Badge bg="danger">Unavailable</Badge>
                                }
                                
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {countInStock>0 &&(
                          <ListGroup.Item>
                            <div className="d-grid" >
                              <Button variant="primary" > Add to Cart</Button> 
                            </div>
                          </ListGroup.Item>
                        )}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
        </Row>
            
        </div>
    );

}
export default ProductScreen;