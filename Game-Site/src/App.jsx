import {  useState } from 'react'
import styles from './App.module.css';
import Navbar from './Components/Navbar';
import Card from './card';
import { Outlet, NavLink, Link} from 'react-router-dom';
import gamedata from './gameData.js';
function App() {
  const [gameActive, setGameActive] = useState(styles.gridContainer)
  const [xActive, setXActive] = useState(styles.xnone)
  const [bodActive, setBodActive] = useState(styles.xnone)
 

  function gameShow(){
    if (gameActive == styles.gridContainer){
      setGameActive(styles.gridnone);
      setXActive(styles.closeButton);
      setBodActive(styles.outletContainer);
    
    }
    else{
      setGameActive(styles.gridContainer);
      setXActive(styles.xnone);
      setBodActive(styles.xnone);
      
    }
  }
  
  const gData = gamedata.map((game) => 
    <div onClick={gameShow} key={game.title}>
      <NavLink to={`/gamePage/${game.title}`}>
        <Card 
          title={game.title} 
          description={game.description} 
          longDescription={game.longDescription} 
          imageSrc={game.imagePath} 
          genre={game.genre}
          price={game.price}
          publisher={game.publisher}
          developer={game.developer}
          
        />
      </NavLink>
    </div> 
  );
    
    return (
      <>
      <Navbar/>
    <div className={bodActive} >
    <Link to="/" className={xActive} onClick={gameShow}  >❌</Link>
      <Outlet context={{ gData }} />
      </div>
      <div className={gameActive}>
        {gData}
      </div>
    </>
  )
}

export default App
