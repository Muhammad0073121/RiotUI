import React, { useReducer } from "react";
import StatsIcon from "./StatsIcon";
import micReducer, { ICONDATAKIND } from "../../Reducers/IconReducer";

const PlayerStatsBar: React.FC = () => {
  const micValues: ICONDATAKIND = {
    iconProgress: 100,
    highlightColor: "#ffffff",
    activeColor: "#e0bc43",
    nowActive: false,
    behaviour: "always-on",
    icon: "microphone",
    visible: true,
  };

  const healthValues: ICONDATAKIND = {
    iconProgress: 50,
    highlightColor: "#d11121",
    activeColor: "#d11121",
    nowActive: false,
    behaviour: "whenabovezero",
    icon: "heart",
    visible: true,
  };

  const armorValues: ICONDATAKIND = {
    iconProgress: 100,
    highlightColor: "#2f41de",
    activeColor: "#2f41de",
    nowActive: false,
    behaviour: "whenabovezero",
    icon: "shield-halved",
    visible: true,
  };

  const foodValues: ICONDATAKIND = {
    iconProgress: 100,
    highlightColor: "#f5a142",
    activeColor: "#f5a142",
    nowActive: false,
    behaviour: "whenabovezero",
    icon: "burger",
    visible: true,
  };

  const waterValues: ICONDATAKIND = {
    iconProgress: 100,
    highlightColor: "#2fa3de",
    activeColor: "#2fa3de",
    nowActive: false,
    behaviour: "whenabovezero",
    icon: "droplet",
    visible: true,
  };
  const [healthState, healthDispatch] = useReducer(micReducer, healthValues);
  return (
    <>
      <div style={{ marginTop: "auto", position: "relative", display: "flex" }}>
        <StatsIcon data={micValues} />
        <StatsIcon data={healthValues} />
        <StatsIcon data={armorValues} />
        <StatsIcon data={foodValues} />
        <StatsIcon data={waterValues} />
      </div>
    </>
  );
};

export default PlayerStatsBar;
