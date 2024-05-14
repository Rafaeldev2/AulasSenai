import React, { useState } from 'react';
import './App.css';
import ProductCard from './Components/card.jsx';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newRecipeTitle, setNewRecipeTitle] = useState('');
  const [portionSize, setPortionSize] = useState(1);

  const addRecipe = () => {
    if (newRecipeTitle.trim() !== '') {
      setRecipes([
        ...recipes,
        {
          id: recipes.length + 1,
          title: newRecipeTitle.trim(),
          originalPortionSize: portionSize,
          currentPortionSize: portionSize,
          ingredients: []
        }
      ]);
      setNewRecipeTitle('');
      setPortionSize(1);
    }
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const fractionalRecipe = (id, factor) => {
    setRecipes(
      recipes.map(recipe =>
        recipe.id === id ? 
        { ...recipe, currentPortionSize: recipe.originalPortionSize * factor } 
        : recipe
      )
    );
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="app">
        <h1>Minhas Receitas</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar receitas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="recipe-list">
          {filteredRecipes.map(recipe => (
            <ProductCard 
              key={recipe.id} 
              recipe={recipe} 
              deleteRecipe={deleteRecipe} 
              fractionalRecipe={fractionalRecipe} 
            />
          ))}
        </div>
      </div>
      <div className="add-recipe">
        <input
          type="text"
          placeholder="Digite o nome da receita"
          value={newRecipeTitle}
          onChange={(e) => setNewRecipeTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Porção para quantas pessoas?"
          value={portionSize}
          onChange={(e) => setPortionSize(parseInt(e.target.value))}
        />
        <button onClick={addRecipe}>Adicionar Receita</button>
      </div>
    </>
  );
}

export default App;