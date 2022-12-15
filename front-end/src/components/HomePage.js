
import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProductCard from "./Cards";


function HomeScreen(){
  const [products, setProducts]= useState([]);
  useEffect(()=>{
    let result;

    const fecthData= async()=>{
      try {
        result = await axios.get('/api/products')
      } catch(err) {
        return;
      }
      setProducts(result.data)

    }
    fecthData();

  },[])

  return <div> <h1>Feature Products</h1>
    <div className="products" >
      <Row>
          {products.map((product)=>(
            <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
              <ProductCard product={product}></ProductCard>
            </Col>))
          }
        </Row>
     </div>
  </div>
}
export default HomeScreen;