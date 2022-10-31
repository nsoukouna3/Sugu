
import './App.css';
import {BrowserRouter,Route, Routes,} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
  <div className='d-flex flex-column site-container' >
      <header>
          <Header/>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/product-item/:slug" element={<ProductPage/>}/>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </Container>
      </main>
    
    <footer>
      <Footer/>
    </footer>

  </div>
    </BrowserRouter>
  );
}

export default App;
