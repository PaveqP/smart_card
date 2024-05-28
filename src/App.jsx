import { Pages } from './pages';
import { Header } from './modules';
import './App.scss'

import './font/TTFirsNeue-Bold.ttf'
import './font/TTFirsNeue-Medium.ttf'
import './font/TTFirsNeue-Regular.ttf'
import { useEffect, useState } from 'react';

function App() {

  const [offset, setOffset] = useState(0)
  const [mobile, setMobile] = useState(false)
 
  const handleResize = () => {
    if (window.innerWidth <= 648) {
        setMobile(true)
        setOffset(0)
    } else {
      setMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })


  return (
    <div className="App">
      <Header setOffset={setOffset} offset={offset}/>
      <Pages offset={offset} mobile={mobile}/>
    </div>
  );
}

export default App;
