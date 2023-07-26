import { useState } from "react";
import Recipe from "./Recipe";

const CardRecipe = ({ recipes }) => {

  const mockRecipes = [{
    "id": "fbba5673-c1f5-455e-b528-74f4afb646a5",
    "name": "Keto Bacon Wrapped Asparagus",
    "description": "This side dish is made with just 2 ingredients: bacon and asparagus! The asparagus is cooked exactly right with a firm bite but tender exterior. The bacon adds the perfect amount of salt needed for a simply seasoned dish. Elevate your filet mignon or enjoy this as a snack with your favorite keto dip.\n\nJessica L.",
    "prepareTime": 10,
    "cookTime": 15,
    "ingredients": [
      {
        "name": "Asparagus, Raw",
        "servingSize": {
          "units": "ounce",
          "desc": "4-½ ounce",
          "qty": 4.5,
          "grams": 128,
          "scale": 0.952
        }
      },
      {
        "name": "Bacon",
        "servingSize": {
          "units": "slice - 6\" long",
          "desc": "4 slice - 6\" long",
          "qty": 4,
          "grams": 32,
          "scale": 1.129
        }
      }
    ],
    "steps": [
      "Fill a pan with water and heat it to boiling over high heat. You may salt the water at your discretion. Meanwhile, cut approx. 8 asparagus to about 8 inches long. You may either leave the tops on or remove them. Place the asparagus in the boiling water and cook for just 3 minutes.",
      "After 3 minutes, drain the water from the asparagus and rinse them quickly with very cold water until they are no longer hot. Pat the asparagus dry. Additionally, slice 4 full length pieces of bacon in half long-ways, so you have 8 long strips of bacon.",
      "One by one, wrap a strip of bacon around each asparagus, leaving a little space between each section of bacon.",
      "Heat a non-stick pan on medium heat. Place 4 asparagus in the hot pan, seams of the bacon down. Cook the asparagus for about 4 minutes, then gently rotate them over the cook the bacon on the other side without unraveling it.",
      "Repeat the cooking process with your remaining asparagus. Enjoy hot!"
    ],
    "image": "https://tinyurl.com/2p82zzca/fbba5673-c1f5-455e-b528-74f4afb646a5.png"
  }]
  const [recipe, setRecipe] = useState(mockRecipes);

  return (
    <div className="flex  justify-center items-center ">

      <div className="bg-gray-500  flex flex-col rounded" > {recipe.map(item => <Recipe title={item.name} ingredients={item.ingredients} steps={item.steps} key={item.id} image={item.image} />)} </div>

    </div>
  );

}

export default CardRecipe;
