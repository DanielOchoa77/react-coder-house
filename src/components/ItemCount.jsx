import '../css/ItemCount.css'
import { useEffect, useState } from "react";
export default function ItemCount({stock}) {
  const [count, setCount] = useState(1);

  const handelDecreaseCount = () =>{
    if(count > 1){
      setCount((prev)=> prev - 1);
    }
  };

  const handelIncreaseCount = () =>{
    if(stock > count){
      setCount((prev)=> prev + 1);
    }
  };

  return (
    <div>
      <div className="container--itemCount--buttons">
        <button onClick={handelDecreaseCount} className="itemCount--button">-</button>
        <div className="itemCount--count">{count}</div>
        <button onClick={handelIncreaseCount} className="itemCount--button">+</button>
      </div>
    </div>
  );
}
