import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Header ({onValue}) {

  const [fix, isFixed] = useState(false)
  const [silang, setSilang] = useState(false)
  const popular = useNavigate()
  

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.pageYOffset;
      const isScroll = currentPos > 50;

      isFixed(isScroll)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  }, []);

  function handleClick () {
    setSilang(!silang)
  }


    return (
    <div className={fix ? 'header' : ''}>
    <nav className="App-header">
        <div className="hamburger-menu" onClick={handleClick}>
            <span className={silang ? 'silang-satu' : ''}></span>
            <span className={silang ? 'silang-ilang' : ''}></span>
            <span className={silang ? 'silang-dua' : ''}></span>
        </div>
        <a href='' className="main-menu">TMS</a>
        <ul className='nav-second'>
          <div id={silang ? 'nav-muncul' : ''} className="nav-center">
          <li><a href="" style={{color : 'grey'}}>Top Rated</a></li>
          <li><a href="" onClick={() => popular('/popular')}>Popular</a></li>
          </div>
          <li><input type="text" required="required" onKeyPress={onValue}/><span>Search Movies</span></li>
        </ul>
    </nav>
    </div>
    )
}