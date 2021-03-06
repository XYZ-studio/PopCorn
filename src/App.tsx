import React, { FC, useState, useEffect } from 'react';
import Count from './components/count';
import Title from './components/title';
import './index.sass';
import './components/sass/image.sass';
import { useCookies } from 'react-cookie';

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
  const [cookies, setCookie] = useCookies(['count']);
  const [count, setCount] = useState(0);
  const [styleSwitch, setStyleSwitch] = useState(false);
  const [touch, setTouch] = useState(false);
  const touchFun = () => {
    setCount(count + 1);
    setTouch(true);
    const audio = new Audio('wtf.mp3');
    audio.volume = 0.5;
    audio.play();
    (async () => {
      setStyleSwitch(true);
      await sleep(100);
      setStyleSwitch(false);
    })();
  };
  if (isMobileDevice()) {
    // mobile
    document.ontouchstart = touchFun;

    document.ontouchend = () => {
      setTouch(false);
    }
  } else {
    // not mobile
    document.onmousedown = touchFun;

    document.onmouseup = () => {
      setTouch(false);
    }
  }

  // key event
  document.onkeydown = (event: KeyboardEvent) => {
    if (!keyList.includes(event.code)) {
      touchFun();
      keyList.push(event.code);
    }
  };

  document.onkeyup = (event: KeyboardEvent) => {
    if (keyList.includes(event.code)) {
      const index = keyList.indexOf(event.code);
      setTouch(false);
      if (index > -1)
        keyList.splice(index, 1);
    }
  };
  useEffect(() => {
    if (cookies.count)
      setCount(Number(cookies.count));
  }, [])
  useEffect(() => {
    setCookie('count', count);
  }, [count]);

  return (
    <div className="App">
      <Title />
      <Count count={count} styleSwitch={styleSwitch} />
      <div id="image" className={touch ? 'no-touch' : 'touch'}></div>
    </div>
  );
}

export default App;
