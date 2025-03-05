import { useState } from "react"
import { RecoilRoot } from "recoil"


function App() {


  return (
    <>
     <RecoilRoot>
      <Counter/>
     </RecoilRoot>
    </>
  )
}

function Counter(){
  const[count, setCount] = useState(0)

  return (
    <>
    <CurrentCount count = {count}/>
    <Increase setCount={setCount}/>
    <Decrease setCount={setCount}/>
    </>
  )
}

function CurrentCount({count}){
  return (
    <>
      {count}
    </>
  )
}

function Decrease({setCount}){
    return(
      <>
        <button 
          onClick={()=>{setCount(c=>c-1)

          }}>Decrease</button>
      </>
    )
}

function Increase({setCount}){
  return(
    <>
      <button 
        onClick={()=>{setCount(c=>c+1)
          
        }}>Increase</button>
    </>
  )
}

export default App
