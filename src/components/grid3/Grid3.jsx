import "./grid3.css";

const Grid3 = ({ retro, topLaptops, gaming }) => {
  return (
    <div className="grid3">
      <div className="card">
        <img src={retro} alt="" />
        <div className="content">
          <span>01</span>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="card">
        <img src={topLaptops} alt="" />
        <div className="content">
          <span>02</span>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>{" "}
      </div>
      <div className="card">
        <img src={gaming} alt="" />
        <div className="content">
          <span>03</span>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default Grid3;
