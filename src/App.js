import SideBar from "./components/sideBar/SideBar";
import { ReactComponent as Logo } from "./assets/images/logo.svg"
import { ReactComponent as Menu } from "./assets/images/icon-menu.svg"
import { ReactComponent as Close } from "./assets/images/icon-menu-close.svg"



function App() {
  return (
    <div>
      <header>
        <SideBar Logo={Logo} Menu={Menu} Close={Close} />
      </header>
    </div>
  );
}

export default App;
