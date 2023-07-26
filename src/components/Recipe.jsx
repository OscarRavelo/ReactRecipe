


const Recipe = ({ title, steps, image, ingredients }) => {
  return (
    <div className="bg-red-500  flex flex-col text-white mb-4 rounded" >
      <img className="w-96 h-48 object-cover" src={image} alt="" />
      <h1>title: {title}</h1>
      <ol>
        ingredients:
        {ingredients.map(ingredient => (


          <li key={ingredient.name} >{ingredient.name}</li>
        ))}
      </ol>
      <div>

        {steps.map(step => (<p key={step} >{step}</p>))}

      </div>
    </div>
  );
}


export default Recipe; 
