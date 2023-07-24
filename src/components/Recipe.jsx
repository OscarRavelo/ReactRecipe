


const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="bg-red-500  flex flex-col text-white mb-4 rounded" >
      <h1>title: {title}</h1>
      <p> calories: {calories}</p>
      <ol>
        ingredients:
        {ingredients.map(ingredient => (


          <li>{ingredient}</li>
        ))}
      </ol>
    </div>
  );
}


export default Recipe; 
