import { useState } from "react";
import Recipe from "./Recipe";

const CardRecope = ({ recipes }) => {

  const mockRecipes = [{ title: 'bred', calories: '53', image: 'random', ingredients: ['a', 'b', 'c', 'd'] }, { title: 'sanduche', calories: '93', image: 'random', ingredients: ['casaa', 'basdasd', 'xqweqwe', 'dasdasd'] }]
  const [recipe, setRecipe] = useState(mockRecipes);

  return (
    <div className="flex  justify-center items-center h-96">

      <div className="bg-gray-500  flex flex-col rounded" > {recipe.map(item => <Recipe title={item.title} ingredients={item.ingredients} calories={item.calories} image={item.image} />)} </div>

    </div>
  );

}

export default CardRecope;
