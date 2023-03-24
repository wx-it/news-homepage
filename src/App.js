import SideBar from "./components/sideBar/SideBar";
import Grid1 from "./components/grid1/Grid1";
import Grid2 from "./components/grid2/Grid2";
import Grid3 from "./components/grid3/Grid3";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as Menu } from "./assets/images/icon-menu.svg";
import { ReactComponent as Close } from "./assets/images/icon-menu-close.svg";
import mobileGrid1Image from "./assets/images/image-web-3-mobile.jpg";
import retro from "./assets/images/image-retro-pcs.jpg"
import topLaptops from "./assets/images/image-top-laptops.jpg"
import gaming from "./assets/images/image-gaming-growth.jpg"

function App() {
  return (
    <>
      <header>
        <SideBar Logo={Logo} Menu={Menu} Close={Close} />
      </header>
      <main>
        <Grid1 mobileGrid1Image={mobileGrid1Image} />
        <Grid2 />
        <Grid3 retro={retro} topLaptops={topLaptops} gaming={gaming} />
      </main>
    </>
  );
}

export default App;
