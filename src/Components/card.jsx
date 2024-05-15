import React from 'react';
import './card.css';

const ProductCase = ({ index, recipe, deleteRecipe, fractionalRecipe }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.nome}</h3>
      <p>Modo de Preparo: {recipe.modoDePreparo}</p>
      <p>Ingredientes:</p>
      <ul>
        {recipe.ingredientes.map((ingrediente, ingIndex) => (
          <li key={ingIndex}>
            {ingrediente.nome}: {ingrediente.quantidade} {ingrediente.unidade}
          </li>
        ))}
      </ul>
      <div className="recipe-actions">
        <button onClick={() => deleteRecipe(index)}>Excluir</button>
        <button onClick={() => fractionalRecipe(index, 0.5)}>Meia Porção</button>
        <button onClick={() => fractionalRecipe(index, 2)}>Dobrar Porção</button>
      </div>
    </div>
  );
};

export default ProductCase;