import React from "react";
import StatsIcon from "./StatsIcon";

const PlayerStatsBar: React.FC = () => {
  const progress: number = 90;
  return (
    <>
      <div style={{ marginTop: "auto" }}>
        <StatsIcon />
      </div>
    </>
  );
};

export default PlayerStatsBar;
