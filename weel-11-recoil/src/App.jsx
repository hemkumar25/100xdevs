import { RecoilRoot,atom, useRecoilValue, useSetRecoilState } from "recoil"
import { counter , evenSelector } from "./store/atoms/counter"


function App() {


  return (
    <>
     <RecoilRoot>
      <Buttons/>
      <Counter/>
      <IsEven/>
     </RecoilRoot>
    </>
  )
}

function Counter(){
  const count = useRecoilValue(counter);

  return (
    <>
    {count}
    </>
  )
}

const  Buttons = () => {
  const setCount = useSetRecoilState(counter);

  function increase (){
    setCount(c=>c+2)
  }

  function decrease(){
    setCount(c=>c+1)
  }

  return(
    <>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  )
}

const IsEven=()=>{
  const even = useRecoilValue(evenSelector);

  return(
    <div>
      {even?"Even":"odd"}
    </div>
  )
}

export default App;

