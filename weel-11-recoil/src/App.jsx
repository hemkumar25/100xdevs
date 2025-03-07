import { RecoilRoot,atom, useRecoilValue, useSetRecoilState } from "recoil"
import { counter } from "./store/atoms/counter"


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
  // const[count, setCount] = useState(0)

  return (
    <>
   <div>
    <CurrentCount/>
      <Increase />
      <Decrease/>
   </div>
    </>
  )
}

function CurrentCount(){

  const count = useRecoilValue(counter);
  return (
    <>
      {count}
    </>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(counter);
    return(
      <>
        <button 
          onClick={()=>{setCount(c=>c-1)

          }}>Decrease</button>
      </>
    )
}

function Increase(){
  const setCount = useSetRecoilState(counter);
  return(
    <>
      <button 
        onClick={()=>{setCount(c=>c+1)
          
        }}>Increase</button>
    </>
  )
}

export default App

