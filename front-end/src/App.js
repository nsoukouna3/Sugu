
import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/"> sugu </a>

      </header>
      <main>
        <h1>Feature Products</h1>
        <div className="products" >
        {
          data.products.map((product)=>(
            <div className="product-item" key={product.slug}>
            <a href={`product-item/${product.slug}`}>
              <img src={product.image} alt={product.name}/>
            </a>
            <div className='product-info' >
            <a href={`product-item/${product.slug}`}>
              <p>{product.name}</p> 
              </a>
              <p><strong>${product.price}</strong></p>
              <button>Add to cart</button>
            </div>

          </div>))
        }
        </div>
      </main>
    </div>
  );
}

export default App;
