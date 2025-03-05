import { useEffect, useState } from 'react'
import './App.css'
import { useFetch, usePostTitle } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev';

function App() {
  // const postTitle = usePostTitle();

  const[state, setState]= useState(0);
  const prev = usePrev(state);


  const { finalData, Loading } = useFetch("https://jsonplaceholder.typicode.com/posts/1");


  if(Loading){
    return(
      <div>
        Laoding...
      </div>
    )
  }


  return (
    <>
     <div>
     {/* {postTitle} */}
     {JSON.stringify(finalData)}
     </div>

     <div>{state}</div>
     <button 
      onClick={()=>{
        setState(curr=>curr+1);
      }}>click me</button>
      <div>prev state value is {prev}</div>
    </>
  )
}

export default App
