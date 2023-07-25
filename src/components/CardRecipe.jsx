import { useState } from "react";
import Recipe from "./Recipe";

const CardRecipe = ({ recipes }) => {

  const mockRecipes = [{
    "id": "fbba5673-c1f5-455e-b528-74f4afb646a5",
    "name": "Keto Bacon Wrapped Asparagus",
    "tags": [
      "dairy-free",
      "gluten-free",
      "wheat-free",
      "egg-free",
      "peanut-free",
      "tree-nut-free",
      "soy-free",
      "fish-free",
      "shellfish-free",
      "beef-free",
      "chicken-free",
      "keto",
      "lchf",
      "relevant-meal--sides"
    ],
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
    "servings": 2,
    "servingSizes": [
      {
        "scale": 1,
        "qty": 1,
        "grams": 79,
        "units": "4 pieces"
      }
    ],
    "nutrients": {
      "caloriesKCal": 87.636,
      "caloriesKJ": 366.67,
      "totalCarbs": 2.747,
      "diabetesCarbsADA": 2.747,
      "netCarbs": 1.378,
      "diabetesCarbs": 1.393,
      "fiber": 1.339,
      "starch": 0.051,
      "sugar": 1.344,
      "addedSugar": 0.144,
      "sugarAlcohols": 0.03,
      "protein": 6.83,
      "fat": 5.691,
      "transFat": 0.023,
      "monousatFat": 2.484,
      "polyunsatFat": 1.009,
      "omega3Fat": 0.049,
      "omega6Fat": 0.96,
      "saturatedFat": 1.94,
      "cholesterol": 15.84,
      "vitaminA": 25.866,
      "vitaminC": 3.572,
      "vitaminD": 0.068,
      "vitaminE": 0.788,
      "vitaminK": 26.535,
      "vitaminB1": 0.181,
      "vitaminB2": 0.127,
      "vitaminB3": 2.297,
      "vitaminB5": 0.351,
      "vitaminB6": 0.144,
      "vitaminB12": 0.175,
      "potassium": 208.687,
      "magnesium": 13.89,
      "calcium": 17.068,
      "iron": 1.518,
      "zinc": 0.835,
      "copper": 0.137,
      "phosphorus": 95.248,
      "sodium": 270.711,
      "selenium": 9.579,
      "folate": 33.169,
      "choline": 24.525,
      "alcohol": 0,
      "caffeine": 0,
      "gluten": 0,
      "manganese": 0.104,
      "conjugatedLinoleicAcid": 0.008,
      "phyticAcid": 12.757,
      "xylitol": 0,
      "isomalt": 0,
      "sorbitol": 0,
      "maltitol": 0,
      "lactitol": 0,
      "erythritol": 0,
      "pinitol": 0,
      "inositol": 0.022,
      "mannitol": 0.008
    },
    "image": "https://tinyurl.com/2p82zzca/fbba5673-c1f5-455e-b528-74f4afb646a5.png"
  }]
  const [recipe, setRecipe] = useState(mockRecipes);

  return (
    <div className="flex  justify-center items-center h-96">

      <div className="bg-gray-500  flex flex-col rounded" > {recipe.map(item => <Recipe title={item.title} ingredients={item.ingredients} calories={item.calories} image={item.image} />)} </div>

    </div>
  );

}

export default CardRecipe;
