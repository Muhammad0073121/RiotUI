import React, { useEffect } from "react";
import { ICONDATAKIND } from "../../Reducers/IconReducer";

const StatsIcon: React.FC<any> = (props: { data: ICONDATAKIND }) => {
  const passedValues = props.data;

  const gradiant = `linear-gradient( to top, ${
    passedValues.nowActive
      ? passedValues.activeColor
      : passedValues.highlightColor
  } 0%,${
    passedValues.nowActive
      ? passedValues.activeColor
      : passedValues.highlightColor
  } ${passedValues.iconProgress}%, rgba(242, 206, 209,0.2) ${
    passedValues.iconProgress + 1
  }%, rgba(242, 206, 209,0.2) 100%)`;

  const styleSheet = {
    background: `${gradiant}`,
    fontSize: "30px",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
  return (
    <>
      {passedValues.visible && (
        <div
          style={{
            position: "relative",
            display: "inline",
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          <i
            className={`fa fa-solid fa-${passedValues.icon}`}
            style={styleSheet}
            key={gradiant}
          ></i>
        </div>
      )}
    </>
  );
};
export default StatsIcon;
