


import {WORD_BANK} from "./game/wordsBank";
import Hud from "./components/HUD";
import ControlPanel from "./components/ControlPanel";
import HelpModal from "./components/HelpModal";
import Table from "./components/Table";


  

function App() {
  
  return (
    <>
      <div className="stage">
        <Hud />
        <Table />
        <ControlPanel />
      </div>

      <HelpModal />
    </>
  )

}
 
export default App
