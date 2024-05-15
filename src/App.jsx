import React, { useState } from 'react';
import './App.css';
import ProductCard from './Components/card.jsx';

let receitas = [
    {
        nome: "Bolo de Chocolate",
        ingredientes: [
            { nome: "Chocolate em Pó", quantidade: 200, unidade: "g" },
            { nome: "Farinha de Trigo", quantidade: 250, unidade: "g" },
            { nome: "Açúcar", quantidade: 200, unidade: "g" }
        ],
        modoDePreparo: "1. Misture todos os ingredientes secos. 2. Adicione os líquidos. 3. Asse por 40 minutos."
    },
    {
        nome: "Risoto de Funghi",
        ingredientes: [
            { nome: "Arroz Arbóreo", quantidade: 300, unidade: "g" },
            { nome: "Funghi Seco", quantidade: 100, unidade: "g" },
            { nome: "Caldo de Legumes", quantidade: 500, unidade: "ml" }
        ],
        modoDePreparo: "1. Hidrate o funghi. 2. Refogue o arroz com o funghi. 3. Adicione o caldo aos poucos até o arroz ficar al dente."
    },
    {
        nome: "Salada de Frutas",
        ingredientes: [
            { nome: "Banana", quantidade: 2, unidade: "un" },
            { nome: "Maçã", quantidade: 2, unidade: "un" },
            { nome: "Laranja", quantidade: 2, unidade: "un" }
        ],
        modoDePreparo: "1. Corte as frutas em pedaços. 2. Misture tudo em uma tigela. 3. Sirva gelado."
    }
];

const App = () => {
  const [recipes, setRecipes] = useState(receitas);
  const [searchQuery, setSearchQuery] = useState('');
  const [newRecipeTitle, setNewRecipeTitle] = useState('');
  const [portionSize, setPortionSize] = useState(1);

  const deleteRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };

  const fractionalRecipe = (index, factor) => {
    const updatedRecipes = [...recipes];
    const updatedRecipe = { ...updatedRecipes[index] };

    updatedRecipe.ingredientes.forEach(ingrediente => {
      ingrediente.quantidade *= factor;
    });

    updatedRecipes[index] = updatedRecipe;
    setRecipes(updatedRecipes);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addRecipe = () => {
    if (newRecipeTitle.trim() !== '') {
      const newRecipe = {
        nome: newRecipeTitle.trim(),
        ingredientes: [],
        modoDePreparo: ""
      };

      setRecipes([...recipes, newRecipe]);
      setNewRecipeTitle('');
      setPortionSize(1);
    }
  };

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
          {filteredRecipes.map((recipe, index) => (
            <ProductCard 
              key={index} 
              index={index} 
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