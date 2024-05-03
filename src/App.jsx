import React, { useState } from 'react';
import './App.css'
import ProductCard from './Components/card.jsx';


function App() {
  
  const [products, setProducts] = useState([]);
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <>
    <nav className="nav-bar">
      <li></li>
    </nav>
      <div className="app">
        <h1>Minha Loja de Bijuterias</h1>
          <div className="product-list">
            {products.map(Product => (
              <ProductCard key={Product.id} Product={Product} />
            ))}
          </div>
      </div>
      <button onClick={() => {
        // Exemplo: Adicionar um novo produto quando o botão for clicado
        const newProduct = new products(
          products.length + 1,
          'Novo Produto',
          'Descrição do Novo Produto',
          0, // Preço e imagem podem ser inicializados como 0 ou vazios e atualizados posteriormente
          ''
        );
        addProduct(newProduct);
      }}>Adicionar Novo Produto</button>
    </>
  )
}

export default App
