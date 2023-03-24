import SideBar from "./components/sideBar/SideBar";
import Grid1 from "./components/grid1/Grid1";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as Menu } from "./assets/images/icon-menu.svg";
import { ReactComponent as Close } from "./assets/images/icon-menu-close.svg";
import  mobileGrid1Image from "./assets/images/image-web-3-mobile.jpg";


function App() {
  return (
    <>
      <header>
        <SideBar Logo={Logo} Menu={Menu} Close={Close} />
      </header>
      <main>
        <Grid1 mobileGrid1Image={mobileGrid1Image} />
      </main>
    </>
  );
}

export default App;
