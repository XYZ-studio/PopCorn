import React, { FC, useState } from 'react';
import Count from './components/count';
import Title from './components/title';
import './index.sass';
import './components/sass/image.sass';

const keyList: Array<string> = [];
const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
const isMobileDevice = () => {
  const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  const isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
  return isMobileDevice
}

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [styleSwitch, setStyleSwitch] = useState(false);
  const [touch, setTouch] = useState(false);

  if (isMobileDevice()) { 
    // mobile
    document.ontouchstart = () => {
      setCount(count + 1);
      setTouch(true);
      (async () => {
        setStyleSwitch(true);
        await sleep(100);
        setStyleSwitch(false);
      })();
    }

    document.ontouchend = () => {
      setTouch(false);
    }
  } else {
    // not mobile
    document.onmousedown = () => {
      setCount(count + 1);
      setTouch(true);
      (async () => {
        setStyleSwitch(true);
        await sleep(100);
        setStyleSwitch(false);
      })();
    };

    document.onmouseup = () => {
      setTouch(false);
    }
  }

  // key event
  document.onkeydown = (event: KeyboardEvent) => {
    if (!keyList.includes(event.code)) {
      setCount(count + 1);
      keyList.push(event.code);
      (async () => {
        setStyleSwitch(true);
        await sleep(100);
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
      <Count count={count} styleSwitch={styleSwitch} />
      <div id="image" className={touch ? 'no-touch' : 'touch'}></div>
    </div>
  );
}

export default App;
