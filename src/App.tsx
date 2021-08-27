import React, {FC, useState, useEffect} from 'react';
import Count from './components/count';
import Title from './components/title';
import './index.sass';

const keyList:Array<string> = [];
const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [styleSwitch, setStyleSwitch] = useState(false);
  
  document.onclick = () => {
    setCount(count + 1);
  };

  document.onkeydown = (event: KeyboardEvent) => {
    if (!keyList.includes(event.code)) {
      console.log(keyList)
      setCount(count + 1);
      keyList.push(event.code);
      (async() => {
        setStyleSwitch(true);
        await sleep(500);
        setStyleSwitch(false);
      })();
    }
  };

  document.onkeyup = (event: KeyboardEvent) => {
    if (keyList.includes(event.code)) {
      const index = keyList.indexOf(event.code);
      if (index > -1)
        keyList.splice(index, 1);
    }
  };

  return (
    <div className="App">
      <Title />
      <Count count={count} styleSwitch={styleSwitch}/>
      
    </div>
  );
}

export default App;
