import { useEffect } from 'react';
import './App.css'
import useFetch from './hooks/useFetch';
import CardRecipe from './components/CardRecipe';


function App() {

  const { data, loading, error } = useFetch()
  console.log('data', data)
  return (

    <>
      {loading ? <h1>Loading...</h1> : <CardRecipe recipes={data} />}}
    </>

  )
}

export default App
