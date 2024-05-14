import React from 'react';
import './card.css';

const ProductCase = ({ recipe, deleteRecipe, fractionalRecipe }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>Porção atual: para {recipe.currentPortionSize} pessoa(s)</p>
      <div className="recipe-actions">
        <button onClick={() => deleteRecipe(recipe.id)}>Excluir</button>
        <button onClick={() => fractionalRecipe(recipe.id, 0.5)}>Meia Porção</button>
        <button onClick={() => fractionalRecipe(recipe.id, 2)}>Dobrar Porção</button>
      </div>
    </div>
  );
};

export default ProductCase;