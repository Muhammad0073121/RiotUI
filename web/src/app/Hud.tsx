import React, { useState } from "react";
import "./Hud.css";
import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";
import background from "../assets/images/temp_background.png";
import blank_bg from "../assets/images/blank_bg.jpg";
import PlayerInfoTab from "./components/PlayerInfoTab";
import PlayerStatsBar from "./components/PlayerStatsBar";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const Hud: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: `url(${blank_bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="nui-wrapper" style={backgroundStyle}>
      <div className="container">
        <div className="row">
          <div>Chat box column</div>
          <PlayerStatsBar />
        </div>

        <div className="row">Column 2</div>
        <div className="row">
          <PlayerInfoTab />
        </div>
      </div>
    </div>
  );
};

export default Hud;
