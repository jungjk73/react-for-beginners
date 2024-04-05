import {useState , useEffect} from 'react';
import Button from './Button';

function Counter() {
  const [counter,setCounter] = useState(0);
  const [keyword,setKeyword] = useState("");
  const [isShow,setShow] = useState(false);

  const onClick = () => setCounter((currentValue) => (currentValue + 1));

  //console.log("i run all the time");
  
  // state가 변경되도 한번만 실행 된다~~!!!
  useEffect(() => {    
    console.log("counter update");
  },[counter]);

  useEffect(()=>{
    console.log("search for",keyword);
  },[keyword]);
  function Hello()
  {
    useEffect(()=>{
      console.log("hello created");
      // component가 destroy 될때 실행 된다. ==> cleanup function
      return ()=>console.log("hello destroyed");
    },[]);
    return (
      <h2>hello~~</h2>
    );
  }
  return (
    <div>
      <h2>search string : {keyword}</h2>
      <input type="text" placeholder='Search here...' 
        value={keyword} 
        onChange={(e)=>(setKeyword(e.target.value))}
      />
      <h2>counter : {counter}</h2>
      <Button onClick={onClick} text="click me!"/>
      <hr/>
      <Button onClick={(e)=>(setShow((c)=>!c))} text={isShow?"Hide":"Show"}/>
      {isShow?<Hello/>:null}
    </div>
  );
}

export default Counter;
