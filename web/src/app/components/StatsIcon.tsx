import React, { useReducer } from "react";
import { ICONDATAKIND } from "../../Reducers/progressbarReducers/MicIconReducer";
import micReducer from "../../Reducers/progressbarReducers/MicIconReducer";

const StatsIcon: React.FC = () => {
  const defaultValues: ICONDATAKIND = {
    iconProgress: 40,
    highlightColor: "#7ef542",
    activeColor: "#d9d923",
    nowActive: false,
    behaviour: "whenabovezero",
    icon: "micIcon.png",
  };
  const [state, dispatch] = useReducer(micReducer, defaultValues);

  function checkVisibility() {
    let visible = true;
    if (state.behaviour === "always-on") {
      return true;
    } else if (state.behaviour === "whenabovezero") {
      state.iconProgress > 0 ? (visible = true) : (visible = false);
    } else if (state.behaviour === "whenbelowhundred") {
      state.iconProgress < 100 ? (visible = true) : (visible = false);
    }
    return visible;
  }
  return (
    <>
      {checkVisibility() && (
        <div
          className="statsicon"
          style={{
            background: `linear-gradient( to top,${
              state.nowActive ? state.activeColor : state.highlightColor
            } 0%,${
              state.nowActive ? state.activeColor : state.highlightColor
            } ${
              state.iconProgress
            }%,rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 5,
          }}
        >
          <img src={`/src/assets/images/${state.icon}`} height={20} />
        </div>
      )}
    </>
  );
};
export default StatsIcon;
