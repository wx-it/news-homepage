import "./grid1.css";

const Grid1 = ({ mobileGrid1Image, desktopGrid1Image }) => {
  return (
    <div className="grid1">
      <img className="mobile-image" src={mobileGrid1Image} alt="" />
      <img className="desktop-image" src={desktopGrid1Image} alt="" />
      <div className="grid-content"> 
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Grid1;
