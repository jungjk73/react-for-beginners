import {useState , useEffect} from 'react';

function CoinTracker() {
  const [isLoading,setIsLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [userName,setUserName] = useState("");
  const [coin,setCoin] = useState("");
  const [welcomeText,setWelcomeText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setWelcomeText(`${coin.name} -_-;; ${userName}`);
    setUserName("");
  };
  useEffect(()=>{
    //fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp)=>resp.json())
      .then((json)=>{
        setCoins(json);
        setIsLoading(false);
        if(json !==null && json.length > 0)
        {
          setCoin(json[0]);
        }
      });
  },[]);
  useEffect(()=>{
    
  },[coin,userName]);
  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      <form onSubmit={onSubmit}>
        {isLoading?<div><strong>Loading...</strong></div>:
          <div>
            <select onChange={(e)=>setCoin(coins[e.target.value])} value={coin.id}>
            {
              coins.map((coin,idx)=>(
                <option key={coin.id} value={coin.id}>{`${coin.name} : ${coin.address.city}`}</option>
              ))
            }
            </select>
          </div>
        }
        <input value={userName} onChange={(e)=>setUserName(e.target.value)} required type="text" placeholder="input your name"/>
        <button >click me</button>
        <h2>{welcomeText}</h2>
      </form>
    </div>
  );
}

export default CoinTracker;